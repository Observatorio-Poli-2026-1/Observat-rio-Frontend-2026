import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/backgroundlogin.jpg';
import axios from 'axios';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { canAttemptAction, formatCooldown, getCooldownRemaining, isHoneypotFilled, registerAttempt } from '../utils/antiAutomation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResend, setShowResend] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [now, setNow] = useState(Date.now());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const cooldownRemaining = getCooldownRemaining('login', 30_000, now);
  const handleResendEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      toast.success('E-mail de verificação reenviado!');
      setShowResend(false);
    } catch (err: any) {
      console.error('Erro ao reenviar e-mail:', err);
      toast.error('Erro ao reenviar e-mail. Verifique suas credenciais.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShowResend(false);

    if (isHoneypotFilled(honeypot)) {
      setError('Comportamento automatizado detectado.');
      return;
    }

    if (!canAttemptAction('login', 30_000)) {
      setError(`Muitas tentativas. Aguarde ${formatCooldown(cooldownRemaining)}.`);
      return;
    }

    registerAttempt('login');
    setLoading(true);

    try {
      // 1. Login no Firebase para verificar se o e-mail está validado (se configurado)
      if (import.meta.env.VITE_FIREBASE_API_KEY) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          if (!userCredential.user.emailVerified) {
            setError('Seu e-mail ainda não foi verificado.');
            setShowResend(true);
            setLoading(false);
            return;
          }
        } catch (firebaseError: any) {
          console.error('Erro no Firebase Login:', firebaseError);
        }
      }

      // 2. Enviar a requisição para o login no backend
      const response = await axios.post('/login/', { 
        email: email, 
        password: password 
      });
  
      const data = response.data;
      if (!data.idToken) {
        throw new Error('Token não encontrado');
      }
  
      localStorage.setItem('authToken', data.idToken);
      localStorage.setItem('email', data.email);
      localStorage.setItem('userId', data.user_id);
      localStorage.setItem('userName', data.username);
      localStorage.setItem('isAdmin', data.is_admin);
  
      if (data.is_admin) {
        navigate('/admin-projects');
      } else {
        navigate('/user-projects');
      }
  
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Email ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-4 rounded shadow hover:bg-blue-700 transition duration-300 text-sm"
      >
        Voltar
      </button>

      <div
        className="p-14 rounded-lg shadow-lg w-96"
        style={{
          backgroundColor: 'rgba(187, 170, 170, 0.205)',
          backdropFilter: 'blur(15px)',
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Entrar</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4 relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full py-3 px-4 rounded-xl bg-white bg-opacity-10 text-white border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 hover:border hover:border-white/30"
              autoComplete="off"
              required
            />
          </div>

          <div className="mb-6 relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full py-3 px-4 rounded-xl bg-white bg-opacity-10 text-white border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 hover:border hover:border-white/30"
              autoComplete="new-password"
              required
            />
          </div>

          <input
            type="text"
            name="company"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <button
            type="submit"
            disabled={loading || cooldownRemaining > 0}
            className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 disabled:bg-gray-500"
          >
            {loading ? 'Entrando...' : cooldownRemaining > 0 ? `Aguarde ${formatCooldown(cooldownRemaining)}` : 'Log in'}
          </button>

          {cooldownRemaining > 0 && (
            <p className="mt-2 text-center text-yellow-200 text-sm">
              Aguarde {formatCooldown(cooldownRemaining)} antes de tentar novamente.
            </p>
          )}
          {error && <p className="mt-2 text-center text-red-600">{error}</p>}

          {showResend && (
            <div className="mt-2 text-center">
              <button
                type="button"
                onClick={handleResendEmail}
                className="text-blue-300 underline hover:text-blue-100 text-sm"
              >
                Reenviar e-mail de verificação
              </button>
            </div>
          )}

          <div className="mt-4 text-center">
            <p className="text-white">
              Não tem uma conta?{' '}
              <a href="/register" className="text-blue-300 underline hover:text-blue-100">
                Registre-se
              </a>
            </p>
            <p className="mt-2">
              <a href="/esqueci-a-senha" className="text-blue-300 underline hover:text-blue-100 text-sm">
                Esqueci minha senha
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

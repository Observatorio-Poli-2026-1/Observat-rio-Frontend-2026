import { useState } from 'react';
import HeaderUser from '../components/HeaderUser';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmpresaSolicitacao() {
  const [form, setForm] = useState({
    empresa: '',
    contato_email: '',
    telefone: '',
    descricao_problema: '',
    expectativa: '',
    prazo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { ...form, id: 'default_id' };

    axios.post('/solicitacoes_empresa/', payload)
      .then(() => {
        toast.success('Solicitação enviada com sucesso!');
        setForm({ empresa: '', contato_email: '', telefone: '', descricao_problema: '', expectativa: '', prazo: '' });
      })
      .catch(err => {
        console.error(err);
        toast.error(err.response?.data?.detail || 'Erro ao enviar solicitação');
      });
  };

  return (
    <>
      <HeaderUser />
      <ToastContainer position="top-center" autoClose={3000} />
      <main className="px-8 py-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Solicitar Ideia / Solução</h1>
        <p className="mb-6 text-gray-600">Descreva o problema da sua empresa e nossa comunidade poderá propor ideias.</p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label className="block font-medium">Empresa</label>
            <input name="empresa" value={form.empresa} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>

          <div>
            <label className="block font-medium">E-mail de contato</label>
            <input name="contato_email" type="email" value={form.contato_email} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>

          <div>
            <label className="block font-medium">Telefone (opcional)</label>
            <input name="telefone" value={form.telefone} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Descrição do problema</label>
            <textarea name="descricao_problema" value={form.descricao_problema} onChange={handleChange} className="w-full border px-3 py-2 rounded h-36" required />
          </div>

          <div>
            <label className="block font-medium">Expectativa / Resultado desejado (opcional)</label>
            <input name="expectativa" value={form.expectativa} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Prazo (opcional)</label>
            <input name="prazo" value={form.prazo} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Enviar Solicitação</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default EmpresaSolicitacao;

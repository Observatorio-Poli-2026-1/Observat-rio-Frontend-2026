import { useState } from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NovoDesafioAdmin() {
  const [form, setForm] = useState({
    empresa: '',
    contato_email: '',
    telefone: '',
    descricao_problema: '',
    expectativa: '',
    prazo: '',
  });

  const userIsAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!userIsAdmin) {
    return <Navigate to="/user-articles" />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');
    const payload = { ...form, id: 'default_id', status: 'Aprovado' };

    axios.post('/admin/solicitacoes_empresa/', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        toast.success('Desafio criado e aprovado com sucesso!');
        setForm({
          empresa: '',
          contato_email: '',
          telefone: '',
          descricao_problema: '',
          expectativa: '',
          prazo: '',
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response?.data?.detail || 'Erro ao criar desafio');
      });
  };

  return (
    <>
      <HeaderAdmin />
      <ToastContainer position="top-center" autoClose={3000} />
      <main className="px-8 py-12 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Criar Desafio</h1>
        <p className="mb-6 text-gray-600">
          Cadastre um desafio diretamente como administrador. Ele será publicado como aprovado.
        </p>

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

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Criar desafio
          </button>
        </form>
      </main>
    </>
  );
}

export default NovoDesafioAdmin;

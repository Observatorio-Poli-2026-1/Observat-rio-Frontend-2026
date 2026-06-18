import { useEffect, useState } from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SolicitacoesAdmin() {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const userIsAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!userIsAdmin) {
    return <Navigate to="/user-articles" />;
  }

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('/solicitacoes_empresa/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSolicitacoes(response.data.solicitacoes || []);
      } catch (error) {
        console.error('Erro ao buscar solicitações:', error);
        toast.error('Erro ao carregar solicitações');
      } finally {
        setLoading(false);
      }
    };

    fetchSolicitacoes();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja excluir esta solicitação?')) {
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`/solicitacoes_empresa/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Solicitação excluída com sucesso');
      setSolicitacoes((prev) => prev.filter((sol: any) => sol.id !== id));
    } catch (error) {
      console.error('Erro ao excluir solicitação:', error);
      toast.error('Erro ao excluir solicitação');
    }
  };

  return (
    <>
      <HeaderAdmin />
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="flex flex-col px-[13vw] pt-10 gap-6">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-start text-dark-color">
            Solicitações de Empresas
          </h1>
        </section>

        {loading ? (
          <div className="text-center py-10">Carregando...</div>
        ) : solicitacoes.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            Nenhuma solicitação de empresa no momento
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Empresa</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Telefone</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Descrição do Problema</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Expectativa</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Prazo</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {solicitacoes.map((sol: any, index: number) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{sol.empresa}</td>
                    <td className="border border-gray-300 px-4 py-2">{sol.contato_email}</td>
                    <td className="border border-gray-300 px-4 py-2">{sol.telefone || '-'}</td>
                    <td className="border border-gray-300 px-4 py-2 max-w-xs truncate">
                      {sol.descricao_problema}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 max-w-xs truncate">
                      {sol.expectativa || '-'}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{sol.prazo || '-'}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(sol.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors text-sm font-semibold"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default SolicitacoesAdmin;

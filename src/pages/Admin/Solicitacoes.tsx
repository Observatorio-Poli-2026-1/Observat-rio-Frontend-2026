import { useEffect, useState } from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SolicitacaoEmpresa = {
  id: string;
  empresa?: string;
  contato_email?: string;
  telefone?: string;
  descricao_problema?: string;
  expectativa?: string;
  prazo?: string;
  status?: string;
};

function SolicitacoesAdmin() {
  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoEmpresa[]>([]);
  const [loading, setLoading] = useState(true);
  const userIsAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('/solicitacoes_empresa/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const aprovadas = (response.data.solicitacoes || []).filter(
          (solicitacao: SolicitacaoEmpresa) => solicitacao.status === 'Aprovado'
        );

        setSolicitacoes(aprovadas);
      } catch (error) {
        console.error('Erro ao buscar solicitacoes aprovadas:', error);
        toast.error('Erro ao carregar solicitacoes aprovadas');
      } finally {
        setLoading(false);
      }
    };

    if (userIsAdmin) {
      fetchSolicitacoes();
    }
  }, [userIsAdmin]);

  if (!userIsAdmin) {
    return <Navigate to="/user-articles" />;
  }

  return (
    <>
      <HeaderAdmin />
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="flex flex-col px-[13vw] pt-10 gap-6">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-start text-dark-color">
            Solicitações de Desafios Aprovadas
          </h1>
        </section>

        {loading ? (
          <div className="text-center py-10">Carregando...</div>
        ) : solicitacoes.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            Nenhuma solicitação aprovada no momento
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
                  <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {solicitacoes.map((solicitacao) => (
                  <tr key={solicitacao.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{solicitacao.empresa}</td>
                    <td className="border border-gray-300 px-4 py-2">{solicitacao.contato_email}</td>
                    <td className="border border-gray-300 px-4 py-2">{solicitacao.telefone || '-'}</td>
                    <td className="border border-gray-300 px-4 py-2 max-w-xs truncate">
                      {solicitacao.descricao_problema}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 max-w-xs truncate">
                      {solicitacao.expectativa || '-'}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{solicitacao.prazo || '-'}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Aprovado
                      </span>
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

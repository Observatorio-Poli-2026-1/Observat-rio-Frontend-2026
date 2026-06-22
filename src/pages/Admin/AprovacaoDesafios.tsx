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

function AprovacaoDesafios() {
  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoEmpresa[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const userIsAdmin = localStorage.getItem('isAdmin') === 'true';

  const fetchSolicitacoes = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('/solicitacoes_empresa/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const pendentes = (response.data.solicitacoes || []).filter(
        (solicitacao: SolicitacaoEmpresa) => (solicitacao.status || 'Pendente') === 'Pendente'
      );

      setSolicitacoes(pendentes);
    } catch (error) {
      console.error('Erro ao buscar solicitacoes pendentes:', error);
      toast.error('Erro ao carregar solicitações pendentes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userIsAdmin) {
      fetchSolicitacoes();
    }
  }, [userIsAdmin]);

  if (!userIsAdmin) {
    return <Navigate to="/user-articles" />;
  }

  const handleApprove = async (solicitacao: SolicitacaoEmpresa) => {
    try {
      const token = localStorage.getItem('authToken');
      setProcessingId(solicitacao.id);
      await axios.put(`/solicitacoes_empresa/${solicitacao.id}/aprovar`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Solicitação aprovada!');
      setSolicitacoes((current) => current.filter((item) => item.id !== solicitacao.id));
    } catch (error) {
      console.error('Erro ao aprovar solicitacao:', error);
      toast.error('Erro ao aprovar solicitação');
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (solicitacao: SolicitacaoEmpresa) => {
    try {
      const token = localStorage.getItem('authToken');
      setProcessingId(solicitacao.id);
      await axios.delete(`/solicitacoes_empresa/${solicitacao.id}/recusar`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Solicitação recusada!');
      setSolicitacoes((current) => current.filter((item) => item.id !== solicitacao.id));
    } catch (error) {
      console.error('Erro ao recusar solicitacao:', error);
      toast.error('Erro ao recusar solicitação');
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <>
      <HeaderAdmin />
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="flex flex-col px-[13vw] pt-10 gap-6">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-start text-dark-color">
            Aprovação de Desafios
          </h1>
        </section>

        {loading ? (
          <div className="text-center py-10">Carregando...</div>
        ) : solicitacoes.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            Nenhuma solicitação pendente no momento
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
                {solicitacoes.map((solicitacao) => {
                  const isProcessing = processingId === solicitacao.id;

                  return (
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
                        <div className="flex justify-center gap-2">
                          <button
                            type="button"
                            disabled={isProcessing}
                            onClick={() => handleApprove(solicitacao)}
                            className="px-3 py-2 bg-primary-color text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition duration-300"
                          >
                            Aprovar
                          </button>
                          <button
                            type="button"
                            disabled={isProcessing}
                            onClick={() => handleReject(solicitacao)}
                            className="px-3 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition duration-300"
                          >
                            Recusar
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default AprovacaoDesafios;

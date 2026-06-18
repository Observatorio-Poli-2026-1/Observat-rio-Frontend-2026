import { useEffect, useState, type ChangeEvent } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import backgroundImage from '../assets/mainpage.jpg';

type SolicitacaoEmpresa = {
  id?: string;
  empresa?: string;
  descricao_problema?: string;
  expectativa?: string;
  prazo?: string;
};

function Solicitacoes() {
  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoEmpresa[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/solicitacoes_empresa_publicas/')
      .then((response) => setSolicitacoes(response.data.solicitacoes || []))
      .catch((error) => console.error('Erro ao carregar solicitacoes:', error))
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const filteredSolicitacoes = solicitacoes.filter((solicitacao) => {
    const searchInput = input.toLowerCase();

    return (
      solicitacao.empresa?.toLowerCase().includes(searchInput) ||
      solicitacao.descricao_problema?.toLowerCase().includes(searchInput) ||
      solicitacao.expectativa?.toLowerCase().includes(searchInput)
    );
  });

  return (
    <>
      <Header />

      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Solicitacoes</h1>
          <p className="text-2xl mb-8 text-center">
            Veja os desafios enviados por empresas para receber ideias e solucoes
          </p>
          <div className="flex w-full max-w-lg">
            <input
              type="search"
              name="searchbar"
              id="searchbar"
              className="w-full h-16 px-6 rounded-l-full bg-white bg-opacity-20 text-white placeholder-white outline-none focus:bg-white focus:text-black transition-colors duration-300"
              placeholder="Pesquise por empresa, desafio ou expectativa"
              value={input}
              onChange={handleInputChange}
            />
            <button className="bg-blue-600 h-16 px-6 rounded-r-full hover:bg-blue-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          {loading ? (
            <Loading />
          ) : filteredSolicitacoes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolicitacoes.map((solicitacao) => (
                <article
                  key={solicitacao.id}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
                >
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Empresa</p>
                    <h2 className="text-2xl font-bold text-blue-600">
                      {solicitacao.empresa || 'Empresa nao informada'}
                    </h2>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold">Desafio:</h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      {solicitacao.descricao_problema || 'Descricao nao informada'}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold">Resultado esperado:</h3>
                    <p className="text-gray-700">{solicitacao.expectativa || '-'}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold">Prazo:</h3>
                    <p className="text-gray-700">{solicitacao.prazo || '-'}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-200 text-sm text-gray-500">
                    Desafio enviado para receber ideias da comunidade.
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Nenhuma solicitacao encontrada.</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Solicitacoes;

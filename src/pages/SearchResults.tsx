import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import backgroundImage from '../assets/mainpage.jpg';
import Loading from '../components/Loading';

function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [input, setInput] = useState(searchQuery);
  const [projects, setProjects] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInput(searchQuery);
    setLoading(true);

    Promise.all([
      axios.get('/projetos/'),
      axios.get('/artigos/'),
      axios.get('/produtos/')
    ])
      .then(([projectsResponse, articlesResponse, productsResponse]) => {
        setProjects(projectsResponse.data?.projetos || []);
        setArticles(articlesResponse.data?.artigos || []);
        setProducts(productsResponse.data?.produtos || []);
      })
      .catch((error) => {
        console.error('Erro ao carregar resultados da busca:', error);
      })
      .finally(() => setLoading(false));
  }, [searchQuery]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/buscar?search=${encodeURIComponent(input)}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const normalizedQuery = input.trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    const keywords = Array.isArray(project.palavras_chave)
      ? project.palavras_chave.join(' ').toLowerCase()
      : '';

    return (
      project.titulo?.toLowerCase().includes(normalizedQuery) ||
      project.tema?.toLowerCase().includes(normalizedQuery) ||
      keywords.includes(normalizedQuery)
    );
  });

  const filteredArticles = articles.filter((article) => {
    const keywords = Array.isArray(article.palavras_chave)
      ? article.palavras_chave.join(' ').toLowerCase()
      : '';

    return (
      article.titulo?.toLowerCase().includes(normalizedQuery) ||
      article.tema?.toLowerCase().includes(normalizedQuery) ||
      keywords.includes(normalizedQuery)
    );
  });

  const filteredProducts = products.filter((product) => {
    return (
      product.titulo?.toLowerCase().includes(normalizedQuery) ||
      product.tipo?.toLowerCase().includes(normalizedQuery) ||
      product.descricao?.toLowerCase().includes(normalizedQuery)
    );
  });

  const hasResults = filteredProjects.length > 0 || filteredArticles.length > 0 || filteredProducts.length > 0;

  return (
    <>
      <Header />

      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Buscar conteúdo</h1>
          <p className="text-2xl mb-8 text-center">
            Projetos, artigos e produtos em um só lugar
          </p>
          <div className="flex w-full max-w-lg">
            <input
              type="search"
              name="searchbar"
              id="searchbar"
              className="w-full h-16 px-6 rounded-l-full bg-white bg-opacity-20 text-white placeholder-white outline-none focus:bg-white focus:text-black transition-colors duration-300"
              placeholder="Pesquise por nome, tema, palavra-chave"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 h-16 px-6 rounded-r-full hover:bg-blue-700 transition-colors"
            >
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
          ) : !normalizedQuery ? (
            <p className="text-center text-gray-600">Digite um termo para buscar projetos, artigos e produtos.</p>
          ) : !hasResults ? (
            <p className="text-center text-gray-600">Nenhum resultado encontrado para "{input}".</p>
          ) : (
            <div className="space-y-12">
              {filteredProjects.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold mb-6">Projetos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                      <article key={project.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">{project.titulo}</h3>
                        <p className="mb-2"><strong>Tema:</strong> {project.tema || 'Tema não informado'}</p>
                        <p className="mb-2"><strong>Semestre:</strong> {project.semestre || 'Semestre não informado'}</p>
                        <button
                          className="mt-auto text-left text-blue-600 hover:text-blue-800 font-semibold"
                          onClick={() => navigate(`/projetos/${project.id}`)}
                        >
                          Ver projeto
                        </button>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {filteredArticles.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold mb-6">Artigos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                      <article key={article.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">{article.titulo}</h3>
                        <p className="mb-2"><strong>Tema:</strong> {article.tema || 'Tema não informado'}</p>
                        <p className="mb-2"><strong>Data:</strong> {article.data || 'Data não disponível'}</p>
                        <button
                          className="mt-auto text-left text-blue-600 hover:text-blue-800 font-semibold"
                          onClick={() => navigate(`/artigos?search=${encodeURIComponent(article.titulo || input)}`)}
                        >
                          Ver artigos relacionados
                        </button>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {filteredProducts.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold mb-6">Produtos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                      <article key={product.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">{product.titulo}</h3>
                        <p className="mb-2"><strong>Tipo:</strong> {product.tipo || 'Tipo não informado'}</p>
                        <p className="mb-2"><strong>Semestre:</strong> {product.semestre || 'Semestre não informado'}</p>
                        <button
                          className="mt-auto text-left text-blue-600 hover:text-blue-800 font-semibold"
                          onClick={() => navigate(`/produtos?search=${encodeURIComponent(product.titulo || input)}`)}
                        >
                          Ver produtos relacionados
                        </button>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SearchResults;
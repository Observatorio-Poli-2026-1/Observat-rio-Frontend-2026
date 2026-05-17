import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../assets/mainpage.jpg';
import poliImg from '../assets/poli1.png';
import upeLogoImg from '../assets/logo-upe-60.png';
import ufpbLogoImg from '../assets/parceiros/ufpb.png';
import sadLogoImg from '../assets/parceiros/sad-pe.png'; // Certifique-se de que o caminho esteja correto

function Sobre() {
  return (
    <>
      <Header />

      {/* Seção Hero */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Observatório de Projetos - POLI/UPE
          </h1>
          <p className="text-2xl mb-8 text-center">Conheça mais sobre nossa iniciativa</p>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              O projeto do Observatório de Projetos - POLI/UPE foi uma ideia construída dentro da
              disciplina de Engenharia de Software da Escola Politécnica de Pernambuco. A ideia,
              construída por estudantes graduandos e pós-graduandos de Engenharia da Computação,
              consiste em possibilitar que todos os projetos já desenvolvidos e todos aqueles que
              ainda serão construídos possam ser eternizados em um grande repositório, apresentando
              suas características únicas, tecnologias, pessoas responsáveis e até mesmo, as
              organizações e pessoas parceiras que queriam transformar os seus sonhos em realidade.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="max-h-96 rounded-xl shadow-lg"
              src={poliImg}
              alt="Escola Politécnica de Pernambuco"
            />
          </div>
        </div>
      </section>

      {/* Seção de Parceiros (Opcional) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Nossos Parceiros</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src={upeLogoImg}
              alt="UPE"
              className="h-16"
            />
            <img
              src={ufpbLogoImg}
              alt="UFPB"
              className="h-16"
            />
            <img
              src={sadLogoImg}
              alt="SAD PE"
              className="h-16"
            />
            {/* Adicione outros logos de parceiros conforme necessário */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Sobre;
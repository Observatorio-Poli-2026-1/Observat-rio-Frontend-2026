# **Front_2026.1 - Observatório de Projetos**

Bem-vindo ao repositório de **Front-End** do **Observatório de Projetos** versão 3.0 da **POLI-UPE**! Este projeto faz parte da disciplina de Engenharia de Software do curso de Engenharia da Computação e foi projetado para oferecer uma plataforma colaborativa, onde projetos acadêmicos e artigos podem ser explorados, submetidos e gerenciados.

### 💻 **Front-end**   
- **Descrição**: Interface web acessível ao público, desenvolvida com React. Os usuários podem visualizar projetos, artigos e produtos cadastrados, bem como acessar as funcionalidades administrativas (caso tenham permissão). Esta é a camada de apresentação do sistema Observatório.

## 🌟 **Sobre o Projeto**

O **Observatório de Projetos** é uma aplicação web criada para centralizar os projetos e artigos acadêmicos da **POLI-UPE**, bem como os produtos (Patente de Software, Registro de Software, Startup, Artigos e Relatórios Técnicos, Plataforma Online, TCC e Dissertação e Tese) resultantes dos projetos desenvolvidos, promovendo assim visibilidade e acesso fácil a conteúdos acadêmicos. Através de uma **interface intuitiva e moderna**, o usuário pode buscar, curtir, comentar e submeter projetos e artigos, enquanto administradores gerenciam e moderam o conteúdo.

## 🚀 **Funcionalidades**

### 📂 **Aba de Inicio**
- **Campo de pesquisa**: Localize projetos por nome, tema ou palavra-chave.
- **Cards clicaveis**:  Localize projetos por tema.
- **Entre em Contato**: Envie dúvidas e sugestões ao administrador do sistema.

### 📂 **Aba de Projetos**
- **Busca Avançada**: Localize projetos por nome, tema ou palavra-chave com filtros dinâmicos.
- **Detalhes do Projeto**: Visualize informações completas, incluindo descrição, vídeos, palavras-chave, profile dos integrantes da equipe, link de repositorios, etc.
- **Curtidas e Comentários**: Interaja com os projetos por meio de curtidas e comentários.

### 📂 **Aba de Artigos**
- Explore artigos submetidos por alunos e professores, organizados por temas e relevância.

### 📂 **Aba de Produtos**
- **Campo de pesquisa**: Localize produtos por nome, tema ou palavra-chave.
- **Detalhes do Produto**: Visualize informações completas, incluindo descrição, tipo, semestre e equipe.

### ❓ **Aba Sobre**
- Informações gerais sobre o Observatório e sua importância.

### 📑 **Aba FAQ**
- **Perguntas Frequentes (FAQ)**: Respostas às perguntas frequentes para facilitar a navegação e o uso da plataforma.
- **Resposta a Dúvidas/Sugestões**: Respostas às sugestões e dúvidas feitas através da seção 'Entre em Contato' na página inicial.

### 🧑‍💻 **Sistema de Registro e Login**
- **Registro**: Cadastro de novos usuários com autenticação segura.
- **Login**: Diferencia usuários comuns e administradores, oferecendo acesso personalizado.

### 📊 **Dashboard de Usuário**
- **Submissão de Projetos, Artigos e Produtos**: Submeta projetos, artigos ou produtos com as suas respetivas informações para aprovação pelo administrador.
- **Curtidas e Comentários**: Gerencie interações nos projetos.

### 🔧 **Dashboard de Administrador**
- **Aprovação/Reprovação**: Gerencie projetos e artigos submetidos.
- **Edição de Conteúdo**: Edite informações de projetos, artigos e produtos diretamente no painel.
- **Exclusão**: Exclua projetos, artigos e produtos diretamente no painel
- **Gerenciamento de Curtidas e Comentários**: Monitore interações realizadas pelos usuários para projetos.
- **Reponder e Postar Dúvidas e Sugestões**: Responda, delete ou post publicamente na aba FAQ as dúvidas e sugestões enviadas.

## 🛠 **Tecnologias Utilizadas**

- ⚛️ **React**: Para criação de interfaces reativas e interativas.
- 🟦 **TypeScript**: Tipagem estática para maior segurança no código.
- ⚡ **Vite**: Build tool para desenvolvimento rápido e eficiente.
- 📡 **Axios**: Comunicação com a API através de requisições HTTP.
- 🎨 **TailwindCSS**: Framework para estilização responsiva.

## 📋 **Pré-requisitos**

Certifique-se de ter as ferramentas abaixo instaladas:

- **Node.js** (v16+ recomendado) e **npm** (Node Package Manager)
- **Git** para clonar o repositório
- **Docker** (opcional) para rodar o projeto em contêiner

## 🔧 **Instalação e Execução**

### Passo 1: Clone o Repositório e abra a pasta
```bash```
```git clone https://github.com/PriscillaIA/poli-egs-frontend-equipe-2.git```
```cd poli-egs-frontend-equipe-2.git```
### Passo 2: Instale as dependência e execute localmente
```npm install```
```npm run dev```

![image](https://github.com/user-attachments/assets/44568fd9-6047-4b84-8a4b-d3f7ed63f996)

## 📑 **Documentação**

## Storys Trabalhas no Observatorio 2.0 no (Jira app)
![one](<img width="859" height="392" alt="sprint1" src="https://github.com/user-attachments/assets/ff19bbc9-404d-4ad5-962b-307f961c683f" />)
![two](<img width="879" height="230" alt="Captura de tela 2026-07-03 222939" src="https://github.com/user-attachments/assets/1bd5f9f1-20cf-4ea6-821c-5ba50baa84d7" />)
![three](<img width="869" height="287" alt="Captura de tela 2026-07-03 223058" src="https://github.com/user-attachments/assets/81f3783f-a704-4ccc-8fdf-b627fece9041" />)
![four](<img width="887" height="513" alt="qwdq" src="https://github.com/user-attachments/assets/a04c48a9-560f-4d25-bd9e-d6924a47497e" />)

## Equipe 5 do semestre 2026.1:##
- **EMMANOEL BARBOSA(DEV FRONT-END E BACK-END)**
- **RANIE CAMPOS LINS (DEV FRONT-END E BACK-END)**
- **DIEGO AMARAL (DEV FRONT-END E BACK-END)**
- **JOSÉ LÚCIO (DEV FRONT-END E BACK-END)**
- **LUIZ ANDRÉ (SCRUM MASTER)**
- **MARCIA REJANE (GERENTE DE PROJETO)**

## 2026.1
# ✨ Atualização 1 – Gestão de Submissão de Desafios

Foi implementado um novo fluxo de gerenciamento de desafios no Observatório, permitindo maior controle e segurança sobre o conteúdo disponibilizado na plataforma.

## Funcionalidades Implementadas
- Perfis administradores agora podem cadastrar novos desafios diretamente na plataforma.
- Todo desafio submetido passa por um processo de moderação.
- Administradores podem aprovar ou rejeitar desafios enviados por outros perfis administrativos, garantindo maior qualidade e consistência do conteúdo publicado.

---

# ✨ Atualização 2 – Segurança da Plataforma

A infraestrutura da aplicação recebeu importantes melhorias voltadas à segurança, reduzindo riscos de ataques e fortalecendo a proteção dos serviços.

## Melhorias Implementadas
- Implementação de mecanismos de **Rate Limiting**, limitando o número de requisições por usuário e mitigando ataques de força bruta e abuso da API.
- Correção de vulnerabilidades e falhas de segurança identificadas durante o desenvolvimento.
- Aprimoramento das validações de segurança em pontos críticos da aplicação.

---

# ✨ Atualização 3 – Correção e Estabilização

Foi realizado um trabalho completo de estabilização da aplicação, solucionando problemas herdados das versões anteriores.

## Correções Realizadas
- Resolução de todos os bugs identificados na implementação desenvolvida pela equipe anterior.
- Correção de falhas que comprometiam a estabilidade da plataforma.
- Refinamento geral do funcionamento do sistema, proporcionando uma experiência mais confiável aos usuários.

---

# ✨ Atualização 4 – Refatoração da Identidade Visual

As principais páginas públicas do Observatório passaram por uma reformulação visual com foco em usabilidade, organização e experiência do usuário.

## Melhorias Visuais
- Refatoração da identidade visual das abas iniciais do Observatório.
- Padronização dos componentes gráficos.
- Atualização do layout para uma interface mais moderna, intuitiva e alinhada à identidade institucional.

---

# ✨ Atualização 5 – Deploy da Plataforma

Como etapa final do projeto, o Observatório foi disponibilizado para utilização em ambiente de produção.

## Deploy
- Realizado o deploy oficial do Observatório na infraestrutura da Escola Politécnica de Pernambuco (POLI).
- A plataforma encontra-se disponível na rede institucional, permitindo o acesso pelos usuários autorizados.
- Foram realizadas validações finais de funcionamento e integração após a publicação.


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

### Tabela de Rastreamento de Funcionalidades
  
  ![image](https://github.com/user-attachments/assets/6062ab5d-879d-45de-9f4f-62ca36cf4b73)

### Especificacao dos Novos Modulos Desenvolvidos:

#### - **Especificações Funcionais - Módulo Produtos** 
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Especifica%C3%A7%C3%A3o%20Funcional%20-%20M%C3%B3dulo_%20Produtos.pdf)
#### - **Especificações Funcionais - Módulo Gestão de Dúvidas e Sugestões** 
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Especifica%C3%A7%C3%A3o%20Funcional%20-%20M%C3%B3dulo%20Gest%C3%A3o%20de%20D%C3%BAvidas%20e%20Sugest%C3%B5es.pdf)
#### - **Especificações Funcionais - Módulo Cadastrar Integrantes da Equipe**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Especifica%C3%A7%C3%A3o%20Funcional%20-%20Modulo%20Cadastrar%20Integrantes%20Equipe.pdf)

### Gerenciamento do Projeto:

#### - **Matriz de Commits**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Matriz%20de%20Controle%20de%20Commites.pdf)
#### - **Regras relacionada ao formato dos commites**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Regras%20relacionada%20ao%20formato%20dos%20commites.pdf)
#### - **Exemplo de Sprint Plan**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Sprint%20Plan%20Model.pdf)
#### - **Exemplo de documento utilizado nas reunioes com o cliente**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Exemplo%20de%20documento%20utilizado%20nas%20reunioes%20com%20cliente.pdf)
#### - **Exemplo de documento utilizado para o gerenciamento das reunioes diarias**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Exemplo%20de%20documento%20de%20gerenciamento%20das%20reunioes%20diarias.pdf)
#### - **Exemplo de documento utilizado na retrospectiva da sprint**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Exemplo%20de%20documento%20com%20retrospectiva%20da%20sprint.pdf)
#### - **Exemplo de documento How To Do (onde os integrantes compartilharam conhecimentos)**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Exemplo%20de%20documento%20explicando%20Como%20Fazer%20as%20coisas.pdf)

#### Caso de Testes Criados:

#### - **Casos de Testes para o Modulo Produtos**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Casos%20de%20Teste%20para%20Modulo%20Projetos.pdf)
#### - **Casos de Testes para o Modulo Gestão de Dúvidas e Sugestões**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Casos%20de%20Testes%20para%20Modulo%20Gest%C3%A3o%20de%20D%C3%BAvidas%20e%20Sugest%C3%B5es.pdf)
#### - **Casos de Testes para o Modulo Informacoes sobre Integrantes da Equipe**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Casos%20de%20Teste%20Exibir%20Informa%C3%A7%C3%B5es%20da%20Equipe.pdf)
#### - **Casos de Testes para o Modulo Projetos**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Casos%20de%20Testes%20para%20Modulo%20Produtos.pdf)
#### - **Casos de Testes para o Modulo Artigos**
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Casos%20de%20Testes%20para%20Modulo%20Artigos.pdf)

### Bugs e Task Levantadas para Futura Implementacao
[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Back-end%20-%20Error%20de%20token%20quando%20usu%C3%A1rio%20adm%20tenta%20aprovar%20ou%20reprovar%20artigo%20quando%20o%20usu%C3%A1rio%20esta%20logando%20a%20muito%20tempo.pdf)

[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/Refatoramento%20do%20c%C3%B3digo%20de%20back%20-%20melhoria%20do%20codigo.pdf)

[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/%5BDatabase%5D%20os%20pdf%20ou%20imagens%20dos%20projetos%2C%20artigos%20ou%20produtos%20exclu%C3%ADdos%20pela%20interface%20do%20usu%C3%A1rio%20n%C3%A3o%20est%C3%A3o%20sendo%20exclu%C3%ADdos%20do%20banco%20de%20dados.pdf)

[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/%5BFront%20e%20Back%5D%5BLogin%5D%20Credenciais%20de%20login%20est%C3%A3o%20sendo%20enviadas%20via%20query%20string%20(risco%20de%20seguran%C3%A7a).pdf)

[📘 Acessar Documento](https://github.com/PriscillaIA/poli-egs-fastapi-backend-equipe-2/blob/master/documenta%C3%A7%C3%A3o/%5BFront-end%5D%5BModal%20Cadastrar%20novo%20Artigo%5D%20Sistema%20n%C3%A3o%20faz%20verifica%C3%A7%C3%A3o%20de%20campos%20obrigat%C3%B3rios.pdf)

## Storys Trabalhas no Observatorio 2.0 no (Jira app)
![one](https://github.com/user-attachments/assets/c3756aa9-f72a-4fbb-8b50-ea0312f40e17)
![two](https://github.com/user-attachments/assets/75063b13-992d-4b04-909c-57494d849471)
![three](https://github.com/user-attachments/assets/29e5b8c3-5d4e-4b2f-a362-75eed44529e2)
![four](https://github.com/user-attachments/assets/1415f5ac-ead3-4cf1-854b-cd57e7a573d3)
![five](https://github.com/user-attachments/assets/146a8adc-60c9-4144-b971-56b84059abbd)

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


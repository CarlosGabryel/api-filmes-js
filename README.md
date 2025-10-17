# API REST de Filmes (Node.js/Express)

Esta é uma API REST simples para gerenciamento de filmes, construída utilizando JavaScript, Node.js e o framework Express.

## 🚀 Instalação e Execução da API

Siga os passos abaixo para colocar a API em funcionamento localmente.

### Pré-requisitos

Para executar esta API, você precisa ter o **Node.js** e o **npm** (Node Package Manager) instalados em sua máquina.

### 1. Preparação

# 1. Clone o repositório (substitua pela sua URL)
git clone <url-do-seu-repositorio>
cd projeto_filmes_js

# 2. Instale as dependências (framework Express)
npm install express

# 3. Execute o arquivo principal usando Node
node app.js

Após a execução, você verá uma mensagem no console:
API de Filmes rodando em http://localhost:8080/
Endpoints disponíveis:
 - GET  http://localhost:8080/api/filmes
 - POST http://localhost:8080/api/filmes

# Para que a rota POST /api/filmes adicione um novo produto (filme) com sucesso, a requisição deve seguir as seguintes regras:

Método Correto: O método HTTP deve ser POST.

Conteúdo: O cabeçalho Content-Type da requisição deve ser definido como application/json.

Corpo da Requisição (Body): Deve ser um objeto JSON contendo OBRIGATORIAMENTE os seguintes campos:

- titulo (string)

- ano (number ou string)

- diretor (string)

Exemplo de Requisição Bem-Sucedida (Body JSON):

{
    "titulo": "Matrix",
    "ano": 1999,
    "diretor": "Lana Wachowski, Lilly Wachowski"
}
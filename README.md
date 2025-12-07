
# 🎬 API REST de Filmes

Este projeto é uma API REST simples para gerenciamento de filmes, construída com **Node.js**, **Express** e estruturada no padrão **MVC**.  
A API permite listar, adicionar e remover filmes, além de possuir uma suíte de testes completa usando **Jest** e **Supertest**. 
O projeto foi desenvolvido para a cadeira de GCII do profesor Luis Eduardo.

---

# 📁 Estrutura do Projeto

```
api-filmes-js/
│
├── src/
│   ├── models/
│   │   └── filmesModel.js
│   │
│   ├── controllers/
│   │   └── filmesController.js
│   │
│   ├── routes/
│   │   └── filmesRoutes.js
│   │
│   └── app.js
│
├── tests/
│   └── app.test.js
│
├── package.json
├── Dockerfile
└── README.md

````

---

# Como executar o projeto

## Pré-requisitos
- Node.js (versão 18 ou superior)
- npm instalado

---

## 1. Instalar dependências

```sh
npm install
````

---

## 2. Executar a API localmente

```sh
npm start
```

A API estará acessível em:

```
http://localhost:8080
```

---

# Rotas da API

## **GET /api/filmes**

Retorna a lista de filmes.

### Exemplo:

```
GET http://localhost:8080/api/filmes
```

---

## **POST /api/filmes**

Adiciona um novo filme.

### Corpo obrigatório (JSON):

```json
{
  "titulo": "Matrix",
  "ano": 1999,
  "diretor": "Wachowski"
}
```

---

## **DELETE /api/filmes/:id**

Remove um filme pelo ID.

### Exemplo:

```
DELETE http://localhost:8080/api/filmes/3
```

---

# Testes Automatizados

Os testes utilizam **Jest** + **Supertest**.

Para rodar:

```sh
npm test
```

A suíte de testes valida:

* GET /api/filmes
* POST /api/filmes
* DELETE /api/filmes/:id
* Isolamento de estado da API

---

# Docker

O projeto possui suporte completo ao Docker.

## Dockerfile utilizado

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
```

---

## Construir a imagem

```sh
docker build -t api-filmes-js .
```

---

## Rodar o container

```sh
docker run -p 8080:8080 api-filmes-js
```

---

# 🐳 DockerHub

A imagem oficial deste projeto está disponível em:

**[https://hub.docker.com/r/carlosgbc21/api-filmes-js](https://hub.docker.com/r/carlosgbc21/api-filmes-js)**

---

# Badges

![Docker Image Version](https://badgen.net/docker/v/carlosgbc21/api-filmes-js)
![Docker Image Size](https://badgen.net/docker/size/carlosgbc21/api-filmes-js)
![Docker Pulls](https://badgen.net/docker/pulls/carlosgbc21/api-filmes-js)

---

# GitHub Actions

A branch **main** possui um workflow completo que executa:

### ✔ Lint do código (ESLint — Airbnb Base)

### ✔ Testes automatizados (Jest + Supertest)

### ✔ Construção da imagem Docker

### ✔ Publicação automática no DockerHub

### ✔ Scan de segurança da imagem (Trivy)

O pipeline é totalmente integrado e automatizado.

---

# Autor

Projeto desenvolvido por **Carlos Borges**.

---


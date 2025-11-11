const express = require('express');

const app = express();
const port = 8080;

app.use(express.json());

// Banco de dados "mock"
let filmes = [
  {
    id: 1,
    titulo: 'O Poderoso Chefão',
    ano: 1972,
    diretor: 'Francis Ford Coppola',
  },
  {
    id: 2,
    titulo: 'Um Sonho de Liberdade',
    ano: 1994,
    diretor: 'Frank Darabont',
  },
  {
    id: 3,
    titulo: 'Batman: O Cavaleiro das Trevas',
    ano: 2008,
    diretor: 'Christopher Nolan',
  },
];

let proximoId = filmes.length + 1;

// =======================================================
// FEATURE 1: Rota GET para obter todos os produtos (filmes)
// =======================================================
/** Retorna a lista completa de filmes. */
app.get('/api/filmes', (req, res) => res.status(200).json({ filmes }));

// =======================================================
// FEATURE 2: Rota POST para adicionar um novo filme
// =======================================================
app.post('/api/filmes', (req, res) => {
  /** Cria um novo filme a partir dos dados JSON recebidos. */
  const { titulo, ano, diretor } = req.body;

  // 1. Validação
  if (!titulo || !ano || !diretor) {
    return res.status(400).json({
      erro: 'Campos obrigatórios (titulo, ano, diretor) estão faltando.',
    });
  }

  // 2. Cria o novo filme
  const novoFilme = {
    id: proximoId,
    titulo,
    ano,
    diretor,
  };

  // 3. Adiciona à lista
  filmes.push(novoFilme);

  // 4. Incrementa o próximo ID
  proximoId += 1;

  // 5. Retorna o filme criado com o status 201 (Created)
  return res.status(201).json(novoFilme);
});

// =======================================================
// FEATURE 3: Rota DELETE para remover um produto (filme)
// DELETE /api/filmes/:id
// =======================================================
app.delete('/api/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  const index = filmes.findIndex((f) => f.id === id);

  // Caso o filme não exista deve retornar o 404:
  if (index === -1) {
    return res.status(404).json({ erro: 'Filme não encontrado.' });
  }

  // Caso o filme exista, então fazemos a remoção e retorna o 204:
  filmes.splice(index, 1);
  return res.status(204).send();
});

// Para o ambiente de testes que agora foi implementado.
// estou adicionando uma função para resetar o estado
function resetaFilmes() {
  filmes = [
    {
      id: 1, titulo: 'O Poderoso Chefão', ano: 1972, diretor: 'Francis Ford Coppola',
    },
    {
      id: 2, titulo: 'Um Sonho de Liberdade', ano: 1994, diretor: 'Frank Darabont',
    },
    {
      id: 3, titulo: 'Batman: O Cavaleiro das Trevas', ano: 2008, diretor: 'Christopher Nolan',
    },
  ];
  proximoId = filmes.length + 1;
}

/* istanbul ignore next */
// Inicia o servidor Express APENAS se não estiver em ambiente de testes
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`API de Filmes rodando em http://localhost:${port}/`);
    console.log('Endpoints disponíveis:');
    console.log(` - GET  http://localhost:${port}/api/filmes`);
    console.log(` - POST http://localhost:${port}/api/filmes`);
  });
}
/* istanbul ignore next */
module.exports = { app, resetaFilmes };

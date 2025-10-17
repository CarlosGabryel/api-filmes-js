const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Banco de dados "mock"
let filmes = [
    {
        'id': 1,
        'titulo': 'O Poderoso Chefão',
        'ano': 1972,
        'diretor': 'Francis Ford Coppola'
    },
    {
        'id': 2,
        'titulo': 'Um Sonho de Liberdade',
        'ano': 1994,
        'diretor': 'Frank Darabont'
    },
    {
        'id': 3,
        'titulo': 'Batman: O Cavaleiro das Trevas',
        'ano': 2008,
        'diretor': 'Christopher Nolan'
    }
];


// =======================================================
// FEATURE 1: Rota GET para obter todos os produtos (filmes)
// =======================================================
app.get('/api/filmes', (req, res) => {
    /** Retorna a lista completa de filmes. */
    return res.status(200).json({ filmes: filmes });
});

// =======================================================
// FEATURE 2: Rota POST para adicionar um novo filme
// =======================================================
app.post('/api/filmes', (req, res) => {
    /** Cria um novo filme a partir dos dados JSON recebidos. */
    const { titulo, ano, diretor } = req.body;

    // 1. Validação
    if (!titulo || !ano || !diretor) {
        return res.status(400).json({
            erro: 'Campos obrigatórios (titulo, ano, diretor) estão faltando.'
        });
    }

    // 2. Cria o novo filme
    const novoFilme = {
        id: proximoId,
        titulo: titulo,
        ano: ano,
        diretor: diretor
    };

    // 3. Adiciona à lista
    filmes.push(novoFilme);

    // 4. Incrementa o próximo ID
    proximoId++;

    // 5. Retorna o filme criado com o status 201 (Created)
    return res.status(201).json(novoFilme);
});

// Inicializa o servidor Express
app.listen(port, () => {
    console.log(`API de Filmes rodando em http://localhost:${port}/`);
    console.log(`Endpoints disponíveis:`);
    console.log(` - GET  http://localhost:${port}/api/filmes`);
    console.log(` - POST http://localhost:${port}/api/filmes`);
});
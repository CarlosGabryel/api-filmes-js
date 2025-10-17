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


// Inicializa o servidor Express
app.listen(port, () => {
    console.log(`API de Filmes rodando em http://localhost:${port}/`);
    console.log(`Endpoints disponíveis:`);
    console.log(` - GET  http://localhost:${port}/api/filmes`);
});
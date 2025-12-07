const express = require('express');
const { getFilmes, postFilme, deleteFilme } = require('../controllers/filmesController');

const router = express.Router();

// Rota GET para obter todos os filmes
router.get('/', getFilmes);

// Rota POST para adicionar um novo filme
router.post('/', postFilme);

// Rota DELETE para remover um filme por ID
router.delete('/:id', deleteFilme);

module.exports = router;

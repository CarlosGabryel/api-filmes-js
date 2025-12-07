const {
    listarFilmes,
    criarFIlme,
    deletarFilme,
} = require('../models/filmesModel');

// Rota GET para obter todos os filmes
function getFilmes(req, res) {
    const filmes = listarFilmes();
    return res.status(200).json({ filmes: listarFilmes() });
}

// Rota POST para adicionar um novo filme
function postFilme(req, res) {
    const { titulo, ano, diretor } = req.body;
    
    // Validação  
    if (!titulo || !ano || !diretor) {
        return res.status(400).json({
            erro: 'Campos obrigatórios (titulo, ano, diretor) estão faltando.',
        });
    }
    
    const novoFilme = criarFIlme(titulo, ano, diretor);
    return res.status(201).json(novoFilme);
}

// Rota DELETE para remover um filme por ID
function deleteFilme(req, res) {
    const id = parseInt(req.params.id, 10);
    const sucesso = deletarFilme(id);
    
    if (!sucesso) {
        return res.status(404).json({ erro: 'Filme não encontrado.' });
    }
    
    return res.status(204).send();
}

module.exports = {
    getFilmes,
    postFilme,
    deleteFilme,
}; 
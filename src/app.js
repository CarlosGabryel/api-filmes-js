const express = require('express');
const filmesRoutes = require('./routes/filmesRoutes');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Usa as rotas de filmes
app.use('/api/filmes', filmesRoutes);


//Inicia o servidor somente se não estiver em ambiente de teste
/* istanbul ignore next */
if(process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}

module.exports = app;
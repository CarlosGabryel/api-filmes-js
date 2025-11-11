const request = require('supertest');
const {app, resetaFilmes} = require('./app');

let server

beforeAll((done)=>{
    //Inicializa o servidor APENAS UMA VEZ antes de todos os testes
    // O app.js só exporta o app, não inicia o listener se for ambiente de teste
    server = app.listen(0, done)
})

afterAll((done)=>{
    // Fecha o servidor Express
    server.close(done);
})

// --- Setup para os Dados Mock ---
beforeEach(() => {
    // Reseta o array de filmes antes de CADA teste para garantir isolamento
    resetaFilmes();
});

//Teste para a rota GET:

describe('GET /api/filmes (Feature 1)', () =>{
    test('Deve retornar todos os filmes com status 200 de sucesso', async ()=>{
        const response = await request(app).get('/api/filmes');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.filmes)).toBe(true);
    });
});

//Teste para a rota POST:

describe('POST /api/filmes (Feature 2)', ()=>{
    const novoFilme = {
        titulo: 'Até o Último Homem',
        ano: 2016,
        diretor: 'Mel Gibson'
    };

    test('Deve criar um novo filme com os campos obrigatórios e retornar o status 201', async ()=> {
        const response = await request(app)
        .post('/api/filmes')
        .send(novoFilme);

        expect(response.statusCode).toBe(201);
        expect(response.body.titulo).toBe(novoFilme.titulo);
    });

    test('Deve retornar erro 400 caso falte algum campo obrigatório (Para testar apague algum campo do filme de teste criado "novoFilme")', async ()=> {
        const response = await request(app)
        .post('/api/filmes')
        .send({titulo: 'Filme Incompleto'});

        expect(response.statusCode).toBe(400);
    });
});


// Teste para a rota de DELETE

describe ('DELETE /api/filmes/:id (Feature 3)', ()=> {
    const filmeParaDeletarId = 3; // ID do filme do Batman: O Cavaleiro das Trevas

    test('Deve remover um filme e retornar 204', async () => {
        //Remove o filme que existe nos dados mock
        const response = await request(app).delete(`/api/filmes/${filmeParaDeletarId}`)
        expect(response.statusCode).toBe(204)

        //Para verificar se o filme realmente foi excluído:
        const checkResponse = await request(app).get('/api/filmes') //Dou um GET em todos os Filmes
        const filmeRemovido = checkResponse.body.filmes.find(f => f.id === filmeParaDeletarId)
        expect(filmeRemovido).toBeUndefined() //Como removi o fime, se eu buscar pelo ID que excluí, então a expectativa é que me retorne um undefined, pois não existe mais.
    })

    test('Deve retornar um 404, caso o filme não exista', async ()=> {
        const idInexistente = 9999; //Usando o ID que não existe na base de dados mock
        const response = await request(app).delete(`/api/filmes/${idInexistente}`)

        expect(response.statusCode).toBe(404);
        expect(response.body.erro).toBe('Filme não encontrado.')
    })
})
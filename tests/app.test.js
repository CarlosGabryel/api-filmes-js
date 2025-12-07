const request = require('supertest');
const app = require('../src/app');
const {resetaFilmes} = require('../src/models/filmesModel');

let servidor;

//sobe o servidor uma única vez:
beforeAll((done) => {
    servidor = app.listen(0, done)})

//fecha o servidor após todos os testes:
afterAll((done) => {
    servidor.close(done);
});

//reseta o "banco de dados" antes de cada teste
beforeEach(() => {
    resetaFilmes();
});

//Test do GET
describe('GET /api/filmes', () => {
    test('Deve retornar a lista completa de filmes com status 200', async () => {
        const resposta = await request(servidor).get('/api/filmes');
        expect(resposta.status).toBe(200);
        expect(Array.isArray(resposta.body.filmes)).toBe(true);
    });
});

//Test do POST
describe('POST /api/filmes', ()=>{
    test('Deve criar um novo filme (201)', async ()=>{
        const novoFilme = {
            titulo: "Até o último homem",
            ano: 2016,
            diretor: "Mel Gibson",
        }
        const resposta = await request(app)
        .post('/api/filmes')
        .send(novoFilme);

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body.titulo).toBe(novoFilme.titulo);
    });

    test('Deve retornar erro 400 caso falte algum campo obrigatório (Para testar apague algum campo do filme de teste criado "novoFilme")', async () => {
    const resposta = await request(app)
      .post('/api/filmes')
      .send({ titulo: 'Filme Incompleto' });

    expect(resposta.statusCode).toBe(400);
  });
})

//Test DELETE

describe('DELETE /api/filmes/:id', () => {
  const filmeParaDeletarId = 3; // ID do filme do Batman: O Cavaleiro das Trevas

  test('Deve remover um filme e retornar 204', async () => {
    // Remove o filme que existe nos dados mock
    const response = await request(app).delete(`/api/filmes/${filmeParaDeletarId}`);
    expect(response.statusCode).toBe(204);

    // Para verificar se o filme realmente foi excluído:
    const checkResponse = await request(app).get('/api/filmes'); // Dou um GET em todos os Filmes
    const filmeRemovido = checkResponse.body.filmes.find((f) => f.id === filmeParaDeletarId);
    expect(filmeRemovido).toBeUndefined();
  });

  test('Deve retornar um 404, caso o filme não exista', async () => {
    const idInexistente = 9999; // Usando o ID que não existe na base de dados mock
    const response = await request(app).delete(`/api/filmes/${idInexistente}`);

    expect(response.statusCode).toBe(404);
    expect(response.body.erro).toBe('Filme não encontrado.');
  });
});
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

function listarFilmes() {
  return filmes;
}

function criarFIlme(titulo, ano, diretor) {
  const novoFilme = {
    id: proximoId,
    titulo,
    ano,
    diretor,
  };
  filmes.push(novoFilme);
  proximoId += 1;
  return novoFilme;
}

function deletarFilme(id) {
  const indice = filmes.findIndex((filme) => filme.id === id);
  if (indice === -1) {
    return false;
  }
  filmes.splice(indice, 1);
  return true;
}
function resetaFilmes() {
  filmes = [
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
  proximoId = filmes.length + 1;
}

module.exports = {
  listarFilmes,
  criarFIlme,
  deletarFilme,
  resetaFilmes,
};

/*
  15 - Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo
  Para isso, escreva no arquivo desafio15.js quatro queries, nesta ordem:

  Crie uma query que incremente o valor do campo avaliacao em 5 em todos os sanduíches de carne do tipo bovino. eyesDe olho na dica: utilize como filtro o campo tags.

  Crie uma query que incremente o valor do campo avaliacao em 3 em todos os sanduíches de ave.
*/

db.produtos.updateMany({}, {
  $set: { avaliacao: 0 },
});

db.produtos.updateMany({
  tags: { $in: ["bovino"] },
}, {
  $inc: { avaliacao: 5 },
});

db.produtos.updateMany({
  tags: { $in: ["ave"] },
}, {
  $inc: { avaliacao: 3 },
});

db.produtos.find({}, {
  nome: 1, avaliacao: 1, _id: 0,
});

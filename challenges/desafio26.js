/*
  Crie uma query que faça a adição do valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.

  Crie uma query que retorne o nome e tags de todos os documentos.
*/

db.produtos.updateMany({
  $and: [
    { "valoresNutricionais.2.percentual": { $lt: 40 } },
    { "valoresNutricionais.2.percentual": { $gt: 20 } },
  ],
}, {
  $push: { tags: "contém sódio" },
});

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });

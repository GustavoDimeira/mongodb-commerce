db.produtos.find({
  $and: [{ vendidos: { $nin: [50] } }, { tags: { $exists: 0 } }],
}, {
  _id: 0, vendidos: 1, nome: 1,
});

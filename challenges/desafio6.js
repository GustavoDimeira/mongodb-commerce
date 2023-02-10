db.produtos.find({
  $and: [{ curtidas: { $gte: 10 } }, { curtidas: { $lte: 100 } }]
}, {
  _id: 0, curtidas: 1, nome: 1
});

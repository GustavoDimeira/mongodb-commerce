// 7 - Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista

db.produtos.find({ $and: [{ vendidos: { $nin: [50] } }, { tags: { $exists: 0 } }] }, { _id: 0, vendidos: 1, nome: 1 } );

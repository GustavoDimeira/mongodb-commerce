/*
  Crie uma query que faça em todos os documentos a ordenação dos valores do array valoresNutricionais pelo campo percentual de forma decrescente. eyesDe olho na dica: mesmo sem adicionar nenhum novo valor, para essa operação é necessário utilizar também o modificador $each.

  Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.
*/

db.updateMany({}, {
  $push: {
    valoresNutricionais: {
       $each: { valoresNutricionais },
       $sort: { "valoresNutricionais.$.percentual": 1 }
     },
  }
});

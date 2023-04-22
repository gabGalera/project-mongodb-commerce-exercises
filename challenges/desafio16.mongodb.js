use("commerce");
db
  .produtos
  .updateOne(
    {
      nome: "Big Mac",
    },
    {
      $set: {
        ultimaModificacao: new Date(),
      },
    },
  );
db
  .produtos
  .find(
    {
      nome: "Big Mac",
    },
    {
      _id: 0,
      nome: 1,
    },
  );
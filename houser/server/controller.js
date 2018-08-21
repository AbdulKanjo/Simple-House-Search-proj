const getAll = (req, res, next) => {
  const db = req.app.get("db"); //ASYNC
  db.get_houses()
    .then(houses => res.status(200).send(houses))
    .catch(e => res.status(500).send("Something is wrong"));
};
const create = (req, res, next) => {
  const db = req.app.get("db");
  const { name, address, city, state, zip } = req.body;

  db.create_house([name, address, city, state, zip])
    .then(() => res.status(200).send("all good"))
    .catch(e => res.status(500).send("Something is wrong"));
};
const deleteHouse = (req, res, next) => {
  const db = res.app.get("db");
  db.delete_house([req.params.id])
    .then(() => res.status(200).send("User successfully deleted"))
    .catch(e => res.status(500).send("Something is wrong"));
};

module.exports = {
  getAll,
  create,
  deleteHouse
};

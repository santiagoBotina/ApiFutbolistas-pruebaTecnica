const db = require("../../database/models");

let futbolistas = db.Futbolista;

const futbolistaRouter = {
  show: (req, res) => {
    futbolistas.findAll().then((data) => {
      res.json(data);
    });
  },

  showById: (req, res) => {
    futbolistas.findByPk(req.params.id).then((data) => {
      res.json(data);
    });
  },

  showByTeamId: (req, res) => {
    const teamId = req.params.id;
    futbolistas
      .findAll({
        where: {
          team_id: teamId,
        },
      })
      .then((data) => {
        res.json(data);
      });
  },

  create: (req, res) => {
    futbolistas
      .create({
        name: req.body.name,
        age: req.body.age,
        squad_number: req.body.squad_number,
        position: req.body.position,
        nationality: req.body.nationality,
        team_id: req.body.team_id,
      })
      .then(console.log("Futbolista creado"));
  },

  update: (req, res) => {
    futbolistas
      .update(
        {
          name: req.body.name,
          age: req.body.age,
          squad_number: req.body.squad_number,
          position: req.body.position,
          nationality: req.body.nationality,
          team_id: req.body.team_id,
        },
        {
          where: { id: req.params.id },
        }
      )
      .then(console.log(`Usuario con id ${req.params.id} editado`));
  },

  destroy: (req, res) => {
    futbolistas
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(console.log(`Jugador con id ${req.params.id} fue borrado`));
  },
};

module.exports = futbolistaRouter;

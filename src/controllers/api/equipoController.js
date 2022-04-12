const db = require("../../database/models");
const Op = db.Sequelize.Op;

let equipos = db.Equipo;

const equiposRouter = {
  show: (req, res) => {
    equipos.findAll().then((data) => {
      res.json(data);
    });
  },

  showById: (req, res) => {
    equipos.findByPk(req.params.id).then((data) => {
      res.json(data);
    });
  },

  //**Search bar */
  //   showByLeague: (req, res) => {
  //     const league = req.params.league;
  //     equipos
  //       .findAll({
  //         where: {
  //           league: { [Op.like]: `%${league}` },
  //         },
  //       })
  //       .then((data) => {
  //         res.json(data);
  //       });
  //   },

  create: (req, res) => {
    equipos
      .create({
        name: req.body.name,
        league: req.body.league,
        country: req.body.country,
      })
      .then(console.log("Equipo creado"));
  },

  update: (req, res) => {
    equipos
      .update(
        {
          name: req.body.name,
          league: req.body.league,
          country: req.body.country,
        },
        {
          where: { id: req.params.id },
        }
      )
      .then(console.log(`Equipo con id ${req.params.id} editado`));
  },

  destroy: (req, res) => {
    equipos
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(console.log(`Equipo con id ${req.params.id} fue borrado`));
  },
};

module.exports = equiposRouter;

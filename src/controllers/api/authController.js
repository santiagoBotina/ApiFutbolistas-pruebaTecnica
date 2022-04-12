const db = require("../../database/models");
const admin = db.Admin;
const jwt = require("jsonwebtoken");

const authController = {
  login: (req, res) => {
    admin.findByPk(1).then((user) => {
      console.log(req.body);

      if (user.password == req.body.password) {
        jwt.sign({ user }, "secretKey", (err, token) => {
          err ? res.sendStatus(403) : res.json({ token, user });
        });
      } else {
        res.json("Acceso denegado");
      }
    });
  },

  post: (req, res) => {
    jwt.verify(req.token, "secretKey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          msg: "Post fue creado",
          authData,
        });
      }
    });

    res.json({
      msg: "Post fue creado",
    });
  },
};

module.exports = authController;

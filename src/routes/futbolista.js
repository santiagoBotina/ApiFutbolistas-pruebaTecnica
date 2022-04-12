const express = require("express");
const router = express.Router();

const futbolistaController = require("../controllers/api/futbolistaController");

router.get("/", futbolistaController.show);
router.get("/team/:id", futbolistaController.showByTeamId);
router.post("/create", futbolistaController.create);
router.post("/update/:id", futbolistaController.update);
router.post("/delete/:id", futbolistaController.destroy);

module.exports = router;

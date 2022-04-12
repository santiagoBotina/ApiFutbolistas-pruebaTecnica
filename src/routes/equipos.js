const express = require("express");
const router = express.Router();

const equipoController = require("../controllers/api/equipoController");

router.get("/", equipoController.show);
router.get("/:id", equipoController.showById);
// router.get("/league/:league", equipoController.showByLeague);
router.post("/create", equipoController.create);
router.post("/update/:id", equipoController.update);
router.post("/delete/:id", equipoController.destroy);

module.exports = router;

const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");
const authController = require("../controllers/api/authController");

router.post("/", authController.login);
router.post("/post", verifyToken, authController.post);

module.exports = router;

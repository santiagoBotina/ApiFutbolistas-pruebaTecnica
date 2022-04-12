const express = require("express");
const app = express();

//Routers
const futbolistaRouter = require("./src/routes/futbolista");
const equiposRouter = require("./src/routes/equipos");
const authRouter = require("./src/routes/login");

//Parsing the body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/api/futbolista", futbolistaRouter);
app.use("/api/equipo", equiposRouter);
app.use("/api/login", authRouter);

//Server
app.listen(3000, () => {
  console.log("all good");
});

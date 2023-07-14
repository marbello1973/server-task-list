const { Router } = require("express");

const route = Router();

route.get("/", (req, res) => {
  res.send("rura GET");
});
route.get("/:id", (req, res) => {
  res.send("rura GET buscar por id");
});
route.post("/:id", (req, res) => {
  res.send("ruta POST");
});
route.put("/:id", (req, res) => {
  res.send("ruta PUT");
});
route.delete("/:id", (req, res) => {
  res.send("ruta DELETTE");
});

module.exports = route;

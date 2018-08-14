const db = require("../models");

module.exports = function (app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      let hbsObject = {
        burgers: data
      }
      res.render("index", hbsObject)
    })
  });

  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
      name: req.body.name,
      devoured: req.body.devoured
    }).then(function(result) {
      res.json(result)
    })
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result)
    })
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destory({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result)
    })
  
  });

}











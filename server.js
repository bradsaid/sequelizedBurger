var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgersController.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
  });
});



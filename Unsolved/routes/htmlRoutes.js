var db = require("../models");

module.exports = function(app) {
  // Load members page
  app.get("/news", function(req, res) {
    res.render("news");
  });

  // Load news page
  app.get("/members", function(req, res) {
    res.render("members");
  });
};

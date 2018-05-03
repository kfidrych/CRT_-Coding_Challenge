var path = require("path");

module.exports = function(app) {
    app.get("/playGame", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/playGame.html"));
    });
  
    app.get("/interpretations", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/interpretations.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
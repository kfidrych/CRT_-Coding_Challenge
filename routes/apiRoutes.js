var userDataArray = require("../data/userData.js");

module.exports = function (app) {
    app.get("/api/interpretations", function (req, res) {
        res.json(userDataArray);
    });

    // Handles when a user submits a form and thus submits data to the server.
    app.post("/api/interpretations", function (req, res) {
        var interpretation = {
            url: req.body.url,
            userName: req.body.interpretations[0].userName,
            interp: req.body.interpretations[0].interpretation
        }
        userDataArray.push(interpretation);
        console.log(interpretation);
    });

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        userDataArray = [];

        console.log(userDataArray);
    });
};
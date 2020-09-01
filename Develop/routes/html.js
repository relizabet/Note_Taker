// route to html files

const path = require("path");

// GET /notes - should return teh notes.html file

// GET * - should return the index.html file

module.exports = function (app) {
  // app.get("/", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // no matching route
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

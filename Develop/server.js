// build server
const express = require("express");

// telling node will create an express server
const app = express();

// sets initial port
const PORT = process.env.PORT || 8080;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
require("./routes.api")(app);
require("./routes/html")(app);

// listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

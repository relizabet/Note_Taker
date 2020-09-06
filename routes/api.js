// route to api files

const fs = require("fs");
// generate unique id (per Mike)
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  // get request
  app.get("/api/notes", (req, res) => {
    // read db.json file
    fs.readFile("./db/db.json", (err, data) => {
      // throw error if there is an error
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  // post response
  app.post("/api/notes", (req, res) => {
    let generateNote = req.body;
    // generate unique id for note
    generateNote.id = uuidv4();
    // read db.json
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      // store db.json strings as objects
      let noteText = JSON.parse(data);
      // store noteText in body
      noteText.push(generateNote);
      // write new notes to json file
      fs.writeFile("./db/db.json", JSON.stringify(noteText), (err) => {
        if (err) throw err;
        res.json(noteText);
      });
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    //
    // const existingNotes = req.body;
    // console.log(existingNotes);

    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      const jsonReq = JSON.parse(data);
      console.log(jsonReq);
    });
  });
};

const router = require('express').Router();
const fs = require("fs");
const notes = require("../db/db.json");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return note;
}

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    
    // set id based on what the next index of the array will be
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.get('/notes', (req, res) => {
    console.log(notes);
    res.json(notes);
});

module.exports = router;
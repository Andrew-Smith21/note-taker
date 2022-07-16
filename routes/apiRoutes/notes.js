const fs = require("fs");
const path = require("path");
const router = require('express').Router();
const notes = require('../../db/db.json');
// const store = require('../../Develop/db/')


function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return note;
}

router.get('/notes', (req, res) => {
    console.log(res);
    // res.json(notes);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    // const note = createNewNote(req.body, notes);
    // res.json(note);
    
    
    req.body.id = notes.length.toString();
  
    const note = createNewNote(req.body, notes);
    res.json(note);
    
});


module.exports = router;
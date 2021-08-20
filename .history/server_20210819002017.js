const express = require('express');
const path = require('path');
const fs = require('fs');

// Setting up the Express APP //
const app = express();
const PORT = process.env.PORT || 3001;
const mainDir = path.join(_dirname, "/public");

// Sets up the Express app to handle data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Get request from Reviews //
app.get('/notes', function (req, res){
    res.sendFile(path.join(mainDir, "notes.html"));
});

app.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

app.get('/api/notes/:id', function (req, res) {
    let saveNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(saveNotes[Number(req.params.id)]);
});

app.get('*', function (req, res) {
    res.sendFile(path.join(mainDir, 'index.html'));
});

app.post('/api/notes', function (req, res) {
    let saveNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let newNote = req.body;
    let uniqueID =(saveNotes.length).toString();
    newNote.id = uniqueID;
    savedNotes.push(newNote);

    fs.writeFileSync('.'
});
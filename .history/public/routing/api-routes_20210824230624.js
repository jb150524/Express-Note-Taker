const apiRoutes = require('express').Router();
const { response } = require('express');
const fs = require('fs');

apiRoutes.get('/notes', (req, res) => {
    console.log('Get request')

    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.log(`Get request - Return Notes Data: ${JSON.stringify(data)}`);

    response.json(data);
});

apiRoutes.post('/notes', (req, res) => {

    const newNote = request.body;
    console.log(`POST request - new note: ${JSON.stringify(newNote)}`);

    newNote.id = uuid();

    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    data.push(newNote);

    fs,fs.writeFileSync('./db/db.json', JSON.stringify(data));
    console.log("Successfully added the new Note to 'db.json'!");

    response.json(data);
});

apiRoutes.delete('/notes/:id', (req, res) => {

    let noteId = request.params.id;
    console.log(`Delete request received for id: ${noteId}`);

    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    const newData = data.filter(
});

module.exports = apiRoutes;


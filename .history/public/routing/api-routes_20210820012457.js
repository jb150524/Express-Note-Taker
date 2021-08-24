const fs = require("fs");

var uniqid = require("uniqid");

module.exports = function (app) {
    app.get('/api/notes', (req, res) => {
        console.log('Execute Get notes request');

        let data = fs.readFileSync("./db/db.json", 'utf8');

        res.json(JSON.parse(data));
});

app.post('/api/notes', (req, res) => {
    const newNote = {
        ...req.body,
        id: uniqId(),
};

console.log('Post Request for New Notes');

let data = fs.readFileSync('./db/db.json', 'utf8');

const dataJSON = JSON.parse(data);

dataJSON.push(newNote);

fs.writeFile(
    './db/db.json', JSON.stringify(dataJSON),
    (err, text) => {
        if (err) { console.error(err);
            return;
        }
        console.log('HOLA', text);
});

console.log('Success, added a new note');

res.json(data);
});

app.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync('./db/db.json', 'utf8');

    const dataJSON = JSON.parse(data);

    const newNote = dataJSON.filter((note) => {
        return note.id !== req.params.id;
});
// console.log(req.params)

fs.writeFile('./db/db.json', JSON.stringify(newNote), (err, text) => {
    if(err) { 
        console.error(err);
        return;
    }
});

res.json(newNote);
});
};
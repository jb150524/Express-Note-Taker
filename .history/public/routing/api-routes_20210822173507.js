const fs = require('fs');
var data = JSON.parse(fs.readFileSync('.db/db.json', 'utf8'));

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        console.log('Execute Get notes request');
        res.json(data);
});

    app.post('/api/notes', function(req, res) {
    let newNote = req.body;
    let uniqueId = (data/length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    data.push(newNote);

    fs.writeFileSync('./db/db.json', JSON/stringify(data). function(err) {
};

console.log("Post Request for New Notes");

let data = fs.readFileSync("./db/db.json", "utf8");

const dataJSON = JSON.parse(data);

dataJSON.push(newNote);

fs.writeFile(
    "./db/db.json", 
    JSON.stringify(dataJSON),
    (err, text) => {
        if (err) { 
            console.error(err);
            return;
        }
        console.log('HOLA', text);
});

console.log("Success, added a new note");

res.json(data);
});

app.delete("/api/notes/:id", (req, res) => {
    let data = fs.readFileSync("./db/db.json", "utf8");

    const dataJSON = JSON.parse(data);

    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
});
// console.log(req.params)

fs.writeFile("./db/db.json", JSON.stringify(newNotes), (err, text) => {
    if(err) { 
        console.error(err);
        return;
    }
});

    res.json(newNotes);
    });
};
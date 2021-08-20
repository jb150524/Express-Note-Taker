var uniqID = require('uniqID');

module.exports = function (data) {
    app.get('/api/notes', (req, res) => {
        console.log('Execute Get notes request');

        let data = fs.readFileSync('./db/db.json', 'utf8');

        res.json(JSON.parse(data));
});

app.post('/api/notes', (req, res) => {
    const newNote = {
        ...req.body,
        id: uniqID(),
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

console.log 
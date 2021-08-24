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

    fs.writeFileSync('./db/db.json', JSON.stringify(data). function(err) {
        if (err) throw (err);
});

    res.json(data);
}
var uniqID = require('uniqID');

module.exports = function (data) {
    app.get('/api/notes', (req, res) => {
        console.log('Execute Get notes request');

        let data = fs.readFileSync('./db/db.json', 'utf8');

        res.json(JSON.parse(data));
});

app.post('/api/notes', (req, res) => {
    const
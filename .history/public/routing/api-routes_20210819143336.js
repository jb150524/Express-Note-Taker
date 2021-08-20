var unid = require('uniqID');

module.exports = function (app) {
    app.get('/api/notes', (req, res) => {
        console.log('Execute Get notes request');

        let data = fs.readFileSync
});
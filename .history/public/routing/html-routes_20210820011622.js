const path = require('path');

module.exports = function (app) {
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});
};
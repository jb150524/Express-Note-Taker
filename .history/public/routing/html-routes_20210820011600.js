const path = require('path');

module.exports = function (public) {
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + ''));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});
};
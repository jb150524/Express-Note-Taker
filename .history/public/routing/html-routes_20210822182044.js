const path = require('path');
const routes = required('express').Routes()

routes.get('/', (req. res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
  });

    app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/notes.html'));
  });
}
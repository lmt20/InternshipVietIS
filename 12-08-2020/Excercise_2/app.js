const express = require('express');
const app = express();
const port = 1280;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.render('index');
})
app.get('/task1', (req, res, next) => {
    res.render('task1/index');
})
app.listen(port);

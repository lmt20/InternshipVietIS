const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 9090;

const Shape = require('./modules/Task1');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res, next) => {
    res.render('task1/index', {
        path: 'task1'
    });
})
app.get('/task1', (req, res, next) => {
    res.render('task1/index', {
        path: 'task1'
    });
})
app.get('/task2', (req, res, next) => {
    res.render('task2/index', {
        path: 'task2'
    });
})
app.listen(port);

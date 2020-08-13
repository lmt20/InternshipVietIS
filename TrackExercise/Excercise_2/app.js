const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 1280;

const Shape = require('./modules/Task1');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res, next) => {
    res.render('index', {
        path: 'task1'
    });
})
app.get('/task1', (req, res, next) => {
    res.render('task1/index', {
        path: 'task1'
    });
})
app.post('/task1/calculate', (req, res, next) => {
    const width = req.body.width;
    const height = req.body.height;
    const size = req.body.size;
    
    if(width && height){
        const rectangle = new Shape.Rectangle(+height, +width);
        const area = rectangle.getArea();
        return res.status(200).json({area: area});
    }
    if(size){
        const square = new Shape.Square(size);
        const area = square.getArea();
        return res.status(200).json({area: area});
    }
})
app.get('/task2', (req, res, next) => {
    res.render('task2/index', {
        path: 'task2'
    });
})
app.post('/task2/calculate', (req, res, next) => {
    const width = req.body.width;
    const height = req.body.height;
    const size = req.body.size;
    
    if(width && height){
        const rectangle = new Shape.Rectangle(+height, +width);
        const area = rectangle.getArea();
        return res.status(200).json({area: area});
    }
    if(size){
        const square = new Shape.Square(size);
        const area = square.getArea();
        return res.status(200).json({area: area});
    }
})
app.listen(port);

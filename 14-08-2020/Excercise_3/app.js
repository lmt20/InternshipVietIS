const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 1111;

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
app.post('/task1/calculate', (req, res, next) => {
    const operatorName = req.body.operatorName;
    const number1 = parseFloat(req.body.number1);
    const number2 = parseFloat(req.body.number2);
    // console.log(number1, number2, operatorName);
    let result = 0;
    switch (operatorName) {
        case 'plus':
            result = number1 + number2; 
            break;
        case '-':
            result = number1 - number2;
            break;
        case 'x':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '%':
            result = number1 % number2;
            break;
        default:
            break;
    }
    return res.status(200).json({result: result});
})

app.get('/task2', (req, res, next) => {
    res.render('task2/index', {
        path: 'task2'
    });
})
app.listen(port);

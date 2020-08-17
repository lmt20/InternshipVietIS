const express = require('express');
const router = express.Router();

router.get('/task1', (req, res, next) => {
    res.render('exercise_3/task1', {
        exercise: 'exercise-3',
        task: 'task1'
    });
})
router.post('/task1/calculate', (req, res, next) => {
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

router.get('/task2', (req, res, next) => {
    res.render('exercise_3/task2', {
        exercise: 'exercise-3',
        task: 'task2'
    });
})

module.exports = router;
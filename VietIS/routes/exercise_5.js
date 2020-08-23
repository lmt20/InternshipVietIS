const express = require('express');
const router = express.Router();

router.get('/task1', (req, res, next) => {
    res.render('exercise_5/task1', {
        exercise: 'exercise-5',
        task: 'task1'
    });
})

router.get('/task2', (req, res, next) => {
    res.render('exercise_5/task2', {
        exercise: 'exercise-5',
        task: 'task2'
    });
})

module.exports = router;
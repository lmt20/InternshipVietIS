const express = require('express');
const router = express.Router();


router.get('/task1', (req, res, next) => {
    res.render('exercise_1/task1', {
        exercise: 'exercise-1',
        task: 'task1'
    });
})
router.get('/task2', (req, res, next) => {
    res.render('exercise_1/task2', {
        exercise: 'exercise-1',
        task: 'task2'
    });
})
router.get('/task3', (req, res, next) => {
    res.render('exercise_1/task3', {
        exercise: 'exercise-1',
        task: 'task3'
    });
})
router.get('/task4', (req, res, next) => {
    res.render('exercise_1/task4', {
        exercise: 'exercise-1',
        task: 'task4'
    });
})

module.exports = router;
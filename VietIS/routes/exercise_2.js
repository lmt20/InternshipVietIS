const express = require('express');
const router = express.Router();


router.get('/task1', (req, res, next) => {
    res.render('exercise_2/task1', {
        exercise: 'exercise-2',
        task: 'task1'
    });
})
router.get('/task2', (req, res, next) => {
    res.render('exercise_2/task2', {
        exercise: 'exercise-2',
        task: 'task2'
    });
})

module.exports = router;
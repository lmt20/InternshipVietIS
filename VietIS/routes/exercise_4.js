const express = require('express');
const router = express.Router();

router.get('/task1', (req, res, next) => {
    res.render('exercise_4/task1', {
        exercise: 'exercise-4',
        task: 'task1'
    });
})

module.exports = router;
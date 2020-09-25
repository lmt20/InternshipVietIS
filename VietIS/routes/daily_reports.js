const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const date = '10-08-2020';
    const nl2br = (str) => {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
    };
    const filePath = path.join('data', 'daily_reports', `${date}.txt`); 
    fs.readFile(filePath, {encoding: 'utf-8'}, function(error, data){
        if (!error) {
            res.render('daily_reports/report', {
                exercise: 'report-type',
                task: '',
                date: date,
                data: nl2br(data)
            });
        } else {
            throw error;
        }
    });

})
router.get('/final-project', (req, res, next) => {
    res.render('daily_reports/final-project', {
        exercise: 'report-type',
        task: '',
    });
})

router.get('/:date', (req, res, next) => {
    const date = req.params.date;
    const nl2br = (str) => {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
    };
    const filePath = path.join('data', 'daily_reports', `${date}.txt`); 
    fs.readFile(filePath, {encoding: 'utf-8'}, function(error, data){
        if (!error) {
            res.render('daily_reports/report', {
                exercise: 'report-type',
                task: '',
                date: date,
                data: nl2br(data)
            });
        } else {
            throw error;
        }
    });
})

router.get('/download/:date', (req, res, next) => {
    const date = req.params.date;
    const filePath = path.join('data', 'daily_reports', `${date}.txt`); 
    res.download(filePath, `${date}.txt`, function (err) {
        if (err) {
            console.log(err);
        }
    })
})



module.exports = router;
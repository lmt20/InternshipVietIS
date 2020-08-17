const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 15128;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
// app.use('/data', express.static('daily_reports'));
app.use(bodyParser.urlencoded({ extended: false }))

const dailyReportsRouter = require('./routes/daily_reports');
const exercise1Router = require('./routes/exercise_1');
const exercise2Router = require('./routes/exercise_2');
const exercise3Router = require('./routes/exercise_3');

app.get('/', (req, res, next) => {
    res.redirect('/daily-reports')
    // res.render('daily_reports/report', {
    //     exercise: 'report-type',
    //     task: '',
    //     date: '10-08-2020'
    // });
})

app.use('/daily-reports', dailyReportsRouter);
app.use('/exercise-1', exercise1Router);
app.use('/exercise-2', exercise2Router);
app.use('/exercise-3', exercise3Router);

app.listen(port);

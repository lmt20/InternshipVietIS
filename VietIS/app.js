const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 11223;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
// app.use('/data', express.static('daily_reports'));
app.use(bodyParser.urlencoded({ extended: false }))

const dailyReportsRouter = require('./routes/daily_reports');
const exercise1Router = require('./routes/exercise_1');
const exercise2Router = require('./routes/exercise_2');
const exercise3Router = require('./routes/exercise_3');
const exercise4Router = require('./routes/exercise_4');
const exercise5Router = require('./routes/exercise_5');

app.get('/', (req, res, next) => {
    res.redirect('/daily-reports')
})

app.use('/daily-reports', dailyReportsRouter);
app.use('/exercise-1', exercise1Router);
app.use('/exercise-2', exercise2Router);
app.use('/exercise-3', exercise3Router);
app.use('/exercise-4', exercise4Router);
app.use('/exercise-5', exercise5Router);

app.listen(port);

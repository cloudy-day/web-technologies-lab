const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const stylus = require('stylus');
const nib = require('nib');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(stylus.middleware({
    src: path.join(__dirname, 'public'),
    compile: (str, path) => {
        return stylus(str)
            .set('filename', path)
            .use(nib());
    },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    res.render('user', { name, email, password });
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});

//catch 404 and forward error handler

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Welcome to the Homepage of Express Web App');
});

router.get('/about', function(req, res, next) {
    res.send('This About Page Shows the Details of the Express Web App');
});

router.get('/students', function(req, res, next) {
    res.send('List of Students :\n\n 1. Mahinur Alam-2018331054\n\n 2. Mehedi Hasan Jibon-2018331002\n');
});

router.get('/time', function (req, res, next) {
    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatDate = `${day}/${month}/${year}`;

    res.send('Today\'s Date is: ' + formatDate);
});

module.exports = router;
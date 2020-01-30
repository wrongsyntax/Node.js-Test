const express = require('express');
const router = express.Router();
const routeData = require('../public/data/routes');

// TODO: Find a way to find the index automatically
const routeIndex = 164;
const routeName = routeData.data[routeIndex][10];

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('info', {
    routeNum: req.query.routeNumber,
    name: routeName,
    title: 'jatw - info'
  });
});

module.exports = router;

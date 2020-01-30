const express = require('express');
const router = express.Router();
const routeData = require('../public/data/routes');

/* GET users listing. */
router.get('/', function(req, res) {
  let routeIndex = 0;
  for (let i = 0; i < routeData.data.length; i++) {
    if (routeData.data[i][8] === req.query.routeNumber) {
      routeIndex = i;
      break;
    }
  }
  const routeName = routeData.data[routeIndex][10];

  res.render('info', {
    routeNum: req.query.routeNumber,
    name: routeName,
    title: 'jatw - info'
  });
});

module.exports = router;

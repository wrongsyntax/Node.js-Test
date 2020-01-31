const express = require('express');
const router = express.Router();
const routeData = require('../public/data/routes');

/* GET users listing. */
router.get('/', function(req, res) {
  // Get the route name from routes.json based on routeNum
  let routeIndex = 222;    // Originally 222 since index 222 is the fallback if the route is not found
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

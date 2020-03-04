const express = require('express');
const router = express.Router();
const routeData = require('../public/data/routes');
const fs = require('fs');

const styleData = fs.readFileSync('./public/data/style.json', 'utf-8');
const styleJSON = JSON.parse(styleData);

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

  styleJSON.layers[44].paint['line-color'][2][0] = parseInt(req.query.routeNumber);    // Set the value of the line to display to the value for the current route info page

  fs.writeFileSync('./public/data/final_map_style.json', JSON.stringify(styleJSON)); // Write the updated JSON to the final map style file to use as the style for the map

  res.render('info', {
    routeNum: req.query.routeNumber,
    name: routeName,
    title: 'jatw - info',
    style: "'../data/final_map_style.json'"
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  let input = req.query.routeNumber;
  console.log(input);
  res.render('info', {routeNum: input});
});

module.exports = router;

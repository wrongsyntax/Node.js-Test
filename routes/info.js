const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('info', {routeNum: req.body.routeNum});
});

module.exports = router;

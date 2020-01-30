const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'just a transit website'});
});

module.exports = router;

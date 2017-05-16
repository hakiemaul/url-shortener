var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Url.findAll({
    order: [['createdAt', 'ASC']]
  })
  .then(urls => {
    res.render('links', { url: urls });
  })
});

module.exports = router;

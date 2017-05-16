var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('shortit', { url: null})
});

router.post('/', (req, res, next) => {
  let link = req.body.link
  db.Url.create({'link': link})
  .then((url) => {
    res.render('shortit', { url: url.url_short})
  })
})

module.exports = router;

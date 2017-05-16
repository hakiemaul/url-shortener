var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Url.findAll()
  .then(urls => {
    res.render('index', { url: urls });
  })
});

router.get('/s/:short', (req, res, next) => {
  let short = req.params.short
  db.Url.find({where: { url_short: short}})
  .then(url => {
    let tambah = url.click_count + 1;
    url.update({click_count: tambah})
    .then(() => {
      let link = url.link
      if(!/http/.test(link)) {
        link = 'http://' + link
      }
      res.redirect(link)
    })
  })
})

module.exports = router;

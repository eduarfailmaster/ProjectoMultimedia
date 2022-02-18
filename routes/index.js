var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/playVideo', async function (req, res, next) {
  var url = req.body.texto;
  if (url.length > 0){
    res.render("player", {data: {title: "Express", url: url}})
  }else {
    console.log("no coloco url")
    res.render('index', {title: 'Express'});
  }
});

module.exports = router;

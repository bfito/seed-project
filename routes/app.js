var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc) {
      if (err) {
        return res.send('Error!');
      }
      res.render('node', {email: doc});
    });
    res.render('node');
});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
      firstName: 'JP',
      lastName: 'Z',
      password: 'secret',
      email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;

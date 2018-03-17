var express = require('express');
var router = express.Router();
var bcrypt = require('bycrypt');

var USer = require('../models/user');

router.get('/', function (req, res, next) {
  var user = new User ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: bycrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });
  user.save(function(err, result){
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });
});

module.exports = router;

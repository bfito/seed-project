var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function (req, res, next) {
  Message.find()
    .exec(function(err, messages) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: messages
      });
    });
});

router.post('/', function (req, res, next) {
  var message = new Message({
    content: req.body.content
  });
  message.save(function(err, result) {
    if (err) {
      // we use return to return this message and to return to begginning of function
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    // 201 is code for all is good
    res.status(201).json({
      message: 'Saved',
      obj: result
    });
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

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

router.use('/', function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
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

router.patch('/:id', function(req, res, next) {
  Message.findById(req.params.id, function(err, message){
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if(!message) {
      return res.status(500).json({
        title: 'No Message found!',
        error: {message: 'Message not found!!'}
      });
    }
    message.content = req.body.content;
      message.save(function(err, result){
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          });
        }
        res.status(200).json({
          message: 'Updated message!',
          obj: result
        });
      });
  });
});

router.delete('/:id', function(req,res,next) {
  Message.findById(req.params.id, function(err, message){
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if(!message) {
      return res.status(500).json({
        title: 'No Message found!',
        error: {message: 'Message not found!!'}
      });
    }
    message.content = req.body.content;
      message.remove(function(err, result){
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          });
        }
        res.status(200).json({
          message: 'Message deleted!',
          obj: result
        });
      });
  });
});

module.exports = router;

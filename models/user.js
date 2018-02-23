var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, requeried: true},
    password: {type: String, requeried: true},
    email: {type: String, requeried: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
  });

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);

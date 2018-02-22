var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.OjectId, ref: 'User'}
  });

module.exports = mongoose.model('Message', schema);

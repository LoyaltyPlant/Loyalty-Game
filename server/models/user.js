const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  balance: {
    type: Number,
    required: true
  },
  group: {
    type: Schema.ObjectId,
    ref: 'Group'
  },
  role: {
    type: String, 
    required: true, 
    enum: ['User', 'Manager', 'Admin'],
    default: 'User'
  },
  token: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema);
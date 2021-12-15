const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 6,
  },
  lastName: {
    type: String,
    required: true,
    min: 6,
  },
});

module.exports = mongoose.model('Users', userSchema);

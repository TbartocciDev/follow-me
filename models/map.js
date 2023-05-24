const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: {
      type: String, 
      required: true
  },
  bio: {
      type: String,
      required: true
  },
  photoURL: {
      type: String,
      default: "%PUBLIC_URL%/map.png",
      required: true
  }
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Map', mapSchema);
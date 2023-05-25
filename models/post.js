const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  blog: { type: Schema.Types.ObjectId, ref: 'Map' },
  title: {
      type: String, 
      required: true
  },
  summary: {
      type: String,
      required: true
  },
  coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
  },
  photos: []
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
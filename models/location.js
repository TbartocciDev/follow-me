const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    coordinates: {
        lat: { type: Float32Array, required: true },
        lng: { type: Float32Array, required: true }
    },
    photos: []
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Location', locationSchema);
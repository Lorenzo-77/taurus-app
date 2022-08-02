"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = model('Note', NoteSchema);
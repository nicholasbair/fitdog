const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  type: { type: String, lowercase: true },
  participant: String,
  assessment: String,
  value: Number,
  notes: String
});

const ActivityClass = mongoose.model('activity', activitySchema);

module.exports = ActivityClass;

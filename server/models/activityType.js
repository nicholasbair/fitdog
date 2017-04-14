const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activityTypeSchema = new Schema({
  type: { type: String, unique: true, lowercase: true }
});

const ActivityTypeClass = mongoose.model('activityType', activityTypeSchema);

module.exports = ActivityTypeClass;

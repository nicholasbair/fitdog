const ActivityType = require('../models/activityType');

exports.findAll = function(req, res, next) {
  ActivityType.find()
  .then(activityTypes => {
    res.send(activityTypes);
  })
  .catch(err => {
    console.log(err);
  });
}

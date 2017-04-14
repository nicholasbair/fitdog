'use strict';

const Activity = require('../models/activity');

exports.findAll = (req, res, next) => {
  Activity.find()
  .then(activities => {
    res.send(activities);
  }).catch(err => {
    res.send(err);
  });
}

exports.add = (req, res, next) => {
  console.log(req.body);
  let activity = new Activity({
    type: req.body.type,
    participant: req.body.participant,
    assessment: req.body.assessment,
    value: req.body.value,
    notes: req.body.notes
  });
  activity.save((activity) => {
    res.send(activity);
  }).catch(err => {
    res.send(err);
  });
}

exports.update = (req, res, next) => {
  Activity.findOne({ _id: req.params.id }, (err, doc) => {
    doc.type = req.body.type;
    doc.participant = req.body.participant;
    doc.assessment = req.body.assessment;
    doc.value = req.body.value;
    doc.notes = req.body.notes;

    doc.save();
  }).then(response => {
    res.send(response);
  }).catch(err => {
    res.send(err);
  });
}

exports.findById = (req, res, next) => {
  Activity.find({ _id: req.params.id })
  .then(activity => {
    res.send(activity);
  }).catch(err => {
    res.send(err);
  });
}

exports.delete = (req, res, next) => {
  Activity.findOneAndRemove({ _id: req.params.id })
  .then(response => {
    res.send(response);
  }).catch(err => {
    res.send(err);
  });
}

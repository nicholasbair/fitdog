const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const Authentication = require('./controllers/authentication');
const Dog = require('./controllers/dog');
const ActivityType = require('./controllers/activityType');
const Activity = require('./controllers/activity');

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123' });
  });

  // User routes
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  // Dog routes
  // TODO: add requireAuth back to routes
  app.get('/api/dog/findAll', Dog.findAll);
  app.post('/api/dog/add', Dog.add);
  app.put('/api/dog/update/:id', Dog.update);
  app.get('/api/dog/findById/:id', Dog.findById);
  app.delete('/api/dog/delete/:id', Dog.delete);

  // Activity routes
  // TODO: add requireAuth back to routes
  app.get('/api/activityType/findAll', ActivityType.findAll);
  app.get('/api/activity/findAll', Activity.findAll);
  app.post('/api/activity/add', Activity.add);
  app.get('/api/activity/findById/:id', Activity.findById);
  app.put('/api/activity/update/:id', Activity.update);
  app.delete('/api/activity/delete/:id', Activity.delete);
};

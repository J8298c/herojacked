module.exports = (app, passport, User) => {
  app.get('/user/profile', isLoggedin, (req, res) => {
    res.json(req.user);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/user/profile',
    failureRedirect: '/login',
    failureFlash: true,
  }));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/signup',
    failureFlash: true,
  }));

  app.delete('/user/delete/:user', (req, res) => {
    User.findOneAndRemove({
      email: req.params.email,
    }, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: 'Sorry to see you go!' });
      }
    });
  });
};

function isLoggedin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } 
  return res.redirect('/');
}

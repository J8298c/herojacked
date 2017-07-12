module.exports = (app, Workouts) => {
  app.get('/workouts', (req, res) => {
    Workouts.find({})
      .exec((err, workouts) => {
        if (err) {
          console.log(err);
        } else {
          console.log(workouts, 'workouts in the DB');
          res.json(workouts);
        }
      });
  });
    
  app.post('/workouts/create', (req, res, next) => {
    const newWorkout = new Workouts({
      name: req.body.name,
      reps: req.body.reps,
      sets: req.body.sets,
    });
    newWorkout.save((err) => {
      if (err) { 
        console.log(err); 
      } else {
        Workouts.find({})
          .exec((err, workouts) => {
            if (err) {
              console.log(err);
            } else {
              res.json(workouts);
            }
          });
      }
    });
  });
};

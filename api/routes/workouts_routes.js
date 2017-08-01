module.exports = (app, Workouts) => {
  app.get('/api/workouts', (req, res) => {
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

  app.post('/api/workouts/create', (req, res, next) => {
    console.log(req.body, 'the req body');
    const newWorkout = new Workouts({
      name: req.body.name,
      reps: req.body.reps,
      sets: req.body.sets,
      bodyPart: req.body.bodyParts,
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

  app.get('/api/workouts/workout/:name', (req, res) => {
    Workouts.findOne({
      name: req.params.name,
      /*
      need to add regex to model to make all names lowercase
      */
    }, (err, workout) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workout);
      }
    });
  });

  app.put('/api/workouts/edit/:name', (req, res) => {
    Workouts.findOneAndUpdate({ name: req.params.name }, {
      $set: {
        reps: req.body.reps,
        sets: req.body.sets,
      } }, {
      new: true,
      upsert: true,
    }, (err, workout) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workout);
      }
    });
  });

  app.delete('/api/workouts/delete/:name', (req, res) => {
    Workouts.findOneAndRemove({
      name: req.params.name,
    }, (err, workout) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`deleted ${workout}`);
        Workouts.find({}, (err, workouts) => {
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

process.env.NODE_ENV = 'test';
const Workouts = require('../api/models/workout_model');

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Workouts', () => {
  beforeEach((done) => {
    Workouts.remove({}, (err) => {
      done();
    });
  });
  describe('/GET all workouts', () => {
    it('should return all workouts in the DB', (done) => {
      chai.request(app)
        .get('/workouts')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe('/POST workout', () => {
    it('should not post a workout missing required fields', () => {
      const workout = {
        name: 'Bloddy Bag Pipes',
        reps: 2000,
      };
      chai.request(app)
        .post('/workouts/create')
        .send(workout)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('sets');
          res.body.errors.sets.should.have.property('kind').eql('required');
        });
    });
    it('should post a workout when all fields are entered', (done) => {
      const workout = {
        name: 'Bloody Bag Pipes',
        reps: 200,
        sets: 3,
      };

      chai.request(app)
        .post('/workouts/create')
        .send(workout)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/PUT', () => {
    it('should get a specific workout from db and edit the reps field', (done) => {
      const workout = {
        name: 'Rage',
        reps: 1,
        sets: 2,
      };
      const newWorkout = {
        name: 'rage',
        reps: 2,
        sets: 1,
      };

      chai.request(app)
        .post('/workouts/create')
        .send(workout)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('array');
          res.body[0].should.be.a('object');
          res.body[0].should.have.property('reps');
          res.body[0].reps.should.eql(1);
        });
      chai.request(app)
        .put(`/workouts/edit/${workout.name}`)
        .send(newWorkout)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.should.have.property('reps');
          res.body.reps.should.eql(2);
          done();
        });
    });
  });
  describe('/DELETE', () => {
    it('should remove a workout from the db', (done) => {
      const workout = {
        name: 'delete',
        reps: 1,
        sets: 1,
      };
      chai.request(app)
        .post('/workouts/create')
        .send(workout)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
        });
      chai.request(app)
        .delete(`/workouts/delete/${workout.name}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});


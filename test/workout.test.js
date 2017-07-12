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
});


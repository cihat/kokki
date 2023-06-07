import request from 'supertest';

import app from '../src/app';

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Hello World 🌎',
      }, done);
  });
});

describe('GET /ping', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/ping')
      .expect(200, done)
  });
});
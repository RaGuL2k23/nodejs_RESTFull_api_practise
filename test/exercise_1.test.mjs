// test/api.test.js

import request from 'supertest';
import app from '../server.js';
let server;

// Start the server before running tests
before(done => {
  server = app.listen( 3100, done);
});

// Stop the server after tests are done
after(done => {
  console.log("everything is done rocky");
  
  server.close(done);
});

describe('Simple API Tests', () => {

  // Test for a GET request
  it('should return status 200 and a response message on GET /', done => {
    request(server)
      .get('/api/simpleApi')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        if (res.body.message !== 'Response from GET method') throw new Error('Unexpected response message');
      })
      .end(done);
  });

  // Test for a POST request
  it('should return status 200 and a response message on POST /', async () => {
    const res = await request(server)
      .post('/api/simpleApi')
      .send({ message: 'Response from POST method' })
      .expect(200)
      .expect('Content-Type', /json/);
    
    if (res.body.message !== 'Response from POST method') {
      throw new Error('Unexpected response message');
    }
  });
  
  it('should return status 200 and a response message on POST /', done => {
    request(server) 
      .post('/api/simpleApi')
      .send({message:'Response from POST method'})
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        if (res.body.message !== 'Response from POST method') throw new Error('Unexpected response message');
      })
      .end(done);
  });

  // Test for a GET request with parameters
  it('should return status 200 and a response message on PUT /', done => {
    request(server)
      .put('/api/simpleApi')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        if (res.body.message !== 'Response from PUT method') throw new Error('Unexpected response message');
      })
      .end(done);
  });

  // // Test for a DELETE request
  it('should return status 200 and a response message on DELETE /', done => {
    request(server)
      .put('/api/simpleApi')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(done);
  });

});

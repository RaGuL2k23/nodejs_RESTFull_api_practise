import request from 'supertest';
import app from '../server.js'; // Ad// Adjust the path if necessary

var server;
let token

// Start the server before running tests
beforeEach(function (done) {
  server = app.listen(3004, done);
});

// Stop the server after tests are done
afterEach(function (done) {
  server.close(done);
});

describe('User API Tests', function () {

  // Test for user signup (POST)
  it('should create a user and return status 201 on /signup', function (done) {
    request(server)
      .post('/api/users/signup')
      .send({ username: 'testuser', password: 'testpassword' })
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        if (res.body.message !== 'User created successfully') throw new Error('Unexpected response message');
      })
      .end(done);
  });

  // Test for user login (POST)
  it('should return a token and status 200 on /login with valid credentials', function (done) {
    request(server)
      .post('/api/users/login')
      .send({ username: 'testuser', password: 'testpassword' })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        if (!res.body.token) throw new Error('Token is missing');
        token = res.body.token;
      })
      .end(done);
  });


  it('should return status 200 and access protected content with valid token', function (done) {
    request(server)
      .get('/api/users/protected')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        if (res.body.message !== 'Protected content accessed') throw new Error('Unexpected response message');
      })
      .end(done);
  });

  // Test for protected route (GET) without token
  it('should return status 401 on /protected without a token', function (done) {
    request(server)
      .get('/api/users/protected')
      .expect(401)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        if (res.body.message !== 'Unauthorized') throw new Error('Unexpected response message');
      })
      .end(done);
  });

});

const app = require('../../app');
const request = require('supertest');

test('GET /', (done) => {
  request(app).get('/complete/7548/393').expect(200).end(done);
});

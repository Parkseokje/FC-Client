const app = require('../../app');
const request = require('supertest');
var server = request.agent(app);

// training_user_id: 7630
// course_id: 376
// course_list_id: 916

describe('Should get course info', () => {
  test('login', (done) => {
    server
      .post('/login')
      .send({ cell: '01072929757', password: '9757' })
      .expect(302)
      .expect('Location', '/education/current')
      .end(done);
  });

  test('GET /', (done) => {
    server.get('/course/7630/376').expect(200).end(done);
  });

  test('log course start time', (done) => {
    const payload = {
      training_user_id: 7630,
      course_id: 376,
      isrepeat: true
    };

    server.post('/course/log/start').send(payload).expect(200).end(done);
  });

  test('log course end time', (done) => {
    const payload = {
      training_user_id: 7630,
      course_id: 376,
      isrepeat: true
    };

    server.post('/course/log/end').send(payload).expect(200).end(done);
  });

  test('check course', (done) => {
    const payload = {
      training_user_id: 7630,
      course_id: 376
    };

    server.get('/course/check?training_user_id=7630&course_id=376').expect(200).end(done);
  });
});

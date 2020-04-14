const app = require('../../app');
const request = require('supertest');
var server = request.agent(app);

// training_user_id: 7630
// course_id: 376
// course_list_id: 916

describe('Should record session play time', () => {
  test('login', (done) => {
    server
      .post('/login')
      .send({ cell: '01072929757', password: '9757' })
      .expect(302)
      .expect('Location', '/education/current')
      .end(done);
  });

  test('log session start time', (done) => {
    const payload = {
      training_user_id: 7630,
      course_id: 376,
      course_list_id: 916
    };

    server.post('/session/log/starttime').send(payload).expect(200).end(done);
  });

  xtest('log session end time', (done) => {
    const payload = {
      video_id: 577,
      video_duration: 4544.449887
    };

    server.post('/video/log/endtime').send(payload).expect(200).end(done);
  });
});

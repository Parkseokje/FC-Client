const app = require('../../app');
const request = require('supertest');
var server = request.agent(app);

// training_user_id: 7630
// video_id: 577
// played_seconds: 10
// video_duration: 4544.449887
// currenttime: 1017.70143

describe('Should record video play time', () => {
  test('login', (done) => {
    server
      .post('/login')
      .send({ cell: '01072929757', password: '9757' })
      .expect(302)
      .expect('Location', '/education/current')
      .end(done);
  });

  test('log video play time', (done) => {
    const payload = {
      training_user_id: 7630,
      video_id: 577,
      played_seconds: 10,
      video_duration: 4544.449887,
      currenttime: 1017.70143
    };

    server.post('/video/log/playtime').send(payload).expect(200).end(done);
  });

  test('log video end time', (done) => {
    const payload = {
      video_id: 577,
      video_duration: 4544.449887
    };

    server.post('/video/log/endtime').send(payload).expect(200).end(done);
  });
});

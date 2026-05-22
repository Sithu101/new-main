const request = require('supertest');
const app = require('../app'); // app.js ကို ခေါ်သုံးခြင်း

describe('GET /users', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
  });
});
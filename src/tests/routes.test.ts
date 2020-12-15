import { doesNotMatch } from 'assert';
import request from 'supertest';
import app from '../index';

describe('Home endpoint', () => {
  it('should return dict', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ hello: 'world' });
  });
});

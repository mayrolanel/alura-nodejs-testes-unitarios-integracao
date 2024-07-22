import {
  describe, it, beforeEach, afterEach,
  expect,
} from '@jest/globals';
import request from 'supertest';
import app from '../../../app.js';

describe('Editoras', () => {
  let server;

  beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
  });

  afterEach(() => {
    server.close();
  });

  it('deve retornar lista de editoras', async () => {
    const response = await request(app).get('/editoras');

    expect(response.status).toEqual(200);
  });
});

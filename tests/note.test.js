const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app'); // Adjust the path to your app
require('dotenv').config();

describe('Note API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new note', async () => {
    const res = await request(app) // Use the app instance directly
      .post('/api/notes')
      .send({
        title: 'Test Note',
        body: 'This is a test note.'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toEqual('Test Note');
    expect(res.body.body).toEqual('This is a test note.');
  });

  // Additional test cases
});

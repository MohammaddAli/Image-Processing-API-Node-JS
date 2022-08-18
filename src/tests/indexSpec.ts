//Testing functions and endpoints

import supertest from 'supertest';
import app from '../index';
import resizeImg from '../imgResizingFunc';

const width = 20;
const height = 20;
//testing tha resized image data to see if its valid data
it('takes image name,width and hieght then return a new path of resized image', async () => {
  const path = await resizeImg('fjord', width, height);
  expect(path).toEqual(`./images/thumbnail/fjord-${width}-${height}.jpg`);
});

const request = supertest(app);
//testing image endpoint using superTest
describe('Test the endpoint response', () => {
  it('get request for the api endpoint', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(200);
  });
});

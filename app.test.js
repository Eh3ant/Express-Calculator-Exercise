const request = require('supertest');
const app = require('./app');

describe('API Endpoints', () => {
    test('GET /mean should return the mean of numbers', async () => {
        const response = await request(app).get('/mean?nums=1,2,3,4');
        expect(response.status).toBe(200);
        expect(response.body.response).toEqual({ operation: 'mean', value: 2.5 });
    });

    test('GET /median should return the median of numbers', async () => {
        const response = await request(app).get('/median?nums=1,2,3,4,5');
        expect(response.status).toBe(200);
        expect(response.body.response).toEqual({ operation: 'median', value: 3 });
    });

    test('GET /mode should return the mode of numbers', async () => {
        const response = await request(app).get('/mode?nums=1,2,2,3,4');
        expect(response.status).toBe(200);
        expect(response.body.response).toEqual({ operation: 'mode', value: 2 });
    });

    test('GET /mean with invalid input should return 400', async () => {
        const response = await request(app).get('/mean?nums=1,foo,3');
        expect(response.status).toBe(400);
        expect(response.body.error.message).toMatch(/foo is not a number/);
    });

    test('GET /mean without nums should return 400', async () => {
        const response = await request(app).get('/mean');
        expect(response.status).toBe(400);
        expect(response.body.error.message).toMatch(/Nums are required/);
    });
});



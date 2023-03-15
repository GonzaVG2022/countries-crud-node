
const request = require('supertest');
const app = require("../app");

test("GET / continent should retur 200 code", async() => {
    const res = await request(app).get('/api/v1/continents');
    expect(res.statusCode).toBe(200);
   
});




const request = require('supertest');
const app = require('../app');

let cityId;

test("GET /cities should return 200 code", async() => { 
    const res = await request(app).get('/api/v1/cities');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
 });
 test("POST /cinty should retur 201 code", async() => {
    const newCity = {
        name: 'Lujan',
        area:17,
        isCapital: true
    }
    const res = await request( app )
    .post('/api/v1/cities')
    .send(newCity);
    cityId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(newCity.name);
});
test("GET /cities/:id shoud retur 200 code", async() => {
    const res = await request(app).get(`/api/v1/cities/${cityId}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Lujan');
});

test("PUT /cities/:id shoud retur 200 code", async() => {
    const body = {
        name:'Rivadavia'
    }
    const res = await request(app)
    .put(`/api/v1/cities/${cityId}`)
    .send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
})



test("DELETE /cities/:id should retur 204 code", async() => {
    const res = await request(app).delete(`/api/v1/cities/${cityId}`);
    
    expect(res.status).toBe(204);

})



import 'babel-polyfill'
const request = require('supertest');
const app = require('../index')
describe('Server Test', () => {
    //from https://www.npmjs.com/package/supertest
    it('create request', async(done) => {
      const response = await request(app).get("/url-addition/*");
        // const res = await request(app).get('/api').send({status:'ok'})
        expect(response.statusCode).toEqual(200)
        done()
       
      })
    
})

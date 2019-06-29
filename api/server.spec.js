const server = require('./server.js')
const request = require('supertest')
//db config

describe('server.js', () => {
    it('should be set on test env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /', () => {
        it('should return status code of 200', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
        })
    })


})
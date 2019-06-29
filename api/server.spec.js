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

    describe('Get/api/games', () => {
        it('should retrieve a list of all games', async () => {
            const res = await request(server).get('/api/games')
            expect(res.status).toBe(200)
            expect(res.type).toBe('application/json') 
            expect(res.body).toHaveLength(3)
        })
        
        //clear db to test this
        xit('should return [] if empty', async () => {
            const res = await request(server).get('/api/games')
            expect(res.body).toEqual([])
        })
    })


})
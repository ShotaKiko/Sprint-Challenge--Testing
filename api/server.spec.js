const server = require('./server.js')
const request = require('supertest')
const db = require('../data/dbConfig.js')

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
            //seed db --env testin for this expect
            //expect(res.body).toHaveLength(3)
        })
        
        //clear db to test this
        xit('should return [] if empty', async () => {
            const res = await request(server).get('/api/games')
            expect(res.body).toEqual([])
        })
    })

    describe('/post/api/games', () => {
    //    beforeEach( async () => {
    //             await db('games').truncate()
    //     })
        afterEach( async () => {
            await db('games').truncate()
    })
        
        it('should add a new game', async() => {
            const newGame = {
                title: "Cyberpunk 2077",
                genre: "RPG",
                releaseYear: 2020
            }

            
            const res = await request(server).post('/api/games').send(newGame)
            const gamesList =await db('games')
            expect(res.status).toBe(201)
            expect(gamesList[0].title).toBe(newGame.title)
            expect(res.type).toBe('application/json')
        })
    })


})
const db = require('../data/dbConfig.js')
const Games = require('./games-model.js')

describe('the games model ()s', () => {
    
    describe('fetchGames()', () => {
        //clears db
        beforeEach( async () => {
            await db('games').truncate()
        })
        //npx knex seed:run --env testing    before testing this
        //other wise comparing to empty table
        //seed contains 3 games
        xit('should return a list of all games', async () => {
            const list = await Games.fetchGames()

            const gamesList = await  db('games')
            expect(gamesList).toEqual(list)
            expect(list).toHaveLength(3)
        })
    })

    describe('addGame()', () => {
        // clears test db before each
        beforeEach( async () => {
            await db('games').truncate()
        })
        
        it('should add a game to db', async () => {
            const newGame = {
                id: 1,
                title: 'Apex Legends',
                genre: 'Battle Royale',
                releaseYear: 2019
            }
            await Games.addGame(newGame)
            const gamesList = await db('games')

            expect(gamesList[0].title).toBe(newGame.title)
            expect(gamesList).toHaveLength(1)
        })
    })
    
})
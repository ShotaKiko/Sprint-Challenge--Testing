const db = require('../data/dbConfig.js')
const Games = require('./games-model.js')

describe('the games model ()s', () => {
    
    describe('fetchGames()', () => {
        //clears db
        afterEach( async () => {
            await db('games').truncate()
        })
        beforeEach( async () => {
            await db('games').truncate()
        })


        it('should return a list of all games', async () => {
            const newGame11 = {
                title:"Overcooked",
                genre:"indie"
            }

            await db('games').insert(newGame11)

            const list = await Games.fetchGames()

            const gamesList = await db('games')
            expect(gamesList).toEqual(list)
            expect(gamesList[0].title).toEqual(list[0].title)
            expect(gamesList[0].genre).toEqual(list[0].genre)
            expect(list).toHaveLength(1)
            //npx knex seed:run --env testing    before testing this
            //other wise comparing to table of 1 item
            //seed contains 3 games
            
            //expect(list).toHaveLength(4)
        })
    })

    describe('addGame()', () => {
        afterEach( async () => {
            await db('games').truncate()
        })

        it('should add a game to db', async () => {
            const newGame = {
                title: 'Apex Legends',
                genre: 'Battle Royale',
                releaseYear: 2019
            }
            await Games.addGame(newGame)
            const gamesList = await db('games')

            expect(gamesList).toHaveLength(1)
            expect(gamesList[0].title).toBe(newGame.title)
            //expect(gamesList).toHaveLength(1)
        })

        describe('delete game', () => {
            afterEach( async () => {
                await db('games').truncate()
            })
          
            it('should remove the game from the list', async() => {
                  afterEach( async () => {
                await db('games').truncate()
            })
            const newGame1 = {
                    title: 'For Honor',
                    genre: 'Fighting',
                    releaseYear: 2017
                }
                const newGame2 = {
                    title: 'Fortnite',
                    genre: 'Battle Royale',
                    releaseYear: 2017
                }

                await db('games').insert(newGame1)
                await db('games').insert(newGame2)

                await Games.removeGame(1)
                
                const gamesList = await db('games')
                expect(gamesList).toHaveLength(1)
            })
        })
    })
    
})
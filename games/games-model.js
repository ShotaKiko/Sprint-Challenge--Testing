const db = require('../data/dbConfig.js')

module.exports = {
    fetchGames,
    addGame,
    removeGame
}

async function fetchGames() {
    return await db('games')
}

async function addGame(newGame) {
    const [id] = await db('games').insert(newGame)
    return db('games').where({ id }).first()
}

//Stretch
async function removeGame() {
    return null
}
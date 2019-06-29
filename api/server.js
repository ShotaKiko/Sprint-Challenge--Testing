const express = require('express')
const Games = require('../games/games-model.js')

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ message:"Server is live"})
})

server.get('/api/games', async(req, res) => {
    try{
        const gamesList = await Games.fetchGames()
        res.status(200).json(gamesList)
    } catch(err) {
        res.status(500).json({ message:"Error retrieving the list of games." })
    }
})

module.exports = server
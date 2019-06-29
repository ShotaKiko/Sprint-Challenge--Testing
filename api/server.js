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

server.post('/api/games', async (req, res) => {
    const newGame = req.body

    try{
        const addedGame = await Games.addGame(newGame)
        res.status(201).json(addedGame)
    } catch(err) {
        res.status(500).json({ message:"The guest could not be added." })
    }
})

module.exports = server
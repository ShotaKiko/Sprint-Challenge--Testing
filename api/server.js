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

server.post('/api/games', async(req, res) => {
   const newGame = req.body
    if(req.body.title && req.body.genre){
        try{
            await Games.addGame(newGame)
            res.status(201).json({message:`${req.body.title} has been added to the list.` })            
        } catch(err) {
            res.status(500).json({ message:"Error adding game." })
        }
    } else{
        res.status(422).json({ message:"missing info" })
    }
})

module.exports = server
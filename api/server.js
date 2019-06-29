const express = require('express')
//const Games = require(//model needed

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ message:"Server is live"})
})

module.exports = server
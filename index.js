require('dotenv').config()

const server = require('./api/server.js')

const port = process.env.PORT || 6492
server.listen(port, () => console.log(`\n** Server is up on port ${port} **\n`))
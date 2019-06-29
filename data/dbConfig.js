const knex = require('knex')
const config = require('../knexfile.js')

const useEnvironment = process.env.DB_ENV || 'development'

module.exports = knex(config[useEnvironment])
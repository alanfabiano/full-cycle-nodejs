const config = require('./config.js')
const mysql = require('mysql-await')
const faker = require('faker')
const connection = mysql.createConnection(config.database)

module.exports = {
  async index () {
    return await connection.awaitQuery(`SELECT * FROM people`)
  },
  async store () {
    const fullName = faker.name.firstName()+' '+faker.name.lastName()
    connection.query(`INSERT INTO people(name) values('${fullName.replace(/'/g, "\\'")}')`)
  },
}

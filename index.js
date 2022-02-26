const express = require('express')
const app = express()
const port = 3000
const peopleService = require('./PeopleService.js')

app.get('/', async (req, res) => {

  await peopleService.store()
  const people = await peopleService.index()

  res.send(`
    <h1>Full Cycle Rocks!</h1>`+
    people.map((person) => `<li>${person.name}</li>`).join('\n')
  )
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

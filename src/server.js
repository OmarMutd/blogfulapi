const app = require('./app')
const knex = require('knex')
app.set('db', db)

const { PORT, DB_URL } = require('./config')

  const db = knex({
      client: 'pg',
      connection: DB_URL,
    })

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
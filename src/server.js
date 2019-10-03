 const knex = require('knex')
  const app = require('./app')

  const { PORT, DATABASE_URL } = require('./config')

  const db = knex({
    client: 'pg',
    connection: DATABASE_URL,
  })

app.set('db', db)

/*
app.listen(postgratorconfig.port, () => {
  console.log(`Server listening at http://localhost:${postgratorconfig.port}`)
})*/

app.listen(PORT, () => {
  console.log("DATABASE_URL",DATABASE_URL)
  console.log(`Server listening at http://localhost:${PORT}`)
})
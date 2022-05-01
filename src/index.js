import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { connectDB } from './db'
import { schema } from './graphql/schema'

connectDB()
const app = express()

const root = { hello: () => 'Hellor World!' }

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
)

app.listen(4000, () => console.log('Ir a http://localhost:4000/graphql'))

import express from 'express'
import { dbconnection } from './DataBase/db.connection.js'
import bookRouter from './src/modules/book/book.router.js'
import authorRouter from './src/modules/author/author.router.js'
const app = express()
const port = 3000
app.use(express.json())

app.use('/books', bookRouter)
app.use('/autors', authorRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const routes = require('./routes')
const db = require('./database/db')
const cors = require('cors')

const app = express()                                       
db.connect()
app.use(cors())

app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
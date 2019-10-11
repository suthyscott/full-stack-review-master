require('dotenv').config()
const express = require('express')
const massive = require('massive')

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, console.log(`Take us to warp ${SERVER_PORT}!`))
        console.log('db connected')
    })
    .catch(err => console.log(err))


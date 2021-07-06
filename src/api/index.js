const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

var axios = require("axios").default
app.use(express.json())



app.listen(3000)

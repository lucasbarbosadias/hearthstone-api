import info from './info.js'
import getByType from './getByType.js'
import getByClass from './getByClass.js'
import getByFaction from './getByFaction.js'
import getByQuality from './getByQuality.js'

import express from 'express'
const app = express()

import cors from 'cors'
app.use(cors())
app.use(express.json())

app.use(info)
app.use(getByType)
app.use(getByClass)
app.use(getByFaction)
app.use(getByQuality)

app.listen(3000)

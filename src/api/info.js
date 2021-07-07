
import express from 'express'
const app = express()

import cors from 'cors'
app.use(cors())

import axios from 'axios'
app.use(express.json())

var options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    headers: {
      'x-rapidapi-key': 'ee008ec94emshdf37717471db23bp11b30cjsne9884bf668d6',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
}

app.get('/info', function (req, res) {
  
    axios.request(options).then(function (response) {
        res.send(response.data)
    }).catch(function (error) {
        console.error(error)
    })
    
})

export default app

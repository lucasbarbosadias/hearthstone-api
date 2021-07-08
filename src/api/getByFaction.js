import express from 'express'
const app = express()

import cors from 'cors'
app.use(cors())

import axios from 'axios'

const optionsFaction = (op) => {
    return {
        method: 'GET',
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/${op}`,
        headers: {
            'x-rapidapi-key': 'ee008ec94emshdf37717471db23bp11b30cjsne9884bf668d6',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    }
}

app.get('/faction/:op/:quant', function (req, res) {

    const { op, quant } = req.params
  
    axios.request(optionsFaction(op)).then(function (response) {
        res.send(response.data.splice(0, quant))
    }).catch(function (error) {
        console.error(error)
    })
    
})

export default app
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

var axios = require("axios").default
app.use(express.json())

const optionsType = (op) => {
    return {
        method: 'GET',
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/${op}`,//aqui eu pego o value do select no html
        headers: {
            'x-rapidapi-key': 'ee008ec94emshdf37717471db23bp11b30cjsne9884bf668d6',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    }
}

app.get('/type/:op', function (req, res) {
  
    const { op } = req.params

    axios.request(optionsType(op)).then(function (response) {
        res.send(response.data)
    }).catch(function (error) {
        console.error(error)
    })
    
})

app.listen(3030)

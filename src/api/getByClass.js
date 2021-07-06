const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

var axios = require("axios").default
app.use(express.json())

const optionsClass = (op) => {
    return {
        method: 'GET',
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${op}`,
        headers: {
            'x-rapidapi-key': 'ee008ec94emshdf37717471db23bp11b30cjsne9884bf668d6',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    }
}

app.get('/class/:op', function (req, res) {
  
    const { op } = req.params

    axios.request(optionsClass(op)).then(function (response) {
        res.send(response.data)
    }).catch(function (error) {
        console.error(error)
    })
    
})

app.listen(3030)

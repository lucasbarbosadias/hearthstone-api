const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

var axios = require("axios").default
app.use(express.json())

var optionsType = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/weapon',
    headers: {
        'x-rapidapi-key': 'ee008ec94emshdf37717471db23bp11b30cjsne9884bf668d6',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
}

var optionsClass = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/hunter',
    headers: {
      'x-rapidapi-key': 'ee008ec94emshdf37717471db23bp11b30cjsne9884bf668d6',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
}

var optionsFaction = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/alliance',
    headers: {
        'x-rapidapi-key': 'ee008ec94emshdf37717471db23bp11b30cjsne9884bf668d6',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
}

var optionsQuality = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/free',
    headers: {
      'x-rapidapi-key': 'ee008ec94emshdf37717471db23bp11b30cjsne9884bf668d6',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
}

app.get('/type', function (req, res) {
  
    axios.request(optionsType).then(function (response) {
        res.send(response.data)
    }).catch(function (error) {
        console.error(error)
    })
    
})

app.get('/class', function (req, res) {
  
    axios.request(optionsClass).then(function (response) {
        res.send(response.data)
    }).catch(function (error) {
        console.error(error)
    })
    
})

app.get('/faction', function (req, res) {
  
    axios.request(optionsFaction).then(function (response) {
        res.send(response.data)
    }).catch(function (error) {
        console.error(error)
    })
    
})

app.get('/quality', function (req, res) {
  
    axios.request(optionsQuality).then(function (response) {
        res.send(response.data)
    }).catch(function (error) {
        console.error(error)
    })
    
})

app.listen(3000)

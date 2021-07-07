const typeNav = document.querySelector('#type')
const classNav = document.querySelector('#class')
const factionNav = document.querySelector('#faction')
const qualitieNav = document.querySelector('#quality')
const cardsDiv = document.querySelector('#cards')
const quantNav = document.querySelector('#quant')
let quantCards = 15
let lastSelect = ''

typeNav.addEventListener('change', function() {
    factoryCards('type', this.value, quantCards)
})
classNav.addEventListener('change', function() {
    factoryCards('class', this.value, quantCards)
})
factionNav.addEventListener('change', function() {
    factoryCards('faction', this.value, quantCards)
})
qualitieNav.addEventListener('change', function() {
    factoryCards('quality', this.value, quantCards)
})
quantNav.addEventListener('change', function() {
    setNumberCards(this.value)
    reloadCards()
})

const selectOpNull = (filter) => {
    const selects = ["type","class","faction","quality"]
    selects.forEach((select) =>{
        if(select != filter) {
            document.getElementById(select).selectedIndex = 0;
        }
    })
}

const factorySelect = (array, div) => {
    array.map((item) => {
      div.innerHTML += `<option class="opt" value="${item}">${item}</option>`
    })
}

const setNumberCards = (num) => quantCards = num

const setLastSelect = (select) => lastSelect = select

const reloadCards = () => {
    if (lastSelect) {
        const { value } = document.getElementById(lastSelect)
        factoryCards(lastSelect, value, quantCards)
    }
}

const factoryCards = async (filter, value, quant) => {
    setLastSelect(filter)
    cardsDiv.innerHTML = ''
    selectOpNull(filter)
    let contentFilter = ''
    const list = await fetch(`http://localhost:3000/${filter}/${value.toLowerCase()}/${quant}`)
    const responseFilter = await list.json()
    const limitResponse = responseFilter      
    limitResponse.map((item) => {     
        if (item.img) {
            contentFilter = `
                <div class="card">
                    <img src="${item.img}" class="card__img" alt="Card Image">
                </div>
            `
            cardsDiv.innerHTML += contentFilter
        } else {
            contentFilter = `
                <div class="card--noImg">
                    <p class="card__font">${item.name}</p>
                </div>
            `
            cardsDiv.innerHTML += contentFilter
        }
    })
}

const getAllData = async () => {
  const fetchData = await fetch ('http://localhost:3000/info')
  const dataJson = await fetchData.json()
  const { types, classes, factions, qualities } = dataJson
  
  factorySelect(types, typeNav)
  factorySelect(classes, classNav)
  factorySelect(factions, factionNav)
  factorySelect(qualities, qualitieNav)
}

getAllData()
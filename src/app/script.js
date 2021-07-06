const typeNav = document.querySelector('#type')
const classNav = document.querySelector('#class')
const factionNav = document.querySelector('#faction')
const qualitieNav = document.querySelector('#qualitie')
const cardsDiv = document.querySelector('#cards')

$(typeNav).on('change', function() {
	console.log(this.value)
    factoryCards('type', this.value)
})
$(classNav).on('change', function() {
	console.log(this.value)
    factoryCards('class', this.value)
})
$(factionNav).on('change', function() {
	console.log(this.value)
    factoryCards('faction', this.value)
})
$(qualitieNav).on('change', function() {
	console.log(this.value)
    factoryCards('quality', this.value)
})

const factorySelect = (array, div) => {
    array.map((item) => {
      div.innerHTML += `<option value="${item}">${item}</option>`
      //console.log(`${div.name}Select`)
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

const factoryCards = async (filter, value) => {
    cardsDiv.innerHTML = ''
    const list = await fetch(`http://localhost:3030/${filter}/${value.toLowerCase()}`)
    const responseFilter = await list.json()
    responseFilter.map((item) => {
        console.log(item)
        // if (item.img) {
        //     const contentFilter = `
        //         <div class="card">
        //             <img src="${item.img}" class="card__img" alt="Card Image">
        //         </div>
        //     `
        //     cardsDiv.innerHTML += contentFilter
        // }
    })
}

getAllData()
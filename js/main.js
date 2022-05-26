function logoEl(){
    var headerLogoEl = document.createElement('header')
    headerLogoEl.className = "container  d-flex justify-content-center"
    let logEl = document.createElement('img')
    logEl.className = "logo-img d-block"
    logEl.src = './img/logo.png'
    logEl.style.marginTop = "50px"
    let heartEl = document.createElement('img')
    heartEl.src = './img/heart.png'
    heartEl.className = " heart__img"
    heartEl.style.width = "50px"
    heartEl.style.height = "50px"
    heartEl.style.marginTop = "50px"
    headerLogoEl.appendChild(logEl)
    headerLogoEl.appendChild(heartEl)
    return headerLogoEl
}
document.body.appendChild(logoEl())

function formElements(){
    var formSection = document.createElement('section')
    formSection.className = "container d-flex"
    formSection.style.marginTop = "70px"
    formSection.style.marginLeft = "398px"
    var formEl = document.createElement('form')
    formEl.className = "d-flex"
    var selectEl = document.createElement('select')
    selectEl.className = " form-select border border-2 border-dark "
    selectEl.style.width = "260px"
    selectEl.style.height = "60px"
    selectEl.style.borderRadius = "15px"
    var optionEl = document.createElement('option')
    optionEl.className = "text-center"
    optionEl.textContent = "Gross"
    selectEl.appendChild(optionEl)
    formEl.appendChild(selectEl)
    var searchEl = document.createElement('input')
    searchEl.setAttribute( 'type' , 'search')
    searchEl.setAttribute( 'placeholder' , 'Search')
    searchEl.className = " form-search  border border-2 border-dark p-3 "
    searchEl.style.width = "300px"
    searchEl.style.height = "60px"
    searchEl.style.borderRadius = "15px"
    searchEl.style.marginLeft = "35px"
    var searchImg = document.createElement('img')
    searchImg.src = './img/search.svg'
    searchImg.className = " search__img"
    formEl.appendChild(searchImg)
    formEl.appendChild(searchEl)

    var selectElAz = document.createElement('select')
    selectElAz.className = " form-select border border-2 border-dark "
    selectElAz.style.width = "260px"
    selectElAz.style.height = "60px"
    selectElAz.style.borderRadius = "15px"
    var optionElAz = document.createElement('option')
    optionElAz.className = "text-center"
    optionElAz.textContent = "Aa-Zz"
    selectElAz.style.marginLeft = "35px"
    selectElAz.appendChild(optionElAz)
    formEl.appendChild(selectElAz)

    var buttonEl = document.createElement('button')
    buttonEl.className = "btn btn-light btn-outline-dark"
    buttonEl.textContent = "Button"
    buttonEl.style.width = "200px"
    buttonEl.style.height = "60px"
    buttonEl.style.borderRadius = "15px"
    buttonEl.style.marginLeft = "35px"
    formEl.appendChild(buttonEl)
    formSection.appendChild(formEl)
    return formSection

}
document.body.appendChild(formElements())



// {/* <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> */}

function createLayout(){
    let containerEl = document.createElement('div')
    containerEl.className = 'container'

    containerEl.appendChild(renderPokemons())

    document.body.appendChild(containerEl)
}

createLayout()

function createPokemonEl(pokemons){
    // Card Container
    let cardContainerEl = document.createElement("div")
    cardContainerEl.className = "card p-1 mt-4 me-3 border border-dark"
    cardContainerEl.style.width = '307px'
    cardContainerEl.style.height = '450px'
    cardContainerEl.style.borderRadius = '20px'

    // Card Image
    let cardImgEl = document.createElement('img')
    cardImgEl.src = pokemons.img
   
    cardImgEl.className = "card-img-top movie__img d-block"
    cardImgEl.setAttribute('alt', pokemons.candy)

    cardContainerEl.appendChild(cardImgEl)

    let lineEl = document.createElement('div')
    lineEl.className = " bg-dark"
    lineEl.style.height = "2px"
    cardContainerEl.appendChild(lineEl)
    // Card body
    let cardBodyEl = document.createElement('div')
    cardBodyEl.className = "p-3"
    cardContainerEl.appendChild(cardBodyEl)
    // Card Title
    let cardTitleEl = document.createElement('h5')
    cardTitleEl.className = 'card-title fs-4 mb-0'
    cardTitleEl.textContent = pokemons.name
    cardBodyEl.appendChild(cardTitleEl)

    // Card description
    let cardDescEl = document.createElement('p')
    cardDescEl.className = 'card-text fs-6'
    cardDescEl.textContent = pokemons.type
    cardBodyEl.appendChild(cardDescEl)

    let cardIconEl = document.createElement('img')
    cardIconEl.className = "card__icon"
    cardIconEl.src = './img/heart.svg'
    cardBodyEl.appendChild(cardIconEl)

    let cardWeightEl = document.createElement('p')
    cardWeightEl.className = 'card-text mt-0 fs-5'
    cardWeightEl.textContent = pokemons.weight
    cardBodyEl.appendChild(cardWeightEl)

    return cardContainerEl
}

function renderPokemons(){
    let rowEl = document.createElement('div')
    rowEl.className = 'row justify-content-center mt-4 g-2'

    for(let i=0; i < pokemons.length; i++){
        let colEl = document.createElement('div')
        colEl.className = 'col text-left col-lg-3 col-md-6'

        let cardEl = createPokemonEl(pokemons[i]);
        colEl.appendChild(cardEl)
        rowEl.appendChild(colEl)
    }
    return rowEl
}
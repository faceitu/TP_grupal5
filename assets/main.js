const finding = document.getElementById('container_recomndation');
const categorie = document.querySelector('.container_categories');
const mostPopular = document.getElementById('container_most_popular');
const btnCall = document.querySelectorAll('btn_card');
const tituloMostpopular = document.getElementById('title_most')

const rendersection = menu => {
    return `

        <div class = "card card_recomendation" >
            <img  class = "img" src = "${menu.img}" >
            <div class = "text_card" >
                <span class = "tittle_card" > ${menu.name} </span> 
                <p class = "subtitle_card" >${menu.data}</p> 
                <span class="price_card"> ${menu.precio} </span> 
            </div> 
            <a href class= "btn btn_card" > Agregar </a> 
        </div> `
};

const selectCategories = (e) => {
    tag = e.target.getAttribute('data-id')
    menuPorCategoria = menu.filter(categoria => categoria.cat === tag);
    if (menuPorCategoria.length > 0) {
        console.log(tituloMostpopular)
        tituloMostpopular.textContent = tag
        mostPopular.innerHTML = menuPorCategoria.map(prod => renderPopular(prod)).join('')
    } else {
        tituloMostpopular.textContent = ""
        mostPopular.innerHTML = renderError()
        setTimeout(() => {
            mostPopular.innerHTML = recomendada.map(prod => renderPopular(prod)).join('')
        }, 5000);
    }
}

const renderError = () => {
    return `
    <div class = "card card_most_popular" >
   
    
             <h1>Disculpe, no contamos con este producto momentaneamente</h1>
       
   
    </div>
   
    `
}

const renderCategories = cat => {
    categorie.addEventListener('click', selectCategories)
    return `<div class="card card_categories" data-id = "${cat.name}">
                <!-- Template para JS Categorias -->
                <div class="icon_img_card">
                        <img class="img_icon icon_categories" data-id = "${cat.name}" src=${cat.img} alt="">
                </div>
                <img class="img_icon icon_blur" src=${cat.img} alt="">
                <p class="subtitle_card subtitle_categories" data-id = "${cat.name}">${cat.name}</p>
                <span class="line_categories"></span>
            </div>
    `
};

const renderPopular = (prod) => {
    return `
    <div class = "card card_most_popular" >
    <img class = "img_popular" src="${prod.img}" alt="">
    <div class="container_text_popular">
        <div class="text_card">
            <span class="tittle_card">${prod.name} </span>
            <p class="subtitle_card"> ${prod.data}</p>
            <span class="price_card"> ${prod.precio}</span>
        </div>
        <a href class="btn btn_card"> Agregar </a>
    </div>
    </div>
     `
}


const renderPage = () => {
    populars = menu.filter(prod => prod.popular === true);
    recomendada = menu.filter(prod => prod.recomendada === true);
    finding.innerHTML = populars.map(prod => rendersection(prod)).join('')
    categorie.innerHTML = categories.map(cat => renderCategories(cat)).join('')
    mostPopular.innerHTML = recomendada.map(prod => renderPopular(prod)).join('')

}

const init = () => {
    window.addEventListener('DOMContentLoaded', renderPage);
}


init()
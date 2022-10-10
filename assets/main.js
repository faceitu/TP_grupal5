const finding = document.getElementById('container_recomndation');
const categorie = document.querySelector('.container_categories');
const mostPopular = document.getElementById('container_most_popular');
// const btn = document.querySelector('.btn_card')
// const popular = document.querySelector('.card_most_popular')
// const addBtn = document.querySelector('.section recomendation')



const rendersection = menu => {
    return `

        <div class = "card card_recomendation" >
             <img  class = "img" src = "${menu.img}" >
             <div class = "text_card" >
                 <span class = "tittle_card" > ${menu.name} </span> 
                 <p class = "subtitle_card" >${menu.data}</p> 
                 <span class="price_card"> ${menu.precio} </span> 
            </div> 
            <a href class = "btn btn_card" > Agregar </a> 
        </div> `
};

const renderCategories = cat => {

    return `<div class="card card_categories">
                <!-- Template para JS Categorias -->
                <div class="icon_img_card">
                        <img class="img_icon icon_categories" src=${cat.img} alt="">
                </div>
                 <img class="img_icon icon_blur" src=${cat.img} alt="">
                 <p class="subtitle_card subtitle_categories">${cat.name}</p>
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
        <div class="btn btn_card"> Agregar </div>
    </div>
    </div>
     `
}


const renderPage = () => {
    populars = menu.filter(prod => prod.popular === true);

    finding.innerHTML = populars.map(prod => rendersection(prod)).join('')
    categorie.innerHTML = categories.map(cat => renderCategories(cat)).join('')
    mostPopular.innerHTML = populars.map(prod => renderPopular(prod)).join('')

}




// loadEventListenrs()
// function loadEventListenrs() {
//     addBtn.addEventListener('click', addProduct);
// }
// function addProduct(e) {
//     e.preventDefault();
//     if (e.target.classList.contains('btn')){
//         console.log(e.target)
//     }
// }

const init = () => {
    window.addEventListener('DOMContentLoaded', renderPage);

}


init()
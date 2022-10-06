const finding = document.getElementById('container_recomndation')
const categorie = document.querySelector('.container_categories')


const rendersection = menu => {
    return `<div class = "card card_recomendation" >
        <img src = "${menu.img}" >
        <div class = "text_card" >
            <span class = "tittle_card" > ${menu.name} </span> 
            <p class = "subtitle_card" > La mas completa</p> 
            <span class="price_card"> ${menu.precio} </span> 
            </div> 
            <div class = "btn btn_card" > Agregar </div> 
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
}



const renderPage = () => {
    finding.innerHTML = findings.map(prod => rendersection(prod)).join('')
    categorie.innerHTML = categories.map(cat => renderCategories(cat)).join('')
}




const init = () => {
    window.addEventListener('DOMContentLoaded', renderPage);

}


init()
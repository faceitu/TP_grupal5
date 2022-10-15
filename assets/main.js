const finding = document.getElementById('container_recomendation');
const categorie = document.querySelector('.container_categories');
const mostPopular = document.getElementById('container_most_popular');
const btnCall = document.querySelectorAll('btn_card');
const tituloMostpopular = document.getElementById('title_most')
const cantProductos = document.querySelector('.counter_cart')


/* Carrito de compras */
const overlay = document.querySelector('.overlay');
const cartMenu = document.querySelector('.cart');
const btnClose = document.querySelector('.btn_close')
const cartBtn = document.querySelector('.cart_container');


const rendersection = menu => {
    return `
        <div class = "card card_recomendation" >
            <img  class = "img" src = "${menu.img}" >
            <div class = "text_card" >
                <span class = "tittle_card" > ${menu.name} </span> 
                <p class = "subtitle_card" >${menu.data}</p> 
                <span class="price_card"> ${menu.precio} </span> 
            </div> 
            <button class="btn btn_card" id= "btn_add" data-id = ${menu.id} >Agregar</button>
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

    }
}

const renderError = () => {
    return `
    <div class = "product_not_found" >
        <i class="icon_not_found fas fa-exclamation-triangle"></i>
        <h2 class="text_not_found">Disculpe, no contamos con este producto momentaneamente</h2>
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
        <button class="btn btn_card" id= "btn_add" data-id = ${prod.id} >Agregar</button>
    </div>
    </div>
     `
}

const addCarrito = (e) => {

    if (e.target.nodeName === "BUTTON") {
        tag = e.target.getAttribute('data-id')
        const producto = menu.find(item => item.id === Number(tag))
        carrito = [...carrito, producto]
        console.log(carrito)
        cantProductos.textContent = carrito.length
    } else {
        return
    }
}





const renderPage = () => {
    mostPopular.addEventListener('click', addCarrito)
    finding.addEventListener('click', addCarrito)
    populars = menu.filter(prod => prod.popular === true);
    recomendada = menu.filter(prod => prod.recomendada === true);
    finding.innerHTML = populars.map(prod => rendersection(prod)).join('')
    categorie.innerHTML = categories.map(cat => renderCategories(cat)).join('')
    mostPopular.innerHTML = recomendada.map(prod => renderPopular(prod)).join('')

}
const renderCompra = (menu) => {
    console.log(menu)
    return `<div class = "card card_recomendation" >
             <img  class = "img" src = "${menu.img}" >
            <div class = "text_card" >
                <span class = "tittle_card" > ${menu.name} </span> 
                <p class = "subtitle_card" >${menu.data}</p> 
                <span class="price_card"> ${menu.precio} </span> 
            </div> 
            </div> 
            `
}

/*CARRITO FUNCIONES*/
const toggleCart = () => {
    cartMenu.classList.remove('hidden');
    cartMenu.classList.toggle('open_cart');
    overlay.classList.toggle('show_overlay');
    const sellCart = document.getElementById('sell_cart')

    console.log(sellCart)
    sellCart.innerHTML = carrito.map(prod =>
        renderCompra(prod)).join('')

}



const closeCart = () => {
    cartMenu.classList.remove('open_cart');
    overlay.classList.remove('show_overlay');
};

const closeOnScroll = () => {
    if (!cartMenu.classList.contains('open_cart'))
        return;

    cartMenu.classList.remove('open_cart');
    overlay.classList.remove('show_overlay');
};

const init = () => {
    window.addEventListener('DOMContentLoaded', renderPage);
    cartBtn.addEventListener('click', toggleCart);
    btnClose.addEventListener('click', closeCart);
    window.addEventListener('scroll', closeOnScroll);
}


init()
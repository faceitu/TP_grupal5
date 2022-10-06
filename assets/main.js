const reco = document.getElementById('container_recomndation')



const rendersection = menu => {

    return `<div class = "card" >
        <img src = "${menu.img}" >
        <div class = "text_card" >
            <span class = "tittle_card" > Bennaziana </span> 
            <p class = "data_card" > La mas completa</p> 
            <span > $ 3650 </span> 
            </div> 
            <div class = "btn_card" > Agregar </div> 
        </div> `
};

const renderPage = () => {
    reco.innerHTML = recomenda.map(prod => rendersection(prod)).join('')

}




const init = () => {
    window.addEventListener('DOMContentLoaded', renderPage);

}


init()
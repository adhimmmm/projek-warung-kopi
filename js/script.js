// toggle class active Humberger-menu Start
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}


//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target) ){
        navbarNav.classList.remove('active');
    }
});
// toggle class active Sidebar End





//toogle class active search Start
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

//fungsi untuk mengaktivkan search form
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}
//fungsi klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});
//toggle class active search End


//toggle class active Shopping-cart Start
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}
//toggle class active Shopping-cart End





















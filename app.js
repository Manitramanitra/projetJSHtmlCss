let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
 

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');//ajoute un icon croix quand on click
    navbar.classList.toggle('active')
});

document.querySelector('#search-icon').onclick = ()=>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = ()=>{
    document.querySelector('#search-form').classList.remove('active');
}
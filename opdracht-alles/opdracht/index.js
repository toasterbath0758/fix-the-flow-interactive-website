

// const mobileNav=document.getElementById("mobileNav")
// function openMobileNav(){
//     mobileNav.classList.add("active")
// }
// function closeMobileNav(){
//     mobileNav.classList.remove("active")
// }

// var lastpos = 0;


//maak een knop die een hamburgermenu opent

// const hamburgerMenuKnop=document.querySelector('click')
// function openMobileNav(){
// mobileNav.classList.add("active")
// hamburgerMenuKnop.addEventListener('click', function()mobileNav)


// 
// Stap 1 querySelector
let hamburgerMenuKnop = document.querySelector('.hamburgerMenuKnop');
let mobileNav = document.querySelector('.mobileNav');


//maak een knop die het hamburgermenu opent en sluit
// Stap 2 addEventListener
hamburgerMenuKnop.addEventListener('click', function(){
    mobileNav.classList.toggle('active')
})

let closeHamburgerMenuKnop = document.querySelector('.closeHamburgerMenuKnop');

closeHamburgerMenuKnop.addEventListener('click', function(){
    mobileNav.classList.toggle('active')
})


//NIEUWE FUNCTIE VOOR DE DOD :)
//maak de knop aan
let openHetDoelgroepMenuKnop = document.querySelector('.openHetDoelgroepMenuKnop');
let openDoelgroepMenu = document.querySelector('.openDoelgroepMenu');
let knopDoelgroep = document.querySelector('.knopDoelgroep');

//zet de clickfunction op de knop en de togglefunction
openHetDoelgroepMenuKnop.addEventListener('click', function(){
openDoelgroepMenu.classList.toggle('active');

})
// divaniNL //




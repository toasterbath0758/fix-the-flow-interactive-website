

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

    // Stap 1
let hamburgerMenuKnop = document.querySelector('.hamburgerMenuKnop');
let mobileNav = document.querySelector('.mobileNav');

// Stap 2
hamburgerMenuKnop.addEventListener('click', function(){
    console.log('textje')
    mobileNav.classList.toggle('active')
})


function doeIets(){
    console.log('deze moet t niet doen')
    hamburgerMenuKnop.classList.toggle('active')
}
    // Stap 3
    // document.querySelector('#hamburgerMenuKnop').classList.add('.mobileNav');
// divaniNL

//maak een knop die het hamburgermenu sluit


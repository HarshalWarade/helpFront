let navbarsds = document.getElementById('navbarsds');
let navbars = document.getElementById('navbars');
let cards = document.getElementById('cards');
let footers = document.getElementById('footers');
let footersds = document.getElementById('footersds');
let layouts = document.getElementById('layouts');
let btns = document.getElementById('btns');
let btnsds = document.getElementById('btnsds');
let cardsds = document.getElementById('cardsds');
let layoutsds = document.getElementById('layoutsds');

navbarsds.style.display = '';
btnsds.style.display = 'none';
cardsds.style.display = 'none';
layoutsds.style.display = 'none';
cardsds.style.display = 'none';
footersds.style.display = 'none';
navbars.style.color = '#9d00ff';
navbars.addEventListener('click', function(){
    navbarsds.style.display = '';
    footers.style.color = 'black';
    layouts.style.color = 'black';
    cardsds.style.display = 'none';
    btnsds.style.display = 'none';
    cards.style.color = 'black';
    navbars.style.color = '#9d00ff';
    footersds.style.display = 'none';
    btns.style.color = '#000';
    layoutsds.style.display = 'none';
});
cards.addEventListener('click', ()=>{
    btnsds.style.display = 'none';
    cardsds.style.display = '';
    layoutsds.style.display = 'none';
    layoutsds.style.display = 'none';
    navbarsds.style.display = 'none';
    cards.style.color = '#9d00ff';
    footersds.style.display = 'none';
    navbars.style.color = 'black';
    btns.style.color = '#000';
    footers.style.color = 'black';
    layouts.style.color = 'black';
})
btns.addEventListener('click', ()=>{
    btnsds.style.display = '';
    cardsds.style.display = 'none';
    navbarsds.style.display = 'none';
    btns.style.color = '#9d00ff';
    navbars.style.color = 'black';
    cards.style.color = 'black';
    layoutsds.style.display = 'none';
    footersds.style.display = 'none';
    layouts.style.color = 'black';
    footers.style.color = 'black';
});
layouts.addEventListener('click', function(){
    btnsds.style.display = 'none';
    cardsds.style.display = 'none';
    navbarsds.style.display = 'none';
    layouts.style.color = '#9d00ff';
    navbars.style.color = 'black';
    footersds.style.display = 'none';
    cards.style.color = 'black';
    btns.style.color = 'black';
    layoutsds.style.display = '';
    footers.style.color = 'black';
    
})
footers.addEventListener('click', function(){
    btnsds.style.display = 'none';
    cardsds.style.display = 'none';
    navbarsds.style.display = 'none';
    footers.style.color = '#9d00ff';
    navbars.style.color = 'black';
    footersds.style.display = '';
    cards.style.color = 'black';
    btns.style.color = 'black';
    layoutsds.style.display = 'none';
})

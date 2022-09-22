let navbarsds = document.getElementById('navbarsds');
let navbars = document.getElementById('navbars');
let cards = document.getElementById('cards');
let layouts = document.getElementById('layouts');
let btns = document.getElementById('btns');
let btnsds = document.getElementById('btnsds');
let cardsds = document.getElementById('cardsds');
let layoutsds = document.getElementById('layoutsds');

btnsds.style.display = 'none';
cardsds.style.display = 'none';
layoutsds.style.display = 'none';
cardsds.style.display = 'none';
navbars.style.color = '#9d00ff';
navbars.addEventListener('click', function(){
    navbarsds.style.display = '';
    layouts.style.color = 'black';
    cardsds.style.display = 'none';
    btnsds.style.display = 'none';
    cards.style.color = 'black';
    navbars.style.color = '#9d00ff';
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
    navbars.style.color = 'black';
    btns.style.color = '#000';
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
    layouts.style.color = 'black';
});
layouts.addEventListener('click', function(){
    btnsds.style.display = 'none';
    cardsds.style.display = 'none';
    navbarsds.style.display = 'none';
    layouts.style.color = '#9d00ff';
    navbars.style.color = 'black';
    cards.style.color = 'black';
    btns.style.color = 'black';
    layoutsds.style.display = '';

})

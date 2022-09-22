let navbarsds = document.getElementById('navbarsds');
let navbars = document.getElementById('navbars');
let cards = document.getElementById('cards');
let btns = document.getElementById('btns');
let btnsds = document.getElementById('btnsds');
let cardsds = document.getElementById('cardsds');

btnsds.style.display = 'none';
cardsds.style.display = 'none';

cardsds.style.display = 'none';
navbars.style.color = '#9d00ff';
navbars.addEventListener('click', function(){
    navbarsds.style.display = '';
    cardsds.style.display = 'none';
    btnsds.style.display = 'none';
    cards.style.color = 'black';
    navbars.style.color = '#9d00ff';
    btns.style.color = '#000';
});
cards.addEventListener('click', ()=>{
    btnsds.style.display = 'none';
    cardsds.style.display = '';
    navbarsds.style.display = 'none';
    cards.style.color = '#9d00ff';
    navbars.style.color = 'black';
    btns.style.color = '#000';
})
btns.addEventListener('click', ()=>{
    btnsds.style.display = '';
    cardsds.style.display = 'none';
    navbarsds.style.display = 'none';
    btns.style.color = '#9d00ff';
    navbars.style.color = 'black';
    cards.style.color = 'black';

})

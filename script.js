let navbarsds = document.getElementById('navbarsds');
let navbars = document.getElementById('navbars');
let cards = document.getElementById('cards');
navbars.style.color = '#9d00ff';
let cardsds = document.getElementById('cardsds');
cardsds.style.display = 'none';
navbars.addEventListener('click', function(){
    navbarsds.style.display = '';
    cardsds.style.display = 'none';
    // cardsds.style.display = 'none';
    cards.style.color = 'black';
    navbars.style.color = '#9d00ff';
});
cards.addEventListener('click', ()=>{
    cardsds.style.display = '';
    navbarsds.style.display = 'none';
    cards.style.color = '#9d00ff';
    navbars.style.color = 'black';
})

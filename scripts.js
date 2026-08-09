const emriInput = document.getElementById('nameInput');
const emriKarta = document.getElementById('cardName');

emriInput.addEventListener('input', function(){
    emriKarta.textContent = emriInput.value;
});


const punaInput = document.getElementById('positionInput');
const punaKarta = document.getElementById('cardPosition');

punaInput.addEventListener('input', function(){
    punaKarta.textContent = punaInput.value;
});

const numriInput = document.getElementById('phoneInput');
const numriKarta = document.getElementById('cardPhone');

numriInput.addEventListener('input', function(){
    numriKarta.textContent = numriInput.value;
});

const emailInput = document.getElementById('emailInput');
const emailKarta = document.getElementById('cardEmail');

emailInput.addEventListener('input', function(){
    emailKarta.textContent = emailInput.value;
});

const webInput = document.getElementById('webInput');
const webKarta = document.getElementById('cardWeb');

webInput.addEventListener('input', function(){
    webKarta.textContent = webInput.value;
});

const cityInput = document.getElementById('cityInput');
const cityKarta = document.getElementById('cardCity');

cityInput.addEventListener('input', function(){
    cityKarta.textContent = cityInput.value;
});
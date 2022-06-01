// Динамическая форма заявки заказа в разделе "Контакты"
let numbOfPage = document.querySelector('.form-label');
let formRange = document.querySelector('.form-range');
let total = document.querySelector('.p-total');

formRange.addEventListener('input', function(){

    let currentLang = document.querySelector('html').lang;
    let defaultText = numbOfPage.innerHTML.split(':');
    numbOfPage.innerHTML = defaultText[0] + ': ' + formRange.value;

    if(currentLang == 'ru')
        total.innerHTML = 'от ' + formRange.value*2500 + '&#8381;';
    else
        total.innerHTML = 'from ' + formRange.value*50 + '$';

});
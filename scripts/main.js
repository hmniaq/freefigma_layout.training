// Динамическая форма заявки заказа в разделе "Контакты"

let numbOfPage = document.querySelector('.form-label');
let formRange = document.querySelector('.form-range');
let total = document.querySelector('.p-total');
let currentLang = document.querySelector('html').lang;

formRange.addEventListener('input', function(){

    let defaultText = numbOfPage.innerHTML.split(':');
    numbOfPage.innerHTML = defaultText[0] + ': ' + formRange.value;

    if(currentLang == 'ru')
        total.innerHTML = 'от ' + formRange.value*2500 + '&#8381;';
    else
        total.innerHTML = 'from ' + formRange.value*50 + '$';

});

// Cмена темы сайта: темная-светлая

if(window.innerWidth > 600) {

    let pcMode = document.querySelector('.pc-theme-mode');

    pcMode.addEventListener('click', changeTheme, pcMode);
    
}
else {

    let mobileMode = document.querySelector('.mob-theme-mode');

    mobileMode.addEventListener('click', changeTheme, mobileMode);

}

function changeTheme(btn) {


    let styleLink = document.querySelector('link[data-theme]');
    let imgStars = document.querySelectorAll('.star');
    let imgSocial = document.querySelectorAll('.social-img');

    if(styleLink.dataset.theme == 'light') {

        styleLink.dataset.theme = 'dark';
        styleLink.href = 'styles/dark-theme.css';

        imgStars.forEach((item) => {
            if(item.getAttribute('src') == 'img/Star-empty.png') {
                item.src = 'img/Star.png';
            }
            else {
                item.src = 'img/Star-empty.png';
            }
        });

        imgSocial.forEach((item) => {
            item.src = item.getAttribute('src').slice(0, -4) + '-light.png';
        });

        if(currentLang == 'ru')
            btn.target.innerHTML = 'Светлая тема';
        else
            btn.target.innerHTML = 'Light mode';

    }
    else {

        styleLink.dataset.theme = 'light';
        styleLink.href = 'styles/light-theme.css';

        imgStars.forEach((item) => {
            if(item.getAttribute('src') == 'img/Star-empty.png') {
                item.src = 'img/Star.png';
            }
            else {
                item.src = 'img/Star-empty.png';
            }
        });

        imgSocial.forEach((item) => {
            item.src = item.getAttribute('src').slice(0, -10) + '.png';
        });

        if(currentLang == 'ru')
            btn.target.innerHTML = 'Темная тема';
        else
            btn.target.innerHTML = 'Dark mode';

    }

}

// Модальное окно

let modal = document.querySelector('.modal');
let btnModal = document.querySelector('.modal_btn');

btnModal.addEventListener('click', function() {

    modal.style.display = "block";

});

window.addEventListener('click', function(event){

    if(event.target == modal)
        modal.style.display = "none";

});

// AJAX, получение данных из файла data.json

$.getJSON('data.json', function(data) {

    if(currentLang == 'ru')
        $('.name').html(data.nameru);
    else
        $('.name').html(data.nameeng);
    
    $('.email').html(data.email);
    $('.github').html(data.github);

});
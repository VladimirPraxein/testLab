//Burger
const burgerMenu = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');
const page = document.querySelector('.page');
const logo = document.querySelector('.header__logo');
const logoBlack = document.querySelector('.header__logo-black');

burgerMenu.addEventListener('click', () => {
    if (headerList.classList.contains('header__list_active')) {
        headerList.classList.remove('header__list_active');
        burgerMenu.classList.remove('header__burger_active');
        page.classList.remove('page_active');
        logo.classList.remove('header__logo_disabled');
        logoBlack.classList.remove('header__logo-black_active');
    } else {
        headerList.classList.add('header__list_active');
        burgerMenu.classList.add('header__burger_active');
        page.classList.add('page_active');
        logo.classList.add('header__logo_disabled');
        logoBlack.classList.add('header__logo-black_active');
    }
});

headerList.addEventListener('click', (e) => {
    if (e.target.closest('.header__item')) {
        headerList.classList.remove('header__list_active');
        burgerMenu.classList.remove('header__burger_active');
        page.classList.remove('page_active');
        logo.classList.remove('header__logo_disabled');
        logoBlack.classList.remove('header__logo-black_active');
    }
})

//Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 32,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    },
});

//Вопросы и ответы
const questionsList = document.querySelector('.questions__list');

questionsList.addEventListener('click', function (e) {
    console.log(e.target.className)
    if (e.target.closest('.questions__item')) {
        if (e.target.closest('.questions__item_active')) {
            e.target.closest('.questions__item').classList.remove('questions__item_active');
        } else {
            e.target.closest('.questions__item').classList.add('questions__item_active');
        }
    }
})

//Форма
const form = document.querySelector('.form');
const inputList = Array.from(form.querySelectorAll('.form__input'));

function showError(inputElement) {
    const errorElement = document.querySelector(`.${inputElement.name}-error`);
    const formIcon = document.querySelector(`.${inputElement.name}-icon`);
    inputElement.classList.add('form__input_error');
    errorElement.classList.add('form__error_active');
    errorElement.textContent = inputElement.validationMessage;
    formIcon.classList.remove('form__icon_successful');
    formIcon.classList.add('form__icon_error');
}

function hideError(inputElement) {
    const errorElement = document.querySelector(`.${inputElement.name}-error`);
    const formIcon = document.querySelector(`.${inputElement.name}-icon`);
    inputElement.classList.remove('form__input_error');
    errorElement.classList.remove('form__error_active');
    errorElement.textContent = '';
    formIcon.classList.add('form__icon_successful');
    formIcon.classList.remove('form__icon_error');
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    inputList.forEach((inputElement) => {
        if (!inputElement.validity.valid) {
            showError(inputElement);
        } else {
            hideError(inputElement);
        }
    });
})
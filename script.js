
const button = document.querySelector('.button_theme-switcher');

button.addEventListener('click', () => {
    document
        .querySelector('.dropdown_switcher.dropdown_hidden')
        .setAttribute('class', 'dropdown dropdown_switcher');
});

const closeButton = document.querySelector('.modal__button');
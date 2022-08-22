const button = document.querySelector('.button_theme-switcher');

button.addEventListener('click', () => {
    document.querySelector('.dropdown_switcher').classList.toggle('dropdown_hidden');
});

const style = getComputedStyle(document.body);
const mainColor = style.getPropertyValue('--day-white-color');
let isDarkThemeEnabled = mainColor === ' #FFFFFF';

const lightThemeSwitcher = document.querySelector('.button_light-theme');
const darkThemeSwitcher = document.querySelector('.button_dark-theme')

darkThemeSwitcher.addEventListener('click', () => {
    if (isDarkThemeEnabled) {
        document.body.style.setProperty('--day-white-color', ' #2B2D33');
        document.body.style.setProperty('--label-color', ' #171B1F');
        document.body.style.setProperty('--main-black-text-color', ' #BCC4CC');
        isDarkThemeEnabled = false;
        darkThemeSwitcher.classList.toggle('button_color_reverse-blue');
        darkThemeSwitcher.classList.toggle('button_color_blue');
        lightThemeSwitcher.classList.toggle('button_color_reverse-blue');
        lightThemeSwitcher.classList.toggle('button_color_blue');
    }
});

lightThemeSwitcher.addEventListener('click', () => {
    if (!isDarkThemeEnabled) {
        document.body.style.setProperty('--day-white-color', ' #FFFFFF');
        document.body.style.setProperty('--label-color', ' #EBF0F5');
        document.body.style.setProperty('--main-black-text-color', ' #000000');
        isDarkThemeEnabled = true;
        darkThemeSwitcher.classList.toggle('button_color_reverse-blue');
        darkThemeSwitcher.classList.toggle('button_color_blue');
        lightThemeSwitcher.classList.toggle('button_color_reverse-blue');
        lightThemeSwitcher.classList.toggle('button_color_blue');
    }
});
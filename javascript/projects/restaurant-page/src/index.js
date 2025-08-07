import './styles.css';
import { mainPageHeader, mainPageDescription } from './mainPage.js';
import { menuHeader, menuDescription, menuList } from './menuPage.js';
import { aboutHeader, aboutDescription } from './aboutPage.js';

const contentDiv = document.querySelector('#content');

const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const aboutButton = document.querySelector('.about-button');

homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = ``;
    contentDiv.appendChild(mainPageHeader);
    contentDiv.appendChild(mainPageDescription);
});

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = ``;
    contentDiv.appendChild(menuHeader);
    contentDiv.appendChild(menuDescription);
    contentDiv.appendChild(menuList);
});

aboutButton.addEventListener('click', () => {
    contentDiv.innerHTML = ``;
    contentDiv.appendChild(aboutHeader);
    contentDiv.appendChild(aboutDescription);
});

contentDiv.appendChild(mainPageHeader);
contentDiv.appendChild(mainPageDescription);

console.log("Restaurant Page loaded");
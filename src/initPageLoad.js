import banner from './banner.png';

const BODY = document.querySelector('body');

export const bannerDisplay = () => {
    BODY.style.backgroundImage = `url(${banner})`;


const CONTENT = document.querySelector('#content');

const NAV = document.createElement('div');
NAV.classList.add('nav');
CONTENT.appendChild(NAV);


const RESTAURANT_NAME = document.createElement('h2');
RESTAURANT_NAME.textContent = "French collar";
const NAV_UL = document.createElement('ul');
NAV.appendChild(RESTAURANT_NAME);
NAV.appendChild(NAV_UL);

const NAV_LIS = ["Home", "Menu", "Contact"];

NAV_LIS.forEach(li => {
    let liElement = document.createElement('li');
    liElement.textContent = li;
    NAV_UL.appendChild(liElement);
})

const MAIN = document.createElement('div');
MAIN.classList.add('main');
CONTENT.appendChild(MAIN);

const MAIN_H1 = document.createElement('h1');
MAIN_H1.textContent = 'Fresh mediterranean cuisne';
MAIN.appendChild(MAIN_H1);

const MAIN_BTN = document.createElement('button');
MAIN_BTN.textContent = 'Book a table';
MAIN.appendChild(MAIN_BTN);

console.log('end')
}
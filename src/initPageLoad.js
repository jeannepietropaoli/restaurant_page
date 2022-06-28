import banner from './banner.png';

const BODY = document.querySelector('body');

export const bannerDisplay = () => {
    BODY.style.backgroundImage = `url(${banner})`;
}



const NAV = document.createElement('div');
NAV.classList.add('nav');


const RESTAURANT_NAME = document.createElement('h2');
const NAV_UL = document.createElement('ul');
NAV.appendChild(RESTAURANT_NAME, NAV_UL);
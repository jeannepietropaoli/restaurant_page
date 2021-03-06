import banner from './banner1.png';
import './css/homePage.css';

const CONTENT = document.querySelector('#content');

const BANNER = (()=> {
    const BODY = document.querySelector('body');
    return {
        DISPLAY : ()=> BODY.style.backgroundImage = `url(${banner})`
    }
})()

const NAV_ELEMENTS = (()=> {
    const NAVBAR = (()=> {
        const NAVBAR_ELMT = document.createElement('div');
        NAVBAR_ELMT.classList.add('nav');
        return NAVBAR_ELMT;
    })()

    const createName = ()=> {
        const RESTAURANT_NAME = document.createElement('h2');
        RESTAURANT_NAME.textContent = "French collar";
        return RESTAURANT_NAME;
    }
    const createNavUl = ()=> {
        const NAV_UL = document.createElement('ul');
        const NAV_LIS = ["Home", "Menu", "Contact"];
        NAV_LIS.forEach(li => {
            let liElement = document.createElement('li');
            liElement.textContent = li;
            NAV_UL.appendChild(liElement);
    })
        return NAV_UL;
}
    const display = ()=> {
        NAVBAR.appendChild(createName());
        NAVBAR.appendChild(createNavUl());
        CONTENT.appendChild(NAVBAR);
    }
    return {
       display
    }
})()

export const MAIN_ELEMENTS = (()=> {
    const MAIN = (()=> {
        const MAIN_ELMT = document.createElement('div');
        MAIN_ELMT.classList.add('main');
        return MAIN_ELMT
    })()

    const createMainH1 = ()=> {
        const MAIN_H1 = document.createElement('h1');
        MAIN_H1.textContent = 'Fresh mediterranean cuisne';
        return MAIN_H1;
    }
    const createMainBtn = ()=> {
        const MAIN_BTN = document.createElement('button');
        MAIN_BTN.textContent = 'Book a table';
        return MAIN_BTN;
    }
    const display = ()=> {
        CONTENT.appendChild(MAIN);
        MAIN.appendChild(createMainH1());
        MAIN.appendChild(createMainBtn());
    }
    return {
        display,
        MAIN
    }
})()

export const HOMEPAGE_ELEMENTS = (()=> {
    return  Object.assign({},
        BANNER.DISPLAY(),
        NAV_ELEMENTS.display(),
        MAIN_ELEMENTS.display(),
    )      
})()


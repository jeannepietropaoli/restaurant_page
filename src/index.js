import {HOMEPAGE_ELEMENTS} from './initPageLoad';
import {addVolet} from './volet';
import { displayMenu } from './menu';
import {CONTENT} from './volet';
import {volet} from './volet';
import {MAIN_ELEMENTS} from './initPageLoad';

console.log(Array.from(CONTENT.children).some(child => child.classList.contains('main')));

const home = document.querySelector('li:nth-of-type(1)');
const menu = document.querySelector('li:nth-of-type(2)');
const contact = document.querySelector('li:nth-of-type(3)');

const removeMainSection = ()=> {
    if (Array.from(CONTENT.children).some(child => child.classList.contains('main'))){
        while (document.querySelector('.main').firstChild) {
            document.querySelector('.main').removeChild(document.querySelector('.main').firstChild);
        }
        CONTENT.removeChild(document.querySelector('.main'));
    }
    else if (Array.from(volet.children).some(child => child.classList.contains('main'))){
        volet.removeChild(document.querySelector('.main'))
    }
}

const rollWhiteDiv = ()=> {
    document.querySelector('.visible').style.height = '0%';
        setTimeout(()=> {document.querySelector('.visible').style.height = '70%'}, 1000);
}

const isSameSectionClick = ()=> {

}

menu.addEventListener('click', function() {
    if (document.querySelector('.main')) removeMainSection();
    if (document.querySelector('.visible')){
        rollWhiteDiv();
        setTimeout(()=> {displayMenu.create()}, 1000);
    }
    else {
        document.querySelector('.volet').style.height = '70%';
        displayMenu.create();
    }
    addVolet.makeVoletVisible();
});

contact.addEventListener('click', function() {
    if (document.querySelector('.main')) removeMainSection();
    if (document.querySelector('.visible')){
        rollWhiteDiv();
        setTimeout(()=> {displayMenu.create()}, 1000);
    }
    else {
        document.querySelector('.volet').style.height = '70%';
        displayMenu.create();
    }
    addVolet.makeVoletVisible();
});

home.addEventListener('click', function() {
    if (document.querySelector('.main')) removeMainSection();
    document.querySelector('.visible').style.height = '0%';
    volet.classList.remove('visible');
    setTimeout(()=> {MAIN_ELEMENTS.display()}, 100);
});






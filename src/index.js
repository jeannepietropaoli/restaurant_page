import {HOMEPAGE_ELEMENTS} from './initPageLoad';
import {addVolet} from './volet';
import { displayMenu } from './menu';
import {CONTENT} from './volet';
import {volet} from './volet';

console.log(Array.from(CONTENT.children).some(child => child.classList.contains('main')));

const home = document.querySelector('li:nth-of-type(1)');
const menu = document.querySelector('li:nth-of-type(2)');
const contact = document.querySelector('li:nth-of-type(3)');

const removeMainSection = ()=> {
    if (Array.from(CONTENT.children).some(child => child.classList.contains('main'))){
        CONTENT.removeChild(document.querySelector('.main'));
    }
    else if (Array.from(volet.children).some(child => child.classList.contains('main'))){
        volet.removeChild(document.querySelector('.main'))
    }
}

const rollWhiteDiv = ()=> {
    document.querySelector('.visible').style.height = '0%';
        setTimeout(()=> {document.querySelector('.visible').style.height = '70%'}, 1000)
}

const isSameSectionClick = ()=> {

}

menu.addEventListener('click', function() {
    if (document.querySelector('.main')) removeMainSection();
    if (document.querySelector('.visible')) rollWhiteDiv();
    addVolet.makeVoletVisible();
    displayMenu.create();
});

contact.addEventListener('click', function() {
    if (document.querySelector('.main')) removeMainSection();
    if (document.querySelector('.visible')) rollWhiteDiv();
    addVolet.makeVoletVisible()
});

home.addEventListener('click', function() {
    if (document.querySelector('.main')) removeMainSection();
    document.querySelector('.visible').style.height = '0%';
});






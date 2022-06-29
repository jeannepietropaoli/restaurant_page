import {HOMEPAGE_ELEMENTS} from './initPageLoad';
import {addVolet} from './menu';

const home = document.querySelector('li:nth-of-type(1)');
const menu = document.querySelector('li:nth-of-type(2)');
const contact = document.querySelector('li:nth-of-type(3)');
const CONTENT = document.querySelector('#content');

const removeMainSection = ()=> CONTENT.removeChild(document.querySelector('.main'));

const rollWhiteDiv = ()=> {
    document.querySelector('.visible').style.height = '0%';
        setTimeout(()=> {document.querySelector('.visible').style.height = '70%'}, 1000)
}

const isSameSectionClick = ()=> {

}

menu.addEventListener('click', function() {
    if (document.querySelector('.main')) removeMainSection();
    if (document.querySelector('.visible')) rollWhiteDiv();
    addVolet.makeVoletVisible()
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




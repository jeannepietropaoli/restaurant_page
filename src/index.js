import {addVolet} from './volet';
import { displayMenu } from './menu';
import {CONTENT} from './volet';
import {volet} from './volet';
import {MAIN_ELEMENTS} from './initPageLoad';

const navElements = (() => {
    return {
        home : document.querySelector('li:nth-of-type(1)'),
        menu : document.querySelector('li:nth-of-type(2)'),
        contact : document.querySelector('li:nth-of-type(3)'),
    }
})()

const navSection = (()=> {
    let currentSection = 'Home';
    const setCurrentSection = (event)=> {
        currentSection = event.target.innerText;
    }
    const isNotCurrentSection = (elementClicked)=> {
        return elementClicked !== currentSection;
    }
    return {
        setCurrentSection,
        isNotCurrentSection
    }
})()

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

function displayContent(){
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
}

for (let i=1; i<=2; i++){
    Object.values(navElements)[i].addEventListener('click', function(e) {
        if (navSection.isNotCurrentSection(e.target.innerText)) displayContent();
        navSection.setCurrentSection(e);
    });
}

navElements.home.addEventListener('click', function(e) {
    if (navSection.isNotCurrentSection(e.target.innerText)){
        if (document.querySelector('.main')) removeMainSection();
        if (document.querySelector('.visible')){
            document.querySelector('.visible').style.height = '0%';
            volet.classList.remove('visible');
        }
        setTimeout(()=> {MAIN_ELEMENTS.display()}, 100);
    }
    navSection.setCurrentSection(e);
});






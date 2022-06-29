import './css/menu.css';

let volet;
export const addVolet = (()=> {
    const createVolet = (()=> {
        volet = document.createElement('div');
        document.querySelector('#content').appendChild(volet);
        volet.classList.add('volet');
    })()
    const makeVoletVisible = ()=> {
       volet.classList.add('visible');
    }
    return {makeVoletVisible,
    createVolet};
})()

const menu_details = document.createElement('div');
menu_details.textContent = 'menuuu';
menu_details.style.color = 'black';
volet.appendChild(menu_details);




export let volet;
export const CONTENT = document.querySelector('#content');

export const addVolet = (()=> {
    const createVolet = (()=> {
        volet = document.createElement('div');
        CONTENT.appendChild(volet);
        volet.classList.add('volet');
    })()
    const makeVoletVisible = ()=> {
       volet.classList.add('visible');
    }
    return {makeVoletVisible,
    createVolet};
})()
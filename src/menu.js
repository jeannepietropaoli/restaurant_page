import './css/menu.css';
import {volet} from './volet';

const menuItems = (name, description, price)=> {
    return {
        name,
        description,
        price
    }
}

export const displayMenu = (()=> {
    const menuCreation = [
        menuItems("Mozzarella and Feta Pita Grilled Cheese", "Pita Grilled Cheese stuffed with Mediterranean favorites including melty mozzarella, feta, spinach, sundried tomatoes, and a little basil pesto", "17$"),
        menuItems("Mediterranean Orzo Salad Recipe", "Mediterranean orzo salad recipe with feta, loads of crunchy vegetables, fresh herbs, and a tangy Greek dressing", "16$"),
        menuItems("Creamy Pesto Ravioli", "Our specialty, home-made pasta filled with creamy fresh pesto", "21$")
    ]
    const createMenuContainer = ()=> {
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('main');
        menuContainer.setAttribute('id','menu');
        volet.appendChild(menuContainer);
        return menuContainer;
    }

    return {
        create : ()=>{
            console.log('created')
            const menuContainer = createMenuContainer();
            menuCreation.forEach(dish => {
                const itemContainer = document.createElement('div');
                itemContainer.classList.add('itemContainer');
                menuContainer.appendChild(itemContainer)
                const itemCreation = (() => {
                    for (const key in dish){
                        const itemDetail = document.createElement('p');
                        itemDetail.textContent = dish[key];
                        itemContainer.appendChild(itemDetail)
                    }
                })()
            })   
        }
    }
})()
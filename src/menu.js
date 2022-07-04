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
        menuItems("Creamy Pesto Ravioli", "Our specialty, home-made pasta filled with creamy fresh pesto", "21$"),
        menuItems("Easy Braised Lamb Shanks", "Fall-off-the-bone tender braised lamb shanks in a rich red wine sauce with vegetables", "24$"),
        menuItems("Mediterranean-Style Fish Soup", "fish soup with warm Eastern Mediterranean spices, loads of fresh herbs, and a big splash of lemon juice", "15$"),
        menuItems("Middle Eastern Baharat Baked Chicken Thighs", "Juicy baked boneless chicken thighs get a Middle Eastern makeover with a bold garlicy marinade", "21$"),
        menuItems("Mediterranean-Style Turmeric Lemon Chicken Soup", "fresh lemon juice, and amped up with veggies, herbs, and warm spices", "19$")
    ]
    const createMenuContainer = ()=> {
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('main');
        menuContainer.setAttribute('id','menu');
        volet.appendChild(menuContainer);
        return menuContainer;
    }

    const createMenuItemContainer = (menuContainer)=> {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        menuContainer.appendChild(itemContainer);
        return itemContainer;
    }

    const itemDetail = (key, dish, itemContainer)=> {
        const itemDetail = document.createElement('p');
        itemDetail.textContent = dish[key];
        itemContainer.appendChild(itemDetail)
    }

    return {
        create : ()=>{
            const menuContainer = createMenuContainer();
            menuCreation.forEach(dish => {
                const itemContainer = createMenuItemContainer(menuContainer);
                const itemCreation = (() => {
                    for (const key in dish){
                        itemDetail(key, dish, itemContainer);
                    }
                })()
            })   
        }
    }
})()
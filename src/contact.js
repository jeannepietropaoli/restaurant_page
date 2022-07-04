import {volet} from './volet';
import mapImg from './map_restaurant.png';
import './css/contact.css';

const hoursTemplate = (day, openingHours)=> {
    return {
        day,
        openingHours
    }
}

const hours = (()=> {
    const openingHours = [
        hoursTemplate('Monday', '11:30 - 21:00'),
        hoursTemplate('Tuesday', '11:30 - 21:00'),
        hoursTemplate('Wednesday', '11:30 - 21:00'),
        hoursTemplate('Thursday', '11:30 - 21:00'),
        hoursTemplate('Friday', '11:30 - 23:30'),
        hoursTemplate('Saturday', '11:30 - 23:30'),
        hoursTemplate('Sunday', '11:30 - 21:00'),
    ]

    const displayHoursTitle = (hoursContainer) => {
        const hoursSectionTitle = document.createElement('h2');
        hoursSectionTitle.textContent = 'Opening hours';
        hoursContainer.appendChild(hoursSectionTitle);
    }

    const display = ()=> {
        const hoursContainer = document.createElement('div');
        hoursContainer.classList.add('hoursContainer');
        displayHoursTitle(hoursContainer);
        openingHours.forEach(day => {
            const dayOpening = document.createElement('p');
            hoursContainer.appendChild(dayOpening);
            for (const key in day){
                dayOpening.textContent += day[key];
            }
        })
        return hoursContainer;
    }
    
    return { display }
})()

const getInTouch = (()=> {
    const displayGetInTouchTitle = (getInTouch) => {
        const getInTouchTitle = document.createElement('h2');
        getInTouchTitle.textContent = 'Get in touch !';
        getInTouch.appendChild(getInTouchTitle);
    }

    const getInTouchContent = (getInTouch)=> {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.textContent = 'e-mail us at french_collar@resto.com';
        p2.textContent = 'call us : 07 - 81 - 42 -94 - 78'
        getInTouch.append(p1, p2);
    }

    const display = () => {
        const getInTouch = document.createElement('div');
        getInTouch.classList.add('getInTouch');
        displayGetInTouchTitle(getInTouch);
        getInTouchContent(getInTouch);
        return getInTouch;
    }

    return {display}
})()

const map = (()=> {
    return {
        display : (contactContainer)=> {
            const mapContainer = document.createElement('img');
            mapContainer.src = mapImg;
            contactContainer.appendChild(mapContainer);
            mapContainer.setAttribute('id', 'map');
            return mapContainer
        }
    }
})()

export const displayContact = (()=> {
    const contactContainer = document.createElement('div');

    const createContactContainer = ()=> {
        contactContainer.classList.add('main');
        contactContainer.setAttribute('id','contact');
        volet.appendChild(contactContainer);
    }

    const bundleInfos = ()=> {
        const bundle = document.createElement('div');
        bundle.classList.add('bundleInfos');
        contactContainer.appendChild(bundle);
        bundle.appendChild(hours.display());
        bundle.appendChild(getInTouch.display());
    }
        
    return {
        create : ()=>{
            createContactContainer();
            bundleInfos();
            map.display(contactContainer);
        }
    }
})()
import {volet} from './volet';

const hoursTemplate = (day, openingHours)=> {
    return {
        day,
        openingHours
    }
}

export const displayContact = (()=> {
    const createContactContainer = ()=> {
        const contactContainer = document.createElement('div');
        contactContainer.classList.add('main');
        contactContainer.setAttribute('id','contact');
        volet.appendChild(contactContainer);
        return contactContainer;
    }
    
    const hours = [
            hoursTemplate('Monday', '11:30 - 21:00'),
            hoursTemplate('Tuesday', '11:30 - 21:00'),
            hoursTemplate('Wednesday', '11:30 - 21:00'),
            hoursTemplate('Thursday', '11:30 - 21:00'),
            hoursTemplate('Friday', '11:30 - 23:30'),
            hoursTemplate('Saturday', '11:30 - 23:30'),
            hoursTemplate('Sunday', '11:30 - 21:00'),
    ]

    const displayHours = ()=> {
        const hoursContainer = document.createElement('div');
        createContactContainer().appendChild(hoursContainer);
        hoursContainer.style.color = 'black';
        hours.forEach(day => {
            const dayOpening = document.createElement('p');
            hoursContainer.appendChild(dayOpening);
            for (const key in day){
                dayOpening.textContent += day[key];
            }
        })
    }
        
    return {
        create : ()=>{
            console.log('created contact')
            displayHours();
        }
    }
})()
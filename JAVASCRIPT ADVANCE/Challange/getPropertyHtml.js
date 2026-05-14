import { propertiesForSaleArr } from "./properties/propertiesForSaleArr.js";
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";

export function getPropertyHtml(properties=propertiesForSaleArr){
    if(!properties || properties.length==0){
        properties=[placeholderPropertyObj];
    }
    
    return properties.map(property =>{
        const {
            propertyLocation,
            priceGBP,
            rooms,
            comment,
            image,
        }=property;

        const totalArea= rooms.reduce((total,room)=> total+room,0);

        return `
        <section class="property-card">
            <img src="${image}" class="property-img">

            <div class="propety-details">
                <h3>${propertyLocation}</h3>
                <p>$${priceGBP}</p>
                <p>${comment}</p>
                <p>${totalArea}</p>
            </div>
        </section>`
    }).join("");
}
import { itemsBoughtArr } from "./itemBroughtArr.js";

function totalCost(itemBroughtArr,discount=0){
    // if(!discount) discount=0
    const total = itemBroughtArr.reduce((total,currentItem)=>
        total+=currentItem.priceUSD,0
    )
    return total-discount
}

console.log(totalCost(itemsBoughtArr))
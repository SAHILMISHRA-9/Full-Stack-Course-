
function selectItem(item){
    let price=0;

    switch (item) {
    case 'Coffee':
        price+=2;
        break;
    
    case 'Sandwiches':
        price+=5;
        break;
    
    case 'Salad':
        price+=4;
        break;
    
    case 'LemonCake':
        price+=3;
        break;
    
    default:
        break;
    }

    return `you have selected ${item}. That will be $${price}`
}

console.log(selectItem('Salad'));
type Pizza ={
    id:number,
    name:string,
    price:number
}
type Order={
    id:number
    pizza:Pizza
    status: "ordered" | "completed"
}
let cashInRegister = 100
let orderQueue:Order[]=[]
let nextorderID=1
let nextPizzaId=1
let menu:Pizza[]=[
    {id:nextPizzaId++,name: "Margherita",price: 8},
    {id:nextPizzaId++,name: "Pepperoni",price: 10},
    {id:nextPizzaId++,name: "Hawaiian",price: 10},
    {id:nextPizzaId++,name: "Vegie",price: 9},
]

function addNewPizza(PizzaObj:Omit<Pizza,"id">): Pizza{
    const newPizza:Pizza={
        id:nextPizzaId++,
        ...PizzaObj
    }
    menu.push(newPizza)
    return newPizza 
}

function placeOrder(pizzaName:string):Order | undefined{
    const selectedPizza=menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister+=selectedPizza.price
    const newOrder:Order={id : nextorderID++, pizza : selectedPizza,status : "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId:number): Order | undefined{
    const order=orderQueue.find(order => order.id === orderId)
    if(!order){
        console.error(`No order of ${orderId} exist in OrderQueue`)
        return
    }
    order.status="completed"
    return order
}  
function getPizzaDetail(identifier:string | number):Pizza | undefined{
    if( typeof identifier==="string"){
        return menu.find(pizza => pizza.name === identifier.toLowerCase())
    }
    else if(typeof identifier==="number"){
        return menu.find(pizza => pizza.id === identifier)
    }
    else{
        throw new TypeError("Parameter 'identifier must be either a string or a number")
    }
}

addNewPizza({name:"Veg Paneer Videshi",price:12})
addNewPizza({name:"Veg Red Capscicum",price:14})
addNewPizza({name:"Veg Classic",price:15})

placeOrder("Pepperoni")
completeOrder(1)

console.log(menu)
console.log(cashInRegister)
console.log(orderQueue)
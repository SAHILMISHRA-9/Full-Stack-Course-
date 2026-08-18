const menu =[
    {name: "Margherita",price: 8},
    {name: "Pepperoni",price: 10},
    {name: "Hawaiian",price: 10},
    {name: "Vegie",price: 9},
]

let cashInRegister = 100
const orderQueue=[]
let nextorderID=1
function addNewPizza(PizzaObj){
    menu.push(PizzaObj)
}

function placeOrder(pizzaName){
    const selectedPizza=menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister+=selectedPizza.price
    const newOrder={id : nextorderID++, pizza : selectedPizza,status : "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId){
    const order=orderQueue.find(order => order.id===order)
    order.status="completed"
    return order
}

placeOrder("Pepperoni")
completeOrder("1")

console.log(menu)
console.log(cashInRegister)
console.log(orderQueue)
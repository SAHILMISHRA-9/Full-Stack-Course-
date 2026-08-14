const menu =[
    {name: "Margherita",price: 8},
    {name: "Pepperoni",price: 10},
    {name: "Hawaiian",price: 10},
    {name: "Vegie",price: 9},
]

const cashInRegister = 100
const orderQueue=[]

function addNewPizza(PizzaObj){
    menu.push(PizzaObj)
}

function placeOrder(pizzaName){
    const selectedPizza=menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister=+selectedPizza.price
    const newOrder={pizza : selectedPizza,status : "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}
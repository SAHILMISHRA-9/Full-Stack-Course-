let lastPrice=1;
function getStockData(){
    const change = (Math.random()-0.5).toFixed(2);
    const newPrice = +(lastPrice + Number(change)).toFixed(2);

    const direction=
        newPrice<lastPrice?"up":
        newPrice<lastPrice?"down":"same";

    lastPrice=newPrice;

    return{
        name:'QteckAI',
        symbol:'QTA',
        price: newPrice,
        time:new Date().toLocaleDateString,
        direction:direction
    };

}
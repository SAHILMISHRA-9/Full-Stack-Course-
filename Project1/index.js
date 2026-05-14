function renderStockTicker(stockData){
    const stockDisplayName=document.getElementById('name');
    const stockDisplaySymbol=document.getElementById('symbol');
    const stockDisplayPrice=document.getElementById('price');
    const stockDisplayPriceIcon=document.getElementById('price-icon');
    const stockDisplayTime=document.getElementById('time');

    stockDisplayName.textContent = stockData.name;
    stockDisplaySymbol.textContent = stockData.symbol;
    stockDisplayPrice.textContent = stockData.price;
    stockDisplayTime.textContent = stockData.time;

    if(stockData.direction === "up"){
        stockDisplayPriceIcon.textContent = "🔺";
        stockDisplayPriceIcon.style.color="green";
    }else if(stockData.direction==="down"){
        stockDisplayPriceIcon.textContent="🔻";
        stockDisplayPriceIcon.style.color="red";
    }else{
        stockDisplayPriceIcon.textContent="▶";
        stockDisplayPriceIcon.style.color="grey";
    }
}

setInterval(() => {
    const data=getStockData();
    renderStockTicker(data);
},1500);

console.log("js runnning");
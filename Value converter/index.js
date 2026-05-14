function convert(){
    let value=document.getElementById("input-el").value;

    let meterToFeet= value *3.281
    let feetToMeter= value / 3.281
    
    let literToGallon= value*0.264
    let gallonToLiter= value/0.264

    let kiloToPound= value*2.204
    let poundToKilo= value/2.204

    document.getElementById("length").innerHTML=
    `${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`

    document.getElementById("volume").innerHTML=
    `${value} liters = ${literToGallon.toFixed(3)} gallons | ${value} gallons = ${gallonToLiter.toFixed(3)} liters`

    document.getElementById("mass").innerHTML=
    `${value} kilos = ${kiloToPound.toFixed(3)} pounds | ${value} pounds = ${poundToKilo.toFixed(3)} kilos`
}
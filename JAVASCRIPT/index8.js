let Container=document.getElementById("container")

Container.innerHTML="<button onclick='render()'>BUY!</button>"

function render(){
    Container.innerHTML +="<p>Thank you for buying!</p>"
}
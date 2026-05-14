let counthome=0
let countguest=0
document.getElementById("home-score").textContent=counthome
document.getElementById("guest-score").textContent=countguest

function home1(){
    counthome+=1
    document.getElementById("home-score").textContent=counthome
}
function home2(){
    counthome+=2
    document.getElementById("home-score").textContent=counthome
}
function home3(){
    counthome+=3
    document.getElementById("home-score").textContent=counthome
}
function guest1(){
    countguest+=1
    document.getElementById("guest-score").textContent=countguest
}
function guest2(){
    countguest+=2
    document.getElementById("guest-score").textContent=countguest
}
function guest3(){
    countguest+=3
    document.getElementById("guest-score").textContent=countguest
}
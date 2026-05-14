let password=["2","@",">","5","G","h","$","#","*","0","a","!","(",")","%","A","&","x","F","+","7","/"]
let password1El=document.getElementById("pass1-el")
let password2El=document.getElementById("pass2-el")
function generate(){
    password1El.textContent = ""
    password2El.textContent = ""

    for(let i=0;i<10;i++){
        password1El.textContent+=password[getrandom()]
        password2El.textContent+=password[getrandom()]
    }
}

function getrandom(){
    return Math.floor(Math.random()*password.length)
}
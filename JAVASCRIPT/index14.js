const img=[
    "cart-1.jpg",
    "cart-2.jpg",
    "cart-3.jpg"
]

const container=document.getElementById("container")

function render(){
    let imgDOM=""
    for(let i=0;i<img.length;i++){
        imgDOM += `<img alt="Employee in the company" class="team-img" src="${img[i]}">`
    }
    container.innerHTML=imgDOM
}
render()
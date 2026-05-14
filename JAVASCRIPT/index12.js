// CHALLANGE -1

// let myCourse=["learn CSS Animation","UI Design Fundamentals","Intro to clean Code"]

// function array(arr){
//     for(let i=0;i<arr.size;i++){
//         console.log(arr[i])
//     }
    
// }

// array(myCourse)



// CHALLANGE -2

// localStorage.setItem("person","100")

// let personmoney=localStorage.getItem("person")
// console.log(personmoney)




// CHALLANGE-3
let data=[
    {
        player:"Sahil",
        score:52
    },
    {
        player:"Mark",
        score:41
    }
]
const btnEl=document.getElementById("btn-el")

btnEl.addEventListener("click",function(){
    console.log(data[0].score)
})

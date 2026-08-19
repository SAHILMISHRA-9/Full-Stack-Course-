//Vanilla javacscript variable
let myNamee="Sahil"

// Typescript
let myName: string="Sahil"
let nummberOfWheels: number =4
let isStudent:boolean= false

// Custom type
type Food =string
let favoriteFood: Food ="Pasta"

// type Person={
//     name:string
//     age:number
//     isStudent:boolean
//     address:{
//         street:string
//         city: string
//         country: string
//     }
// }
type Address={
    street:string
    city: string
    country: string
}
type Person={
    name:string
    age:number
    isStudent:boolean
    address?:Address
}

let person:Person={
    name: "Joe",
    age:43,
    isStudent:false,
    address:{
        street:"Zolo hope",
        city:"Pune",
        country:"India"
    }
}
let person2:Person={
    name:"Sahil",
    age:22,
    isStudent:true,
}

let ages:number[] =[100,101]

type UserRole = "guest" | "member" | "admin"
let userRole: UserRole = "admin"


type User ={
    id:number
    username:string
    role:"member" | "contributor" | "admin"
}

type UpdatedUser= Partial<User>
let nextUserId=1
const users: User[]=[
    {id:nextUserId++,username:"john",role:"member"},
    {id:nextUserId++,username:"sahil",role:"contributor"},
    {id:nextUserId++,username:"joe",role:"admin"}
]

function updateUser(id:number , updates:UpdatedUser){
    const foundUser=users.find(user => user.id=== id)
    if(!foundUser){
        console.error("User not found!")
        return
    }
    Object.assign(foundUser,updates)
}

function addNewUser(newUser: Omit<User,"id">):User{
    const user:User ={
        id:nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
}
addNewUser({ username: "naya",role:"member"})


const gamescores=[14,21,33,42,59]
const favouriteThings=["random on roses","whiskers on kittens","bright copper kettles"]
const voters=[{name: "Alice",age:42},{name:"Bob",age:77}]

function getLastItem<Placeholder>(array:Placeholder[]):Placeholder | undefined{
    return array[array.length-1]
}
console.log(getLastItem(gamescores))
console.log(getLastItem(favouriteThings))
console.log(getLastItem(voters))
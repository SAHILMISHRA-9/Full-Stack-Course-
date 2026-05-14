import { EventEmitter } from "node:events";

const customerDetails={
    fullName:'Merry sheep',
    email:'baha@gamil',
    phone:1234567890
}
const emailRequestEmitter = new EventEmitter()

function generateEmail(customer){
    console.log(`Email generated for ${customer.email}`)
}

emailRequestEmitter.on('emialRequest',generateEmail)


emailRequestEmitter.emit('emialRequest',customerDetails)


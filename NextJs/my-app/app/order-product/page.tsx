"use client"
// useRouter only works in client component
import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router=useRouter()
    const handleClick=()=>{
        console.log("Placing your order")
        router.push("/")
        // router.replace("/") replace the current page in the history stack
        // router.back() go to the back page
        // router.forward() go to the forward page
    }
    return(
        <>
        <h1>Order product</h1>
        <button onClick={handleClick}>Place Order</button>
        </>
    )
}
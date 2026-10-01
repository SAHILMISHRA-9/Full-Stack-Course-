"use client"
import { useRouter } from "next/navigation";
import { startTransition } from "react";
// Error boundary must be client component
export default function ErrorBoundary({error, reset}:{
    error: Error;
    reset: ()=>void;
}){
    const router=useRouter()
    const reload=()=>{
        startTransition(()=>{
            router.refresh()
            reset()
        })
    }
    return (
        
        <div>
            <p>{error.message}</p>
            <button onClick={()=> reset()}>Try again</button>
        </div>
    )
}
"use client"
// Error boundary must be client component
export default function ErrorBoundary({error}:{
    error: Error
}){
    return <div>{error.message}</div>
}
import { notFound,redirect } from "next/navigation";
// function to understand error files
function getRandomInt(count: number){
    return Math.floor(Math.random()*count);
}
export default async function reviewdetails({params}:{
    params:Promise<{productId:string;reviewId:string}>
}){
    const random=getRandomInt(2);
    if(random===1){
        throw new Error("Error loading review");
    }
    const {productId,reviewId}=await params
    if(parseInt(reviewId)>1000){
        // notFound(); using redirect instead
        // redirect("/products")
        notFound()
    }
    return(
        <h1>This is review for {reviewId} for product {productId}</h1>
    )
}

import { notFound } from "next/navigation";

export default async function reviewdetails({params}:{
    params:Promise<{productId:string;reviewId:string}>
}){
    const {productId,reviewId}=await params
    if(parseInt(reviewId)>1000){
        notFound();
    }
    return(
        <h1>This is review for {reviewId} for product {productId}</h1>
    )
}
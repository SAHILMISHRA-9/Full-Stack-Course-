export default async function prodoctDetails({params}:{
    params: Promise<{productId:string}>;
}){
    const productId=(await params).productId;
    return(
        <h1>product details {productId}</h1>
    )
}
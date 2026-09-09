export default function ProductDetailsLayout({
    children,
}:{
    Children:React.ReactNode;
}){
    return( <>
    {children}
    <h2>Featured proucts</h2>
    </>
    );
}
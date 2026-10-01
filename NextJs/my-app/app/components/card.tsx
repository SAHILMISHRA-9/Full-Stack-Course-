import { Padyakke_Expanded_One } from "next/font/google"

export const card=({children}:{ children: React.ReactNode})=>{
    const cardStyle={
        padding:"100px",
        margin:"10px",
        boxShadow:") 4pxx 8px 0 rgba(0,0,0,0.2)",
    };
    return <div style={cardStyle}>{children}</div>
}
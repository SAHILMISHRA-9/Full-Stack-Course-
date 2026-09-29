// see here when the file namee is layout.tsx the input state is preserved
// but when we need to when not store the stae we use
// change the file name to template.tsx


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks=[
    {name: "Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot Password", href:"/forgot-password"},
];

export default function AuthLayout({
    children,
}:{
    children:React.ReactNode
}) {
    const [input,setInput]=useState("")
    const pathName=usePathname();
    return(
        <div>
            <div>
                <input value={input} onChange={(e)=> setInput(e.target.value)}></input>
            </div>
            {navLinks.map((link)=>{
                const isActive= pathName=== link.href || (pathName.startsWith(link.href) && link.href!== "/");
                return(
                    <Link 
                        className={isActive? "font-bold mr-4": "text-blue-500 mr-4"} 
                        href={link.href} 
                        key={link.name}
                        // className="text-red-500 font-bold text-2xl mr-4"
                        >
                            {link.name}
                    </Link>
                );
            })}
            {children}
        </div>
    );
}

// import Link from "next/link"

// export default async function NewsArticle({params,searchParams}:{
//     params:Promise<{articleId:string}>;
//     searchParams:Promise<{lang?: "en"|"es"|"fr"}>;
// }){
//     const {articleId}=await params
//     const {lang="en"}=await searchParams
//     return (
//         <div>
//             <h1 className="text-4xl font-bold">News article {articleId}</h1>
//             <p className="mt-4">Reading in {lang}</p>
//             <div className="mt-4">
//                 <Link className="mr-4 text-blue-500" href={`/articles/${articleId}?lang=en`}>English</Link>
//                 <Link className="mr-4 text-blue-500" href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//                 <Link className="mr-4 text-blue-500" href={`/articles/${articleId}?lang=fr`}>French</Link>
//             </div>
//         </div>
//     )
// }

// this is server component and hence we can access params and searchparams with asyn await
// if it was client componet then we cannot use async await for that we hava to use 

"use client"
import Link from "next/link"
import { use } from "react";
export default function NewsArticle({params,searchParams}:{
    params:Promise<{articleId:string}>;
    searchParams:Promise<{lang?: "en"|"es"|"fr"}>;
}){
    const {articleId}= use (params)
    const {lang="en"}= use (searchParams)
    return (
        <div>
            <h1 className="text-4xl font-bold">News article {articleId}</h1>
            <p className="mt-4">Reading in {lang}</p>
            <div className="mt-4">
                <Link className="mr-4 text-blue-500" href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link className="mr-4 text-blue-500" href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link className="mr-4 text-blue-500" href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}

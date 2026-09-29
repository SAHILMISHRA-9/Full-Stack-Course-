import { resolve } from "path"

export default async function blog(){
    await new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Intentional delay")
        },2000)
    })
    return(
        <h1>This is blog</h1>
    )
}
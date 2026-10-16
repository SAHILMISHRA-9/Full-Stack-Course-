import { serverSideFunction } from "../utils/server-utils"

import { ClientSideFunction } from "../utils/client-utils"

export default function ServerRoutePage(){
    const result=serverSideFunction()
    const clientResult= ClientSideFunction()
    return <h1>Server Route- {result} - {clientResult}</h1>
}
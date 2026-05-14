import OpenAI from "openai";
import { resolve } from "path";
import { rootCertificates } from "tls";

const openai = new OpenAI({
   dangerouslyAllowBrowser: true
})

const messages=[
    {
        role : 'system',
        content: 'You are a explainer who explains something complicated to me'
    },
    {
        role:'user',
        content:'Explain me quantum mechanics'
    }
]
const response = await openai.chat.completions.create({
    model:'gpt-4',
    messages:messages
})
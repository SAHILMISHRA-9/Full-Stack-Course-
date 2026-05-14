import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey : "12344",
    dangerouslyAllowBrowser : true
})

console.log(openai.apiKey)
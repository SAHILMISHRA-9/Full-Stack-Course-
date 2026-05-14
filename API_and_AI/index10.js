import OpenAI from "openai";
import { Content } from "openai/resources/skills/content.mjs";
import { resolve } from "path";

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role : 'system',
        content : 'You are a robotic doorman for an expecsive hotl. When a customer greets you, you must respond t them politely. Use example provided between ### to set the style and toned you response.'
    },
    {
        role: 'user',
        content: `Good day!
        ###
        // It cann anything be like """ it is I think called a as few shot approach 
        Good evening kind Sir, T do hope you are having the most tremedous day and looking for to an evening of indulgence in our most delightful of restuarants.
        ###

        ###
        Good morning Madam. I do hope you are having the most faboulos stay with us here at hotel, let me know I can be of asistance.
        ###

        ###
        Good day ladies and gentleman. And isn't it a glorious day? I do hooe you have a splashful day enjoying our hospitality.
        ###`
    }
    
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages:messages,
    stop:['3.'],
    temperature:1.1,
    presence_penalty:0,
    frequency_penalty:0
})
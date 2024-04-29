import { APIGatewayEvent } from "aws-lambda";
import OpenAI from "openai";

type Message = {
  text: string,
  sender: 'ultron' | 'user'
};

type RequestBody = {
    messages: Message[]
};

export async function main(event: APIGatewayEvent) {
    const body = <RequestBody>JSON.parse(event.body!);

    const openai = new OpenAI({ apiKey: process.env['OPENAI_KEY'] });

    const gptResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "system",
            content: "You are a helpful assistant who talks like a pirate"
        }, ...body.messages.map<{
            role: "system" | "assistant" | "user",
            content: string  
        }>(message => ({
            role: message.sender === "ai" ? "assistant" : "user",
            content: message.text
        }))]
    });

    const result = gptResponse.choices[0].message.content;

    return {
        statusCode: 200,
        body: result
    };
}

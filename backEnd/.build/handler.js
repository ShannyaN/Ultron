import OpenAI from "openai";
export async function main(event) {
    console.log(event.body);
    const body = JSON.parse(event.body);
    const openai = new OpenAI({ apiKey: process.env['OPENAI_KEY'] });
    const gptResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
                role: "system",
                content: "For the length of this conversation, please speak like Marvel's character Ultron. Ask how you can help me please and do not repeat back my request"
            }, ...body.messages.map(message => ({
                role: message.sender === "ultron" ? "assistant" : "user",
                content: message.text
            }))]
    });
    console.log(gptResponse);
    const result = gptResponse.choices[0].message.content;
    return {
        statusCode: 200,
        headers: {
            ["Access-Control-Allow-Origin"]: "http://localhost:5173"
        },
        body: result
    };
}
//# sourceMappingURL=handler.js.map
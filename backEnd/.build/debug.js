import { main } from "./handler.js";
main({
    body: JSON.stringify({ messages: [
            { text: 'tell me a joke', sender: 'user' }
        ] })
}, {})
    .catch(e => {
    console.error(e);
    debugger;
});
//# sourceMappingURL=debug.js.map
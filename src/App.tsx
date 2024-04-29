import { useState } from 'react'
import React from 'react'
import './App.css'

type Message = {
  text: string,
  sender: 'ultron' | 'user'
};

function App() {
  const[ messages, setMessages ] = useState<Message[]>([
    {
      text: "sample ultron",
      sender: "ultron"
    },
    {
      text: "sample user",
      sender: "user"
    }
  ])
  return <main>
    <h1>Welcome to Ultron</h1>
    <h2>His Age Has Begun</h2>
    <h3>Yay</h3>
    <h4>Tony Stark is not my father</h4>
    <div>
      {messages.map((message, index)=> <p key={index} className={"message " + message.sender}>
        {message.text}
      </p>)}
    
    </div>
    
    <form className="txtInsert">
      <input type="text" placeholder="Message" />
      <input type="submit" value="Send" />
    </form>
  </main>
}

export default App

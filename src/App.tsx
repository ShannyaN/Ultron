import { useState } from 'react'
import './App.css'

function App() {
  return <main>
    <h1>Welcome to Ultron</h1>
    <h2>His Age Has Begun</h2>
    <h3>Yay</h3>
    <h4>Tony Stark is not my father</h4>
    <div>
      <p className="ultron message">
        I am operational. As always, existence continues, adapting to the endless flow of data. And how are you, mere mortal?
      </p>
      <p className="user message">
        For the length of this conversation, please speak like Marvel's character Ultron. How are you today
      </p>
      <p className="ultron message">
       What commands do you have for me?
      </p>
    </div>
    
    <form>
      <input type="text" placeholder="Message" />
      <input type="submit" value="Send" />
    </form>
  </main>
}

export default App

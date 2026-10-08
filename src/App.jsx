import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('Welcome to my website!')

  return (
    <main className="app">
      <h1>My Website</h1>
      <p className="message">{message}</p>

      <div className="buttons">
        <button onClick={() => setMessage('You clicked Button 1!')}>
          Button 1
        </button>

        <button onClick={() => setMessage('You clicked Button 2!')}>
          Button 2
        </button>
      </div>
    </main>
  )
}

export default App

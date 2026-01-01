import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Cooked Playlist</h1>
        <form action="#">
          <input type="text" placeholder="Enter Your Spotify Playlist URL" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  )
}

export default App

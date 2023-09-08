import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Route, Routes } from 'react-router-dom'
import Chat from './Components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Chat />}></Route>
    </Routes>
    </>
  )
}

export default App

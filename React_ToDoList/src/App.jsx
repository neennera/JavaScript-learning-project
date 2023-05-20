import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoWrapper from './componant/ToDoWrapper'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'> 
      <div className='column' style={{width:"30%"}}>
        <ToDoWrapper/>
      </div>
      <div className='column' style={{width:"70%"}}>
        <h1>12:05:06</h1>
      </div>
    </div>
  )
}

export default App

// demo-react
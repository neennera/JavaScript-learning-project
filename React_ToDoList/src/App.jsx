import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoWrapper from './componant/ToDoWrapper'
import HeadingCover from './componant/HeadingCover'

function App() {
  return (
    <div className='App'> 
      <div className='column' style={{width:"30vw"}}>
        <ToDoWrapper/>
      </div>
      <div className='column' style={{width:"60vw"}}>
        <HeadingCover/>
      </div>
    </div>
  )
}

export default App

// demo-react
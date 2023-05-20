import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListOFItems from './componant/ListOfItems'

function App() {
  const [count, setCount] = useState(0)
  const ToDoLists =[
    {task:"รดน้ำต้นไม้", completed:0},
    {task:"รีดผ้า", completed:1},
    {task:"จัดตู้โชว์ของสะสม", completed:0},
    {task:"กินข้าว", completed:0}
  ]
  return (
    <div className='App'> 
      <div className='column' style={{width:"30%"}}>
        <h1 className='title'>To do List</h1>
        <ListOFItems ToDoLists={ToDoLists}/>
        <h2>More task</h2>
      </div>
      <div className='column' style={{width:"70%"}}>
        <h1>12:05:06</h1>
      </div>
    </div>
  )
}

export default App

// demo-react
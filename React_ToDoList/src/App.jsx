import react, { useState } from 'react'
import './App.css'
import ToDoWrapper from './componant/ToDoWrapper'
import HeadingCover from './componant/HeadingCover'

function App() {
  const [completePersent, setCompletePersent] = useState(0)

  const changeCompletePersent = value  => {
    setCompletePersent(value)
  }

  return (
    <div className='App'> 
      <div style={{width:"30vw"}}>
        <ToDoWrapper changeCompletePersent={changeCompletePersent}/>
      </div>
      <div style={{width:"60vw"}}>
        <HeadingCover completePersent={completePersent}/>
      </div>
    </div>
  )
}

export default App

// demo-react
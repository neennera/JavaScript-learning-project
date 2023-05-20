import React, {useState} from "react";
import AddItemBar from './AddItemBar'
import ToDoListItem from "./ToDoListItem";
import "./ToDoWrapper.css"

import {v4 as uuidv4} from 'uuid' // npm install uuid ก่อน
uuidv4(); // ทำการ innitialize

function ToDoWrapper(){
    // สร้าง todos ไว้เก็บ task ต่างๆ
    const [toDoList, setToDoList] = useState([])

    // สร้าง addToDo function เผื่อเพิ่ม task
    const addToDo = todo => {
        setToDoList([...toDoList, {id: uuidv4(), task:todo, completed:false, isEditing:false}])
        
    }

    const ToggleCompleted = id =>{
        // console.log(toDoList)
        setToDoList(toDoList.map( todo => todo.id === id ? {...todo, completed : !todo.completed } : todo))
    }
     
    return (
        <>
        <h1 className='title'>To do List</h1>
        <div className="listContainer">
            {toDoList.map((item,index) => <ToDoListItem  taskItem={item} key={index} ToggleCompleted={ToggleCompleted}/>)}
        </div>
        <AddItemBar addToDo={addToDo}/>
        </>
    );
}
export default ToDoWrapper;
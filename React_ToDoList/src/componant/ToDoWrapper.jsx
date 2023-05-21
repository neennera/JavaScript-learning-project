import React, {useState} from "react";
import AddItemBar from './AddItemBar'
import ToDoListItem from "./ToDoListItem";
import EditItemBar from "./EditItemBar";
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
        setToDoList(toDoList.map( todo => todo.id === id ? {...todo, completed : !todo.completed } : todo))
    }

    const deleteToDo = id => {
        setToDoList(toDoList.filter(todo => todo.id !== id))
    }

    const editToDoIsEditing = id => {
        setToDoList(toDoList.map( todo => todo.id === id ? {...todo, isEditing:!todo.isEditing} : todo))
    }

    const editTask = (newTask, id) => {
        setToDoList(toDoList.map( todo => todo.id === id ? {...todo, task: newTask ,isEditing:!todo.isEditing} : todo))

    }
     
    return (
        <div class="wrapperContainer">
            <h1 className='title'>To do List</h1>
            <div className="listContainer">
                {toDoList.map((item,index) => 
                    // normal we not use () nut since we use if-else -> we put ()
                    (item.isEditing ? (
                        // is editing -> show edit bar
                        <EditItemBar editTask={editTask} taskItem={item}  />
                    ) : (
                        // if not show only task
                        <ToDoListItem  taskItem={item} key={index} 
                        ToggleCompleted={ToggleCompleted} deleteToDo={deleteToDo} editToDoIsEditing={editToDoIsEditing}/>
                    ))
                    )}
            </div>
            <AddItemBar addToDo={addToDo}/>
        </div>
    );
}
export default ToDoWrapper;
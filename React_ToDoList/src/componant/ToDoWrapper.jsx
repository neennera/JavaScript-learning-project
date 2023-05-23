import React, {useState, useEffect} from "react";
import AddItemBar from './AddItemBar'
import ToDoListItem from "./ToDoListItem";
import EditItemBar from "./EditItemBar";
import "./ToDoWrapper.css"

import {v4 as uuidv4} from 'uuid' // npm install uuid ก่อน
uuidv4(); // ทำการ innitialize

function ToDoWrapper({changeCompletePersent}){
    // สร้าง todos ไว้เก็บ task ต่างๆ
    const [toDoList, setToDoList] = useState([])

    // สร้าง addToDo function เผื่อเพิ่ม task
    const addToDo = todo => {
        let tmp = [...toDoList]
        tmp = [...tmp, {id: uuidv4(), task:todo, completed:false, isEditing:false}]
        setToDoList(tmp)
    }

    const ToggleCompleted = id =>{
        let tmp = [...toDoList]
        tmp = tmp.map( todo => todo.id === id ? {...todo, completed : !todo.completed } : todo)
        setToDoList(tmp)        
    }

    const deleteToDo = id => {
        let tmp = [...toDoList]
        tmp = tmp.filter(todo => todo.id !== id)
        setToDoList(tmp)
    }

    const editToDoIsEditing = id => {
        setToDoList(toDoList.map( todo => todo.id === id ? {...todo, isEditing:!todo.isEditing} : todo))
    }

    const editTask = (newTask, id) => {
        setToDoList(toDoList.map( todo => todo.id === id ? {...todo, task: newTask ,isEditing:!todo.isEditing} : todo))
    }

    useEffect(() => {
        const tmp = (toDoList.filter(todo => todo.completed === true).length / toDoList.length *100)
        const newPersent =  toDoList.length === 0 ? 0 : tmp
        changeCompletePersent(Math.round(newPersent))
      }, [toDoList]);
     
    return (
        <div className="wrapperContainer">
            <h1 className='title'>To do List</h1>
            <div className="listContainer">
                {toDoList.map((item,index) => 
                    (item.isEditing ? (
                        <EditItemBar editTask={editTask} taskItem={item}  />
                    ) : (
                        <ToDoListItem  taskItem={item} key={index} 
                        ToggleCompleted={ToggleCompleted} deleteToDo={deleteToDo}
                        editToDoIsEditing={editToDoIsEditing} />
                    ))
                    )}
            </div>
            <AddItemBar addToDo={addToDo}/>
        </div>
    );
}
export default ToDoWrapper;
import React from "react";
import "./ToDoList.css"

const ToDoList = (props) =>{
    return (
        <div className="toDoBox">
            <input className="inputBox" type="checkbox" checked={props.completed}/>
            <p>{props.task}</p>
        </div>
    );
}

export default ToDoList;
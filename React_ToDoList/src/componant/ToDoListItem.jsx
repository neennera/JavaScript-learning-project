import React from "react";
import "./ToDoListItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoListItem = ({taskItem, ToggleCompleted}) =>{
    
    return (
        <div className="toDoBox">
            <input className="inputBox" type="checkbox" checked={taskItem.completed}
                onClick={() => ToggleCompleted(taskItem.id)}/>
            <p>{taskItem.task}</p>
            <div className="iconBox">
                <FontAwesomeIcon className="FontAwesome" icon={faPenToSquare}/>
                <FontAwesomeIcon className="FontAwesome" icon={faTrash}/>
            </div>
            
        </div>
    );
}

export default ToDoListItem;
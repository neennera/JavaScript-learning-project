import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoListItem = ({taskItem, ToggleCompleted, deleteToDo, editToDoIsEditing}) =>{
    
    return (
        <div className="Bar">
            <div className="mainBox">
                <div style={{display:"inline-flex"}}>
                    <input className="checkBox" type="checkbox" checked={taskItem.completed}
                    onClick={() => ToggleCompleted(taskItem.id)}/></div>
                <div style={{display:"inline-flex"}}><p style={{margin : "10px"}}>{taskItem.task}</p></div>
                
            </div>
            
            <div className="smallBox">
                <FontAwesomeIcon className="FontAwesome" icon={faPenToSquare}
                    onClick={() => editToDoIsEditing(taskItem.id)}/>
                <FontAwesomeIcon className="FontAwesome" icon={faTrash} onClick={() => deleteToDo(taskItem.id)}/>
            </div>
            
        </div>
    );
}

export default ToDoListItem;
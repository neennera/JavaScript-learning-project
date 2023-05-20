import React from "react";
import ToDoList from "./ToDoList";
import "./ListOfItems.css"

function ListOfItems(props){
    const tasks = props.ToDoLists;
    return (
        <div className="listContainer">
            {tasks.map((item) => <ToDoList task={item.task} completed={item.completed}/>)}
        </div>
    );
}

export default ListOfItems
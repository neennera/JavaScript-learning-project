import React, {useState} from "react";

function EditItemBar({editTask, taskItem}){ //รับฟังก์ชั่น addToDo (ต้องสะกดให้ตรง)
    const [value, setValue] = useState(taskItem.task);

    const handleSubmit = e =>{
        e.preventDefault();
        editTask(value, taskItem.id)
        setValue("")
    }
    return (
        <form className="Bar" onSubmit={handleSubmit}>
          <div className="mainBox">
              <input style={{width:"90%"}} type='text' className="toDoInput" placeholder="Update Task"
                value={value} onChange={(e)=> setValue(e.target.value)}/>
          </div>
          <div className="smallBox">
            <input type="submit" value="Update" className="Button"/>
          </div>
        </form>
    );
}

export default EditItemBar
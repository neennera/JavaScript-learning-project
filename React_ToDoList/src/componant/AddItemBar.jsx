import React, {useState} from "react";

function AddItemBar({addToDo}){ //รับฟังก์ชั่น addToDo (ต้องสะกดให้ตรง)
    const [value, setValue] = useState("");
    // เราจะส่งค่าที่ได้จาก รnput ขึ้นไปหา todosWrapper ผ่าน stage
    const handleSubmit = e =>{
        // ปกติหากเราหก submit หน้าเว็บจะรีโหลด เราจะไปปิดมันไว้
        e.preventDefault();
        // send value ไปยัง parent ผ่าน function addToDo
        addToDo(value)

        setValue("")
    }
    return (
        <form className="Bar" onSubmit={handleSubmit}>
          <div className="mainBox">
            <input style={{width:"90%"}} type='text' className="toDoInput" placeholder="What task you want to do?"
              value={value} onChange={(e)=> setValue(e.target.value)}/>
          </div>
          <div className="smallBox">
            <input type="submit" value="Add Task" className="Button"/>
          </div>
        </form>
    );
}

export default AddItemBar
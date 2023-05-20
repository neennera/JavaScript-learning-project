import React, {useState} from "react";

import "./AddItemBar.css"

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
        <form className="taskInputBar" onSubmit={handleSubmit}>
          <input type='text' className="toDoInput" placeholder="What task you want to do?"
            value={value} onChange={(e)=> setValue(e.target.value)}/>
            {/* เพิ่ม use stage มาเก็บค่าจาก input ของ form  หาก change ให้เก็บค่าไว้ใน value*/}
            {/* พอกด submit จะเอา value ไปเพิ่มใน toDoList ผ่าน AddToDo */}
            {/* ให้ value={value} เพื่อที่พอเรากด add เราจะเคลียร์ค่าใน form*/}
          <input type="submit" value="Add Task" className="Button"/>
        </form>
    );
}

export default AddItemBar
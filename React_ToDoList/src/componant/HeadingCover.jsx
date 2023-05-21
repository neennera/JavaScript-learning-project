import React, { useEffect, useState } from "react";
import "./HeadingCover.css"

function HeadingCover(){
    const [clock, setClock] = useState()

    useEffect(()=>{
        setInterval(()=>{
            const date = new Date();
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const seconds = date.getSeconds()
            const str = ` ${hours}:
            ${minutes < 10 ? `0${minutes}` : minutes}:
            ${seconds < 10 ? `0${seconds}` : seconds} `

            setClock(str)
        },1000)
    },[])

    return (
        <div className="Wrapper">
            <h1>{clock}</h1>
            
            
        </div>
        
    );
}
export default HeadingCover
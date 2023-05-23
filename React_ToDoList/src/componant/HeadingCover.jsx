import React, { useEffect, useState } from "react";
import TheProgressBar from "./TheProgressBar";
import "./HeadingCover.css"
import YouTubePlayer from "./YouTubePlayer";

function HeadingCover(props){
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
        <div className="headerContainer">
            <h1>{clock}</h1>
            <TheProgressBar complete={props.completePersent}/>
            {/* <YouTubePlayer/> */}
        </div>
        
    );
}
export default HeadingCover
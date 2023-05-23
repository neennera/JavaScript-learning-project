import React from "react";
import "./TheProgressBar.css"
function TheProgressBar(props){
    const completed = {width:props.complete.toString() + "%"};
    return (
        <>
            <div className="progressbarWrapper">
                <div className="containerStyles">
                    <div className="fillerStyles" style={completed}>
                        <p className="labelStyles">{props.complete.toString() + "%"}</p>
                    </div>            
                </div>
          </div>
        </>
    );
}

export default TheProgressBar
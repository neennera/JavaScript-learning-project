import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import YouTube from 'react-youtube';

const YouTubePlayer = () =>{
    const [isPlaying, setIsPlaying] = useState(true)
    const [isShowing, setIsShowing] = useState(true)
    const videoRef = useRef()

    const toggleIsShowing = () => {
        setIsShowing(!isShowing)
    }

    useEffect(() => {
        console.log(isShowing)
    }, [isShowing]);

    const opts = {
        height: '300',
        width: '640',
        playerVars: {
            autoplay: 1,
       }
    }

    
    const handlePlay= () =>{
        // this.state.playerPlayVideo.playVideo()
        console.log(videoRef.current.props.onPlay)
        videoRef.current.props.onPlay=0
        // event.videoRef.pauseVideo()
        // videoRef.state.playerPlayVideo.playVideo()
    }

    const handlePause= () =>{
        // this.state.playerPlayVideo.pauseVideo()
        // console.log(videoRef.pauseVideo());

        // videoRef.state.playerPlayVideo.pauseVideo()
    }

    
    
    return (
        <div style={{marginTop:"50px"}}>

            <div>
                {isShowing == true ? 
                 (<FontAwesomeIcon className="musicFontAwesome" icon={faEyeSlash} 
                    onClick={()=>toggleIsShowing()}/>)
                 : (<FontAwesomeIcon className="musicFontAwesome" icon={faEye} 
                    onClick={()=>toggleIsShowing()}/>)
                }
                <FontAwesomeIcon className="musicFontAwesome" icon={faPlay} 
                    onClick={() => handlePlay()}/>
                <FontAwesomeIcon className="musicFontAwesome" icon={faPause}
                    onClick={() => handlePause()}/>
                
            </div>
            <div style={{height:"300px"}}>
                <div style={{display : isShowing == true ? "block": "none" }}>
                    <YouTube videoId="jfKfPfyJRdk" ops={opts} ref={videoRef} onPlay={1}/>;
                    
                    {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}
                    {/* <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1" 
                    width="560" height="300px" title="lofi hip hop radio 📚 "
                    onPlay={isPlaying} frameborder="0" autoplay> */}
                    {/* </iframe> */}
                </div>
            </div>
        </div>
    );
}
export default YouTubePlayer
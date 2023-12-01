"use client"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleButton = () => {
        setIsOpen((open)=> !open )
    }

    const option = {
        width : "300",
        height: "250"
    }

    const Play = () => {
        return(
        <div className="fixed bottom-2 right-2" >
            <button className="bg-color-secondary float-right px-2 mb-1"
                onClick={handleButton} >X</button>
            <YouTube videoId={youtubeId} 
            onReady={(e) => e.target.pauseVideo()}
            opts={option}  
            onError={() => alert('video error !! please try another video')}/>
        </div>
        )
    }

    const ClosePlay = () => {
        return(
            <div >
                <button className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark hover:bg-color-accent rounded text-xl shadow-xl transition-all "
                onClick={handleButton}>
                Tonton trailer
                </button>
            </div>
        )
    }

    return (
        isOpen ? <Play/> : <ClosePlay/>
    )
}

export default VideoPlayer
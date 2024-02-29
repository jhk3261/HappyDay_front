import React, { useEffect, useRef, useState } from "react";
import styles from '../css/Music.module.css';
import TapBar from "./TapBar";
import PrevIcon from "../img/prev_icon.svg";
import NextIcon from "../img/next_icon.svg";
import PlayIcon from "../img/play_icon.svg";
import StopIcon from "../img/stop_icon.svg";
import VolumeOn from "../img/volumon_icon.svg";
import VolumeOff from "../img/volumoff_icon.svg";
import Draggable from "react-draggable";

import musics from "../asset/data";

function Music({props: {musicNumber, setMusicNumber}, onHide,zIndex}){
    const width = 17.25;
    const font = 'Soyananum9';
    const position = 'static';

    // const handleDoubleClickZip = () => {
    //     handleDoubleClick("music");
    // };

    //play&stop
    const [Play, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(25);
    const [showvolume, setShowVolume] = useState(true);

    const audioRef = useRef();

    function handleLoadStart(e){
        const src = e.nativeEvent.srcElement.src;
        const audio = new Audio(src);
        audio.onloadedmetadata = function(){
            if(audio.readyState > 0){
                setDuration(audio.duration)
            }
        }
        if(Play) {audioRef.current.play()};
    }
    function PlayClick(e){
        if(Play) {
            audioRef.current.pause();
            setPlay(false);
        }else{
            audioRef.current.play();
            setPlay(true);
        }
    }
    function handleTimeUpdate(){
        const currentTime = audioRef.current.currentTime;
        setCurrentTime(currentTime)
    }
    function changeCurrentTime(e){
        const currentTime = Number(e.target.value);
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime);
    }
    function handleNextPrev(n){
        setMusicNumber(value=>{
            if(n > 0){
                return value + n > musics.length - 1 ? 0 : value + n;
            }
            return value + n < 0 ? musics.length -1 : value + n;
        })
    }
    function VolumeOnOff(e) {
        setShowVolume((current)=> !current);
        if(volume === 25){
            setVolume(0);
        } else {
            setVolume(25);
        }
    }
    function EndedAudio() {
        return handleNextPrev(1)
    }
    useEffect(()=>{
        audioRef.current.volume = volume / 100;
    },[volume])

    const playicon = PlayIcon;
    const stopicon = StopIcon;



    return(
        <div >
            <Draggable handle=".Head">
                <div className={styles.Music}>
                    <div className="Head">
                        <TapBar title={"music"} width={width} font={font} onHide={onHide} position={position}/>
                    </div>
                    <div className={styles.PlayerWrap}>
                        <div className={styles.CdWrap}>
                            <div id="Cd" className={styles.Cd} style={{animationPlayState: Play ? 'running':'paused',backgroundImage: `url(${musics[musicNumber].thumbnail})`, backgroundSize:"cover"}}>
                            </div>
                            <div className={styles.Cd2}></div>
                            <div className={styles.Cd3}></div>
                        </div>
                        <div className={styles.MusicInfo}>
                            <div className={styles.MusicTitle}>
                                <span className={styles.title}>{musics[musicNumber].title}</span><span className={styles.name}> - {musics[musicNumber].artist}</span>
                            </div>
                            <div className={styles.PlayerBar}>
                                <input type="range" min={0} max={duration} value ={currentTime} onChange={changeCurrentTime} />
                            </div>
                            <div className={styles.MusicBtn}>
                                <div className={styles.PrevBtn} onClick={()=> handleNextPrev(-1)}>
                                    <img src={PrevIcon} alt="icon"/>
                                </div>
                                <div className={styles.PlayBtn} onClick={PlayClick}>
                                    <img src={Play ? playicon:stopicon} alt="icon" style={Play ? {width: "1.15rem"} : {width: "1.25rem", marginLeft:".15rem"}}/>
                                </div>
                                <div className={styles.NextBtn} onClick={()=> handleNextPrev(1)}>
                                    <img src={NextIcon} alt="icon"/>
                                </div>
                                <div className={styles.VolumeBtn} onClick={VolumeOnOff}>
                                    <img src={showvolume ? VolumeOn: VolumeOff} alt="icon"/>
                                </div>
                            </div>
                        </div>
                        <audio src={musics[musicNumber].src} hidden ref={audioRef} onTimeUpdate={handleTimeUpdate} onLoadStart={handleLoadStart} onEnded={EndedAudio}></audio>
                    </div>
                </div>
        </Draggable>
        </div>
    )
}

export default Music;
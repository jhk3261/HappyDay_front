import React, {useState} from "react";
import styles from "../css/Launcher.module.css"
import TapBar from "./TapBar";
import Btns from "./Btns";
import MainLogo from '../img/main.gif';
import Draggable from "react-draggable";

function Launcher({onZipClick, onLettersClick, onHide}) {
    const width = 45;
    const font = 'Galmuri11';

    return ( 
        <div className={styles.DivWrap} >
            <Draggable handle=".Head">
                <div className={styles.Launcher} >
                    <div className="Head">
                        <TapBar title={"航海;항해"} width={width} font={font} onHide={onHide}/>
                    </div>
                    <div className={styles.ImgDiv}>
                        <img src={MainLogo} alt="^_^" className={styles.TitleImg}/>  
                    </div>
                    <Btns onZipClick={onZipClick} onLettersClick={onLettersClick}/>
                </div>
            </Draggable>
        </div>
    )
}

export default Launcher;
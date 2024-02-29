import React, {useState} from "react";
import styles from "../css/Launcher.module.css"
import TapBar from "./TapBar";
import Btns from "./Btns";
import MainLogo from '../img/main.gif';
import Draggable from "react-draggable";
import {useMediaQuery} from 'react-responsive';

function Launcher({onZipClick, onLettersClick, onHide}) {
    const Desktop =({children}) => {
        const isDesktop = useMediaQuery({minWidth:1440})
        return isDesktop ? children:null
    }
    const Mobile =({children}) => {
        const isMobile = useMediaQuery({maxWidth:380})
        return isMobile ? children:null
    }

    const width = 45;
    const font = 'Galmuri11';

    const width_m = 20;

    return ( 
        <>
            <Desktop>
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
            </Desktop>
            <Mobile>
                <div className={styles.DivWrap} >
                    <div className={styles.Launcher} >
                        <div className="Head">
                            <TapBar title={"航海;항해"} width={width_m} font={font} onHide={onHide}/>
                        </div>
                        <div className={styles.ImgDiv}>
                            <img src={MainLogo} alt="^_^" className={styles.TitleImg}/>
                            <Btns onZipClick={onZipClick} onLettersClick={onLettersClick}/>
                        </div>
                        
                    </div>
                </div>
            </Mobile>
        </>
    )
}

export default Launcher;
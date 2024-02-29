import React from "react";
import styles from "../css/TapHeader.module.css";
import {useMediaQuery} from 'react-responsive';


function TapHeader({title, width, font}) {
    const Desktop =({children}) => {
        const isDesktop = useMediaQuery({minWidth:1440})
        return isDesktop ? children:null
    }
    const Mobile =({children}) => {
        const isMobile = useMediaQuery({maxWidth:380})
        return isMobile ? children:null
    }
    return (
        <>
            <Desktop>
                <div className={styles.TapHeader} style={{width:`calc(${width}rem - 2.5rem`}}>
                    <div className={styles.Line}>
                        <hr />
                        <hr />
                    </div>
                    <p style={{fontFamily:font}}>{title}</p>
                    <div className={styles.Line}>
                        <hr />
                        <hr />
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div className={styles.TapHeader} style={{width:`calc(${width}rem - 1.25rem`}}>
                    <div className={styles.Line}>
                        <hr />
                        <hr />
                    </div>
                    <p style={{fontFamily:font}}>{title}</p>
                    <div className={styles.Line}>
                        <hr />
                        <hr />
                    </div>
                </div>
            </Mobile>
        </>
        
    )
}

export default TapHeader;
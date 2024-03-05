import React from "react";
import styles from "../css/TapBar.module.css";
import Xbtn from "./Xbtn";
import TapHeader from "./TapHeader";

function TapBar({title, width, font, position, onHide}) {
    const handleHideClick = () => {
        console.log("x클릭")
        onHide();
    };

    return (
        <div className={styles.TapBar} style={{position:position}}>
            <Xbtn onClick={handleHideClick} onTouchStart={handleHideClick}/>
            <TapHeader title={title} width={width} font={font}/>
        </div>
    )
}

export default TapBar;
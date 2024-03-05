import React from "react";
import styles from "../css/Xbtn.module.css";
import xicon from "../img/x_icon.svg";

function Xbtn({onClick, onTouchStart}) {
    return (
        <>
            <div className={styles.Xbtn} onClick={onClick} onTouchStart={onTouchStart}>
                <img src={xicon} alt="x" />
            </div>
        </>
    )
}

export default Xbtn;
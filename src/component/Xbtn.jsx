import React from "react";
import styles from "../css/Xbtn.module.css";
import xicon from "../img/x_icon.svg";

function Xbtn({onClick}) {
    return (
        <>
            <div className={styles.Xbtn} onClick={onClick}>
                <img src={xicon} alt="x" />
            </div>
        </>
    )
}

export default Xbtn;
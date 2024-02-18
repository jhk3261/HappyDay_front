import React from "react";
import styles from "../css/TapHeader.module.css";

function TapHeader({title, width, font}) {
    return (
        <>
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
        </>
    )
}

export default TapHeader;
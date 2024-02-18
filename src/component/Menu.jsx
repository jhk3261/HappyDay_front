import React, { useEffect, useRef} from 'react';
import styles from "../css/Menu.module.css"


function Menu({text, imgsrc, isSelected, onClick, onDoubleClick}){
    const handleClick = () => {
        onClick();
    };
    const handleDoubleClick = () => {
        onDoubleClick(); // 더블클릭 시 해당 컴포넌트 표시
        console.log("dc")
    };
    return (
        <div className={styles.Wrap} onClick={handleClick} onDoubleClick={handleDoubleClick}>
            <img src={imgsrc} className={styles.IconImg} alt="icon" />
            <div id='Btn' className={`${styles.Btn} ${isSelected ? styles.selected : ''}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Menu
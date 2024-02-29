import React, { useState} from 'react';
import styles from "../css/MenuBar.module.css"
import Menu from "./Menu";
import file from '../img/pixel-file.png';
import pot from '../img/pixel-pot.png';
import video from '../img/pixel-video.png';
import Bear from '../img/pixel-bear.png'
import heart from '../img/pixel-heart.png'

function MenuBar({handleDoubleClick}) {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu === selectedMenu ? null : menu);
    };

    return (
        <div className={styles.MenuWrap}>
            <Menu text="2023 zip" imgsrc={file} isSelected={selectedMenu === "zip"} onClick={() => handleMenuClick("zip")}  onDoubleClick={() => handleDoubleClick("zip")}/>
            <Menu text="music" imgsrc={pot} isSelected={selectedMenu === "music"} onClick={() => handleMenuClick("music")} onDoubleClick={() => handleDoubleClick("music")}/>
            <Menu text="movie" imgsrc={video} isSelected={selectedMenu === "movie"} onClick={() => handleMenuClick("movie")} onDoubleClick={() => handleDoubleClick("movie")}/>
            <Menu text="letters" imgsrc={heart} isSelected={selectedMenu === "letters"} onClick={() => handleMenuClick("letters")} onDoubleClick={() => handleDoubleClick("letters")}/>
            <Menu text="launcher" imgsrc={Bear} isSelected={selectedMenu === "launcher"} onClick={() => handleMenuClick("launcher")} onDoubleClick={() => handleDoubleClick("launcher")}/>
        </div>
    )
}

export default MenuBar;
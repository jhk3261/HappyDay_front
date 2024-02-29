import styles from "../css/Zip.module.css"
import TapBar from "./TapBar";
import gif01 from '../img/2023zip/1.gif'
import gif02 from '../img/2023zip/2.gif'
import gif031 from '../img/2023zip/3-1.gif'
import gif032 from '../img/2023zip/3-2.gif'
import gif04 from '../img/2023zip/4.gif'
import gif05 from '../img/2023zip/5.gif'
import gif06 from '../img/2023zip/6.gif'
import gif071 from '../img/2023zip/7-2.gif'
import gif072 from '../img/2023zip/7-3.gif'
import gif08 from '../img/2023zip/8.gif'
import gif09 from '../img/2023zip/9.gif'
import gif10 from '../img/2023zip/10.gif'
import gif111 from '../img/2023zip/11.gif'
import gif112 from '../img/2023zip/11-2.gif'
import gif12 from '../img/2023zip/12.gif'
import gif13 from '../img/2023zip/13.gif'
import React, { useState } from "react";
import Draggable from "react-draggable";



function Zip({onHide}){
    const width = 51;
    const font = 'Soyananum9';

    // const handleDoubleClickZip = () => {
    //     handleDoubleClick("zip");
    // };

    return(
        <div>
            <Draggable handle=".Head" >
                <div className={styles.Zip}>
                    <div className="Head" style={{position:'fixed'}}>
                        <TapBar title={"2023 vernon zip"} width={width} font={font} onHide={onHide}/>
                    </div>
                    <div className={styles.GifWrap}>
                        <div className={styles.Gifs}>
                            <img src={gif01} alt="gif"/>
                            <p>230107 GoldenDisk</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif02} alt="gif"/>
                            <p>230203 InsideSeventeen</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif031} alt="gif"/>
                            <p>230311 CarrotLand</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif032} alt="gif"/>
                            <p>230311 CarrotLand</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif04} alt="gif"/>
                            <p>230428 MusicBank-SUPER</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif05} alt="gif"/>
                            <p>230506 It's Live</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif06} alt="gif"/>
                            <p>230624 Kenzo</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif071} alt="gif"/>
                            <p>230722 Follow</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif072} alt="gif"/>
                            <p>230722 Follow</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif08} alt="gif"/>
                            <p>Ima -Even if the world ends tomorrow-</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif09} alt="gif"/>
                            <p>230914 Music Expo</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif10} alt="gif"/>
                            <p>231105 God Of Music</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif111} alt="gif"/>
                            <p>231129 mama</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif112} alt="gif"/>
                            <p>231129 mama</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif12} alt="gif"/>
                            <p>231206 FNS</p>
                        </div>
                        <div className={styles.Gifs}>
                            <img src={gif13} alt="gif"/>
                            <p>2023 Album of the Year #SEVENTEEN</p>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    )
}

export default Zip;
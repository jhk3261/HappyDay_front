import React, {useState} from "react";
import styles from '../css/Movie.module.css';
import Draggable from "react-draggable";

import TapBar from "./TapBar";

function Movie({onHide}){
    const width = 36.375;
    const font = 'Soyananum9';

    // const handleDoubleClickZip = () => {
    //     handleDoubleClick("movie");
    // };

    return(
        <div>
            <Draggable handle=".Head">
                <div className={styles.Movie} >
                    <div className="Head">
                        <TapBar title={"movie"} width={width} font={font} onHide={onHide}/>
                    </div>
                    <div className={styles.TopWrap}>
                        <div className={styles.TopRight}>
                            <span>PLAY</span>
                            <span>▶</span>
                        </div>
                        <span className={styles.TopLeft}>--:--</span>
                    </div>
                    {/* <iframe className={styles.YtbPlayer}/> */}
                    <div className={styles.NextBtn}><span>NEXT</span></div>
                </div>
            </Draggable>
        </div>
    )
}

export default Movie;
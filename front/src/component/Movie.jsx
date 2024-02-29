import React, {useState} from "react";
import styles from '../css/Movie.module.css';
import Draggable from "react-draggable";
import YouTube from 'react-youtube';

import TapBar from "./TapBar";

function Movie({onHide, }){
    const width = 36.375;
    const font = 'Soyananum9';

    // const [playlistItems, setPlaylistItems] = useState([]);
    // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    // const [player, setPlayer] = useState(null);

    // useEffect(() => {
    //     // YouTube Data API를 사용하여 사용자의 재생목록 가져오기
    //     const fetchPlayListItems = async () => {
    //         try {
    //             const response = await fetch(
    //             `[강지희] [오후 7:55] https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&status=&playlistId=PLTLVsYxu0csPJvPogAaNxL8QuETuqLsrj&key=AIzaSyCGJcSRteM6J2Hj53bR1oiGscurONrW0TA`
    //         );
    //             const data = await response.json();
    //             setPlaylistItems(data.items);
    //         } catch (error) {
    //         console.error('Error fetching playlist items:', error);
    //         }
    //     };
    
    //     fetchPlayListItems();
    // }, []);
    
    // const onPlayerReady = (event) => {
    //     setPlayer(event.target);
    //     playVideo(currentVideoIndex);
    // };

    // const playVideo = (index) => {
    //     if (player && playlistItems.length > 0) {
    //         const videoId = playlistItems[index].snippet.resourceId.videoId;
    //         player.loadVideoById(videoId);
    //         setCurrentVideoIndex(index);
    //     }
    // };
    // const nextVideo = () => {
    //     const nextIndex = (currentVideoIndex + 1) % playlistItems.length;
    //     playVideo(nextIndex);
    // };
    return(
        <div >
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
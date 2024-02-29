import React, { useState, useEffect } from 'react';
import styles from '../css/Headers.module.css'
import LogoImg from '../img/왹버곰얼굴(선구리).png'

function Headers(){
    const [CurrentTime, setCurrentTime] = useState(new Date())
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const year = CurrentTime.getFullYear();
    const month = ('0'+ (CurrentTime.getMonth() + 1)).slice(-2);
    const date = ('0'+ CurrentTime.getDate()).slice(-2);
    const hour = ('0'+ CurrentTime.getHours()).slice(-2);
    const minutes = ('0'+ CurrentTime.getMinutes()).slice(-2);
    const formattedTime = `${hour}:${minutes}`
    const formattedDate = `${year}.${month}.${date}`
    return (
        <>
            <div className={styles.header}>
                <div className={styles.LeftHeder}>
                    <div className={styles.logo}>
                        <img className={styles.LogoImg} src={LogoImg} alt="로고"/>
                    </div>
                    <div className={styles.SubTitle}>
                        <p>liebe wieder, lebe wieder</p>
                    </div>
                </div>
                <div className={styles.RightHeader}>
                    <div className={styles.Time}>
                        <p>{formattedTime}</p>
                    </div>
                    <div className={styles.Date}>
                        <p>{formattedDate}</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Headers;
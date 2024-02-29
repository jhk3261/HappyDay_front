import React from "react";
import styles from "../css/Btns.module.css"
import Bear from '../img/pixel-bear.png'
import Cat from '../img/pixel-cat.png'
import Heart from '../img/pixel-heart.png'

function Btns({onZipClick, onLettersClick}) {

    const CopyText = () => {
        const textToCopy = '#버논이_생일축하_저지르겠습니다';

        navigator.clipboard.writeText(textToCopy)
            .then(()=>{
                alert("복사되었습니다.");
            })
            .catch((error)=>{
                console.error("오류발생",error);
            })
    }

    const handleZipClick = () => {
        console.log("Zip 버튼이 클릭되었습니다.");
        onZipClick();
    };

    const handleLettersClick = () => {
        console.log("Letters 버튼이 클릭되었습니다.");
        onLettersClick();
        console.log(onLettersClick)
    };
    return (
        <div>
            <ol className={styles.BtnList}>
                <li className={styles.BtnBox} onClick={handleZipClick}>
                    <div>
                        <img src={Cat} alt="cat" className={styles.IconImg}/>
                        <p>2023 vernon zip</p>
                    </div>
                </li>
                <li className={styles.BtnBox} onClick={CopyText}>
                    <div>
                        <img src={Bear} alt="bear" className={styles.IconImg}/>
                        <p className={styles.HashTag}>#버논이_생일축하_저지르겠습니다</p>
                        <p className={styles.HashTagInfo}>해시태그 복사하기</p>
                    </div>
                </li>
                <li className={styles.BtnBox} onClick={handleLettersClick}>
                    <div>
                        <img src={Heart} alt="letters" className={styles.IconImg}/>
                        <p>Congratulation<br/>for vernon</p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Btns;
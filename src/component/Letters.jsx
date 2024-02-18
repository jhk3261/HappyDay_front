import React, { useState, useEffect, useRef } from "react";
import styles from '../css/Letters.module.css';
import TapBar from "./TapBar";
import SendIcon from "../img/send_icon.svg";
import Draggable from "react-draggable";

function Letters({onHide}){
    const width = 24.5;
    const font = 'Soyananum9';

    // const handleDoubleClickZip = () => {
    //     handleDoubleClick("letters");
    // };

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const messagesEndRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messages));
        scrollToBottom();
    }, [messages]);

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            setMessages([...messages, inputMessage]);
            setInputMessage('');
        }
    };
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    console.log(messages)
    return(
        <div>
            <Draggable handle=".Head">
                <div className={styles.Letters} >
                    <div className="Head">
                        <TapBar title={"letters"} width={width} font={font} onHide={onHide}/>
                    </div>
                    <div className={styles.LetterBox}>
                        {messages.map((message, index) => (
                            <div key={index} className={styles.Message}>
                                <p>{message}</p>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className={styles.InputBox}>
                        <form onSubmit={handleMessageSubmit}>
                            <input className={styles.SendMessage} placeholder="예쁜 말들을 담아주세요:)" 
                                value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
                            <button type="submit">
                                <img src={SendIcon} alt="send"/>
                            </button>
                        </form>
                    </div>
                </div>  
            </Draggable>
        </div>
    )
}

export default Letters;
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
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
    const isScrolledToBottom = useRef(true);

    useEffect(()=>{
        const fetchMessages = async () =>{
            try{
                const response = await axios.get('http://localhost:8000/')
                setMessages(response.data);
            } catch(error){
                console.error("Error", error)
            }
        }
        fetchMessages();
    },[]);
    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            try {
                const response = await axios.post('http://localhost:8000/', { message: inputMessage });
                setMessages([...messages, response.data]);
                setInputMessage('');

            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    useEffect(()=>{
        scrollToBottom();
    },[messages])
    const scrollToBottom = () => {
        if (isScrolledToBottom.current) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        // 사용자가 스크롤을 조작했을 때 스크롤이 맨 아래에 있는지 여부를 업데이트합니다.
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        isScrolledToBottom.current = scrollTop + clientHeight >= scrollHeight;
    };

    console.log(messages)
    return(
        <div>
            <Draggable handle=".Head">
                <div className={styles.Letters} >
                    <div className="Head">
                        <TapBar title={"letters"} width={width} font={font} onHide={onHide}/>
                    </div>
                    <div className={styles.LetterBox} onScroll={handleScroll}>
                        {messages.map((message) => (
                            <div key={message.id} className={styles.Message}>
                                <p>{message.message}</p>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className={styles.InputBox}>
                        <form onSubmit={handleMessageSubmit}>
                            <input type="text" className={styles.SendMessage} placeholder="예쁜 말들을 담아주세요:)" 
                                value={inputMessage} onChange={(e) => (e.target.value.length <= 30) ? setInputMessage(e.target.value) : alert("30자 이내로 작성해주세요=v=")} />
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
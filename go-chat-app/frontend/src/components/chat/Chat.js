import React, {useEffect, useState} from "react";
import "./Chat.scss"
import Header from "../header/Header";
import {useDispatch, useSelector} from "react-redux";
import {createMessage, getMessages} from "../../redux/messages/messagesActions";

function Chat() {

    return (
        <div className={"chat"}>
            <Header/>
            <Messages/>
            <MessageSend/>
        </div>
    );
}


function Messages() {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' };
    const current = useSelector((state) => state.forums.current);
    const messages = useSelector((state) => state.messages.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getMessages());
        }, 10000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (

        <div className={"messages"}>
            <ul>
                {(current && messages) &&
                    messages.map(msg => (
                        <li className={"message-field"}><span className={"message-user"}>[{msg.username}]</span>
                            <div className={"message-content"}>{msg.message}</div>
                            <span className={"message-time"}>{new Date(msg.timestamp).toLocaleString('en-GB', options).replace(/,\s?/g, " ")}</span></li>
                    ))
                }
            </ul>
        </div>
    );
}

function MessageSend() {

    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();
    const current = useSelector((state) => state.forums.current);
    const send = () =>{
        dispatch(createMessage(msg, current.id));
        setMsg('');
    }

    return (
        <div className={"message-send"}>
            {
                current && (
                    <div className="box">
                        <form onSubmit={(e)=>{e.preventDefault();send()}}>
                            <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} className="input"
                                   name="msg"
                                   onMouseOut="this.blur();"/>
                        </form>
                        <i onClick={send} className="material-symbols-outlined">
                            send
                        </i>
                    </div>
                )
            }

        </div>
    );
}


export default Chat;

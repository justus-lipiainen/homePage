import { useEffect, useState } from "react";
import ChatMessage from "../components.jsx/chatmsg";
import Navbar from "../components.jsx/navbar";
import io from "socket.io-client"

function ChatRoom() {
    const [messages, setMessages] = useState([
        { sender: "mr. example", msg: "example message" }
    ]);

    // ---- Simple function to add new message ----
    function addMessage(sender, msg) {
        setMessages(prev => [...prev, { sender, msg }]);
    }

    // Example usage (you can remove this)
    // addMessage("new user", "hello!");

    useEffect(() => {
        const socket = io.connect()

        socket.on("connect", () => {
            socket.on("message", (data) => {
                addMessage(data.sender, data.msg)
            })
        })
    })

    return (
        <>
            <Navbar />
            <p>Chat Room</p>
            <input type="text" id="messageInput"></input>
            <button id="messageSend">Send</button>
            <div id="msgList">
                {messages.map((m, i) => (
                    <ChatMessage key={i} sender={m.sender} msg={m.msg} />
                ))}
            </div>
        </>
    );
}

export default ChatRoom;
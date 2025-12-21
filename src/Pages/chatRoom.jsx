import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatMessage from "../components.jsx/chatmsg";
import Navbar from "../components.jsx/navbar";
import io from "socket.io-client"
import $ from "jquery"

function ChatRoom() {
    const [messages, setMessages] = useState([]);

    const { roomId } = useParams()

    function addMessage(sender, msg) {
        setMessages(prev => [{ sender, msg }, ...prev]);
    }

    useEffect(() => {
        const socket = io.connect("http://localhost:6767")

        socket.on("connect", () => {
            console.log(roomId)
            socket.emit("joinRoom", roomId)
            $("#messageSend").on("click", () => {
                const inputValue = $("#messageInput").val();
                if (inputValue.trim(" ") != "") {
                    socket.emit("message", inputValue)
                    console.log(inputValue)
                }
            })
            $(document).keypress(() => {
                if (event.which == 13) {
                    const inputValue = $("#messageInput").val();
                    if (inputValue.trim(" ") != "") {
                        socket.emit("message", inputValue)
                        console.log(inputValue)
                    }
                }
            })
            socket.on("message", (data) => {
                addMessage(data.sender, data.msg)
            })
        })
        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("chatMessage");
            socket.disconnect();
        };
    })

    return (
        <>
            <Navbar />
            <p>Chat Room</p>
            <div id="chatInputs">
                <input id="messageInput"></input>
                <button id="messageSend">Send</button>
            </div>
            <div id="msgList">
                {messages.map((m, i) => (
                    <ChatMessage key={i} sender={m.sender} msg={m.msg} />
                ))}
            </div>
        </>
    );
}

export default ChatRoom;
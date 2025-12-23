import { useState, useEffect } from "react";
import Navbar from "../components.jsx/navbar";
import ChatRoomBox from "../components.jsx/chatRoomBox";
import $ from "jquery"
import { useNavigate } from "react-router-dom";

function ChatMenu() {
    const [rooms, setRooms] = useState([]);

    const navigate = useNavigate()

    function addRoom(name, img) {
        setRooms(prev => [{ name, img }, ...prev]);
    }

    $(document).ready(() => {
        $(".Room").on("click", function () {
            console.log("clicked a room menu box")
            navigate(`/ChatRoom/${$(this).get(0).id}`)
        })
    })

    useEffect(() => {

        const findPokemon = async (pokeAmount) => {
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeAmount}`)
                .then(data => data.json())
                .then(result => { return result })
                .catch(error => console.log(error))
            addRoom(result.name, result.sprites.front_default);
        }

        const loadRooms = (roomsAmount) => {
            const mult = Math.ceil(roomsAmount/9)
            console.log(mult)
            for (let i = 1; i <= roomsAmount; i++) {
                findPokemon(i*mult)
            }
        }

        loadRooms(10)
    }, [])

    return (
        <>
            <Navbar />
            <p>Chat Rooms</p>
            <div id="roomList">
                {rooms.map((v, i) => (
                    <ChatRoomBox key={i} name={v.name} img={v.img} />
                ))}
            </div>
        </>
    )
}

export default ChatMenu
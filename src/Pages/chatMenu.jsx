import { useState, useEffect } from "react";
import Navbar from "../components.jsx/navbar";

function ChatMenu() {
    const [rooms, setRooms] = useState([]);

    function addRoom(sender, msg) {
        setRooms(prev => [{ sender, msg }, ...prev]);
    }

    const findPokemon = async () => {
        return await
            fetch()
                .then(data => data.json())
                .catch(error => console.log(error))
    }

    const pokemon = findPokemon()
    console.log(pokemon);

    return (
        <>
            <Navbar />
            <p>Chat Rooms</p>
        </>
    )
}

export default ChatMenu
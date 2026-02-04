
import { useState, useEffect } from "react";
import Navbar from "../components.jsx/navbar";
import ChatRoomBox from "../components.jsx/chatRoomBox";
import $ from "jquery"
import { useNavigate } from "react-router-dom";

function SiwanKovimmat() {
    //const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjBkNTI3OWE1YTFlZTg0ODM2ZTAxY2QyOTA5MDA0NTU1YmI3M2I2MWQzNDUyOWUwNjZiNmI4YzU0Y2NlYjhjYTMwZWQ3ZmFmOTlkMDJlYTNhIiwiaWF0IjoxNzY4NTY1OTk4LjU1NzI2OCwibmJmIjoxNzY4NTY1OTk4LjU1NzI3LCJleHAiOjE4MDAxMDE5OTguNTUwMjcyLCJzdWIiOiIyNjA0MzgzNyIsInNjb3BlcyI6WyJwcm9kdWN0cy5yZWFkIl19.OfaPfT0xrF4LZJpbW0kJFmdSMitbOVPSy4twsXZaNZSYbSKbh1uYcVhnJi0kzWxRj6Uhf3OAky8ET7JwS-qbqqzpcOeA7Ml2g0RZuTBbyMRmX2I6vV3pbpwok5FBW4ztLdpctDACbX7udBcH6M9Chzox22xm5fEWNfOSESMeFmiI0QCYoMHVeAOEJf8-ZOURoHfK2FTUSXNCJyfFEEaysDlnt_0X8LlA__QcbbJmPNfQuU2G41hMz7I4PvFky2jVreKMXWTvTzyHlmGMOr73e0c-SdnR86lJOBNKGVePExU-oIkCoXY_DvKzYmLNnIoIl2pn-hQUyl-HWBdLrvf3crQhxStjrx9xvXmLEodgpjDkohp5nFHVmlzCqO0Rqi54PR7rpM4SeMKZ7HR3rA8VzRb2161jjtq1L2wUsjNFxdp5vhD2uztLSu3okZXMcnrtCATIA66BRPmb4NlkAV4r0XoC5sEYfRp6z7Oh9IY-gypBrhG05vwVE8Cl4wQSQKsfhBlzgmGJkJC5kbCiYa87iDADXBorlYCZjp97hEPVyBPBScsgcyG7A9jKbNHjmHLB-0GojWZuawdthTvAXawZC-NGz7lP8GdKH3hIiyTxe1yRPhD7Z7ah0AFmvZqkaqg5xqj3GiDCPcRWWJqakEVcGmylhGrBblM8DlZXq_RtGYQ"

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
            <div id="roomList">
                {rooms.map((v, i) => (
                    <ChatRoomBox key={i} name={v.name} img={v.img} />
                ))}
            </div>
        </>
    )
}

export default SiwanKovimmat
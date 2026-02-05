import { useNavigate } from "react-router-dom";

function Navbar() {
    const Navigate = useNavigate()

    return (
        <>
            <ul id="navbar">
                <li onClick={() => {Navigate("/home")}}>
                    <p>Home</p>
                </li>
                <li onClick={() => {Navigate("/ChatMenu")}}>
                    <p>ChatRooms</p>
                </li>
                <li onClick={() => {Navigate("/WhosThatPokemon")}}>
                    <p>Who's That Pokemon</p>
                </li>
                <li onClick={() => {Navigate("/SiwanKovimmat")}}>
                    <p>Webstore</p>
                </li>
            </ul>
        </>
    )
}

export default Navbar
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
            </ul>
        </>
    )
}

export default Navbar
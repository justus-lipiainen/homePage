function ChatRoomBox(props){
    return(
        <div className="Room" id={props.name}>
            <img src={props.img}/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default ChatRoomBox
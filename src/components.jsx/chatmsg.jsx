function ChatMessage(props){
    return(
        <div className="Message">
            <h3>{props.sender}</h3>
            <p>{props.msg}</p>
        </div>
    )
}

export default ChatMessage
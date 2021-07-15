const TheirMessage =({ lastMessage,message }) => {
    const isFirstMessageByUser =!lastMessage || lastMessage.sender.usename != message.sender.username;
    return (
        <div className ="Message-row">
            {isFirstMessageByUser && (
                <div
                className="message-avatar"
                style={{backgroundimage: 'url(${message?.sender?.avatar})'}}
                />
            )}
           
        {messages?.attachments?.length > 0
              ?(
                <img 
                      src={message.attachments[0].file}
                      alt="message-attachments"
                      className="message-image"
                      style={{marginleft: isFirstMessageByUser ? '4px' : '48px'}}
                 />
               )     :(
                    <div className="messages" style={{float: 'left',,backgroundcolor: '#CABCDC',marginleft: isFirstMessageByUser ? '4px' : '48px' }}>
                              {message.text}
                    </div>
                     )
}
    
           }
        </div>
    );
      
}
    
export default TheirMessage;
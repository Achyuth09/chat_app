const MyMessage =({message}) => {
    if(messages?.attachments?.length > 0){
        return(
            <img 
               src={message.attachments[0].file}
               alt="message-attachments"
               className="message-image"
               style={{float: 'right'}}
            />
        )
    }
    return (
        <div className="messages" style={{float: 'right',marginRight: '18px', color: 'white',backgroundcolor: '#3B2A50' }}>
            {message.text}
        </div>
           );
      
    }
    
    export default MyMessage;
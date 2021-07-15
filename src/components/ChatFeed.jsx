import MesaageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat ,userName,messages } = props;
    
    const chat =  chats && chats[activechat];

    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.logs(keys);
        return keys.map((key,index) => {
            const messages = messages[key];
            const lastMessagekey = index == 0 ? null : keys[index - 1];
            const ismessage = userName == message.sender.usename;

            return (
              <div key={'msg_${index}'} style={{width:'100%'}}>
                  <div className="message-block">
                      {
                          {
                            isMymessage
                            ? <MyMessage message={message} />
                            < TheirMessage message={message} lastMessage={messages[lastmessagekey]} />
                        }
                      
                  </div>
                  <div classname="read-recipents" style= {{marginRight: isMyMessage ?'18px' :'0px', marginleft: isMyMessage ? '0px' : '68px'}}>
                     read-recipents
                  </div>
                  
            </div>

            )

        })
    }
    renderMessages()

   if(!chat) return 'Loadind...';
    return (
        <div className ="chat-feed">
            <div className="chat-title-container">
            <div className="chat-title">{chat?.title}
            {chat.people.map((person) =>' ${person.person.usernmae}')}
            </div>
            </div>
            {rendermessages()}
            <div style={{height:'100px'}} />
            <div className="message-from-container">
                <MessageForm {...props} chatId={activechat} />
            </div>
        </div>
    );
}
export default ChatFeed;
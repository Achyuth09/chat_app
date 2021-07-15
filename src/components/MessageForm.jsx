import {useState} from 'react';
const MessageForm =() => {
    
const[value,setValue] = useState('');

const hadleSubmit = () => {

}

const handleChange =() => {

}
return (
    <form className="message-form" onSubmit={handleSubmit}>
        <input 
              className="message-input"
              placeholder="send a message..."
              value={value}
              onChange={handleChange}
              onSubmit={handleSubmit}
        />    
    </form>
  );
  
}

export default MessageForm;
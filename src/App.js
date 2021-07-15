import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App =() => {
    return(
        <ChatEngine
            height="100vh"
            projectID="d4508b02-f2de-4ce1-9f95-ad420f469fd0"
            userName="Achyuth"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;

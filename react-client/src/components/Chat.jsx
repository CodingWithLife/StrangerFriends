import React from 'react';
import "../css/Header.css"
class Chat extends React.Component {
    render () {
    return (
      <div className="chat">
     
      <iframe className="iframe" src="https://medoos-chat.herokuapp.com/"></iframe>


      </div>)
  }
}

export default Chat;

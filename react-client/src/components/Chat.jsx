import React from 'react';
import '../css/Chat.css';


import Message from './Message.js';

class Chat extends React.Component {
        constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Shadow",
                content: <p>Hello World!</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }, {
                username: "Hero",
                content: <p>Love it! :heart:</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }, {
                username: "Shadow",
                content: <p>Check out my Github at https://github.com/WigoHunter</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }, {
                username: "Hero",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }, {
                username: "Shadow",
                content: <p>So</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }, {
                username: "Shadow",
                content: <p>Chilltime is going to be an app for you to view videos with friends</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }, {
                username: "Shadow",
                content: <p>You can sign-up now to try out our private beta!</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }, {
                username: "Hero",
                content: <p>Definitely! Sounds great!</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();
        console.log("hitting event");
        this.setState({
            chats: this.state.chats.concat([{
                username: "Shadow",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Shadow";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Self-Chat</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) =>
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chat;

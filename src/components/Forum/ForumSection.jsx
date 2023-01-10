import axios from "axios";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function ForumSection({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [previousMessage, setPreviousMessage] = useState([])

  const fetchMessages = async () => {
    try {
      let { data } = await axios.get(serverUrl + 'forum/' + 'Mojokerto')
      console.log(data);
      setPreviousMessage(data)
    } catch (error) {
      console.log(error);
    }
  }
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        UserId: 1,
        title: "Mojokerto",
        room: room,
        author: username,
        message: currentMessage,
        text: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  const axiosMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        UserId: 1,
        title: "Mojokerto",
        room: room,
        author: username,
        message: currentMessage,
        text: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

    await axios.post("http://localhost:3001/forum/Mojokerto", messageData)
    // setMessageList((list) => [...list, messageData]);
    setCurrentMessage("");
    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // TopicId: calledForum.id, UserId, text
      const messageData = {
        UserId: data.UserId,
        title: "Mojokerto",
        room: data.Topic.title,
        author: data.User.name,
        message: data.text,
        text: data.text,
        time:
          new Date(data.createdAt).getHours() +
          ":" +
          new Date(data.createdAt).getMinutes(),
      };
      console.log(data);
      console.log(messageList);
      setMessageList((list) => [...list, messageData]);
    });
  }, [socket]);

  useEffect(() => {
    console.log(previousMessage.Messages);

    let oldMessages = previousMessage.Messages.map(el => {
      el.room = room
      el.author = el.User.name
      el.message = el.text
      el.time = new Date(el.createdAt).getHours() +
      ":" +
      new Date(el.createdAt).getMinutes()
      return el
    })
    console.log(oldMessages);
    setMessageList(oldMessages);
  }, [])
  return (
    <div className="forum-window">
      <div className="forum-header">
        <p>Live Forum Room {room}</p>
      </div>
      <div className="forum-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="forum-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && axiosMessage();
          }}
        />
        <button onClick={axiosMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default ForumSection;

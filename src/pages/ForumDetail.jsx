import { useEffect, useState } from "react"
import PaginatedItems from "../components/PaginatedItems"
import ScrollToTopBtn from "../components/ScrollToTopBtn"
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import { useParams, useRoutes } from "react-router";
import io from "socket.io-client";

const serverUrl = "http://localhost:3000/"
const socket = io.connect(serverUrl)

export default function ForumDetail() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  const [isShow, setIsShow] = useState(false)
  let {slug} = useParams()

  const destination = ["Gili", "Nusa Dua", "Bundaran HI"]
  const member = [
    "alamo",
    "gravity",
    "dipper",
    "mabel",
    "pines",
    "razor",
    "void",
  ]

  function showDivInput() {
    setIsShow(!isShow)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  // Edit Start
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const fetchMessages = async () => {
    try {
      let { data } = await axios.get(serverUrl + 'publics/topic/3' )
      setMessageList(data.Messages)
    } catch (error) {
      console.log(error);
    }
  }
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        slug,
        email: localStorage.email || "qomar@gmail.com",
        text: currentMessage,
      };

      await socket.emit("send_message", messageData);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.emit("join_room", slug)
    fetchMessages()
  }, [])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  // Edit End
  if (messageList) return (
    <div className="flex flex-col xl:mt-20 bg-gray-100">
      <ScrollToTopBtn />
      <div className="w-full xl:h-72 relative">
        <img
          src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=2000&t=st=1672978137~exp=1672978737~hmac=6fe7322da5662ae038075362c74d87c92080674444aa7b8a15486de3918fd6d3"
          alt=""
          className="object-cover w-full xl:h-full brightness-50"
        />
        <h1 className="absolute bottom-[10%] left-5 text-3xl font-medium text-white">
          {destination[Math.floor(Math.random() * destination.length)] +
            " Reviews"}
        </h1>
      </div>
      <div className="container mx-auto mt-10 flex justify-evenly">
        <section id="leftSide" className="flex flex-col gap-3">
          <div className="flex flex-col xl:flex-row justify-evenly gap-5">
            <button
              className="bg-black py-2 px-7 text-white duration-200 active:scale-95"
              onClick={showDivInput}>
              add review
            </button>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={`ease-in-out ${isShow ? "h-64 w-full" : "h-0 w-0"}`}>
            <textarea
              placeholder="add review!"
              className={`${isShow ? "block w-full h-3/4" : "hidden"}`}
            />
            <button
              type="submit"
              className="bg-black text-white block w-full mt-2 py-2">
              submit!
            </button>
          </form>
          <div className="forum-window">
      <div className="forum-header">
        <p>Live Forum Room</p>
      </div>
      <div className="forum-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message px-1 py-2 border rounded-sm my-1"
                id={messageContent.id}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.text}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.createdAt}</p>
                    <p id="author">{messageContent.User.fullName}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="forum-footer mb-10 p-5">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage} className="p-2 border rounded bg-green-500">Send Message</button>
      </div>
    </div>
        </section>
        <section id="leftSide" className="hidden 2xl:block">
          <div className="bg-white w-full p-3">
            <h1 className="text-xl font-medium border-b border-stone-300 pb-3">
              Most Active Member
            </h1>
            {member.map((el) => {
              return (
                <div className="mt-5 flex justify-between items-center">
                  <h1 className="capitalize">{el}</h1>
                  <span className="bg-stone-300 py-2 px-5 rounded-lg">20</span>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

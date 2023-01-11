import { useEffect, useState } from "react"
import ScrollToTopBtn from "../components/ScrollToTopBtn"
import ScrollToBottom from "react-scroll-to-bottom"
import { useNavigate, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchMessages, insertMessage } from "../stores/actions/actionCreator"
import io from "socket.io-client"
import { blackButton } from "../helpers/buttonStyle"

const socket = io.connect("http://localhost:3000/")

export default function ForumDetail() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  const [isShow, setIsShow] = useState(false)
  let navigate = useNavigate()
  let { slug } = useParams()
  let { id } = useSelector((state) => state.forums)
  let { messages, topic } = useSelector((state) => state.forums)
  let dispatch = useDispatch()

  // Edit Start
  const [currentMessage, setCurrentMessage] = useState("")

  const dateConvert = (daten) => {
    const event = new Date(daten)
    const options = { weekday: "long", year: "numeric", month: "long" }
    return event.toLocaleDateString("de-DE", options)
  }

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id,
        slug,
        email: localStorage.email,
        text: currentMessage,
      }

      await socket.emit("send_message", messageData)
      setCurrentMessage("")
    }
  }
  useEffect(() => {
    if (!id) navigate("/forum/")
  })
  useEffect(() => {
    socket.emit("join_room", slug)
    dispatch(fetchMessages(id))
  }, [])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      dispatch(insertMessage(data))
      // setMessageList((list) => [...list, data]);
    })
  }, [socket])

  // Edit End
  if (topic)
    return (
      <div className="flex flex-col bg-gray-100 h-screen">
        <ScrollToTopBtn />
        <div className="w-full xl:h-72 relative">
          <img
            src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=2000&t=st=1672978137~exp=1672978737~hmac=6fe7322da5662ae038075362c74d87c92080674444aa7b8a15486de3918fd6d3"
            alt=""
            className="object-cover w-full xl:h-full brightness-50"
          />
          <h1 className="absolute bottom-[10%] left-5 text-3xl font-medium text-white">
            {topic.title}
          </h1>
        </div>
        <div className="container mx-auto mt-10 flex justify-evenly h-fit overflow-hidden">
          <ScrollToBottom className="message-container max-h-[600px] w-[700px] bg-white overflow-auto mb-2 p-5">
            {messages.map((messageContent) => {
              const newDate = new Date(
                messageContent.createdAt
              ).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                weekday: "long",
              })
              return (
                <div
                  className="message px-1 py-2 border-b-2 border-black flex flex-col gap-5 rounded-sm my-1"
                  id={messageContent.id}>
                  <div className="message-meta flex justify-between">
                    <p id="author" className="text-xl capitalize">
                      {messageContent.User.fullName}
                    </p>
                    <p id="time" className="text-lg font-light text-gray-400">
                      {newDate}
                    </p>
                  </div>

                  <div className="message-content pt-7">
                    <p className="text-lg text-gray-400 whitespace-normal break-words focus:ring-0 focus:border-0 focus:outline-0">
                      {messageContent.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </ScrollToBottom>

          {localStorage.email ? (
            <div className="forum-footer mb-10 p-5 w-full flex">
              <input
                type="text"
                value={currentMessage}
                placeholder="Hey..."
                onChange={(event) => {
                  setCurrentMessage(event.target.value)
                }}
                className="w-full border-0 border-b-2 border-yelloku"
              />
              <button
                onClick={sendMessage}
                className={`px-10 whitespace-nowrap w-fit border rounded ${blackButton}`}>
                Send Message
              </button>
            </div>
          ) : null}
        </div>
      </div>
    )
}

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
  let navigate = useNavigate()
  let { slug } = useParams()
  let { id } = useSelector((state) => state.forums)
  let { messages, topic } = useSelector((state) => state.forums)
  let dispatch = useDispatch()
  const [showReply, setShowReply] = useState(false)
  const [replyUser, setReplyUser] = useState("")
  const [replyMsg, setReplyMsg] = useState("")

  function reply(show, user, msg) {
    setShowReply(show)
    setReplyUser(user)
    setReplyMsg(msg)
  }

  // Edit Start
  const [currentMessage, setCurrentMessage] = useState("")

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
      dispatch(fetchMessages(id))
      // setMessageList((list) => [...list, data]);
    })
  }, [socket])

  // Edit End
  if (topic)
    return (
      <div className="flex flex-col relative bg-cover bg-gray-100 h-screen bg-[url('https://ik.imagekit.io/marQofy034/psychedelic-paper-shapes-with-copy-space.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673449846277')]">
        <ScrollToTopBtn />

        <h1 className="fixed bottom-10 left-5 text-4xl font-medium text-black backdrop-opacity-10 px-2 py-2">
          {topic.title}
        </h1>

        <div className="container px-10 mt-32 flex gap-5 h-fit overflow-hidden w-1/2">
          <ScrollToBottom className="w-full bg-stone-900 bg-opacity-75 backdrop-blur-sm overflow-auto mb-2 p-5">
            {messages.map((messageContent) => {
              const newDate = new Date(messageContent.createdAt).toLocaleDateString(
                "en-CA",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                }
              )
              return (
                <div
                  className="px-1 py-2 border-b-2 border-black flex flex-col gap-5 rounded-sm my-1"
                  id={messageContent.id}>
                  <div className="flex justify-between">
                    <p id="author" className="text-xl text-yelloku capitalize">
                      {messageContent.User.fullName}
                    </p>
                    <p id="time" className="text-lg font-light text-gray-400">
                      {newDate}
                    </p>
                  </div>

                  <div className="pt-7 flex flex-col">
                    <p className="text-lg text-white whitespace-normal break-words focus:ring-0 focus:border-0 focus:outline-0">
                      {messageContent.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </ScrollToBottom>
        </div>
        {localStorage.email ? (
          <div className="flex flex-col px-10 container w-1/2">
            <div className=" h-fit flex full mb-40">
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
          </div>
        ) : null}
      </div>
    )
}

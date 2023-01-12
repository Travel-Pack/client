import { useEffect, useState } from "react"
import ScrollToTopBtn from "../components/ScrollToTopBtn"
import ScrollToBottom from "react-scroll-to-bottom"
import { useNavigate, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { baseUrl, fetchMessages, insertMessage } from "../stores/actions/actionCreator"
import io from "socket.io-client"
import { blackButton } from "../helpers/buttonStyle"

const socket = io.connect(baseUrl)

export default function ForumDetail() {
  let navigate = useNavigate()
  let { slug } = useParams()
  let { id } = useSelector((state) => state.forums)
  const { topics } = useSelector((state) => state.forums)
  let { messages, topic } = useSelector((state) => state.forums)
  let dispatch = useDispatch()
  const [showReply, setShowReply] = useState(false)
  const [replyUser, setReplyUser] = useState("")
  const [replyMsg, setReplyMsg] = useState("")
  const [load, setLoad] = useState(true);

  const [selectedTopic, setSelectedTopic] = useState({})
  const [selectedMessages, setSelectedMessages] = useState([])

  function reply(show, user, msg) {
    setShowReply(show)
    setReplyUser(user)
    setReplyMsg(msg)
  }

  // Edit Start
  const [currentMessage, setCurrentMessage] = useState("")

  const setDate = (createdAt) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const day = new Date(createdAt).getDay()
    const newday = new Date(createdAt).getDate()
    const dayName = days[day]
    const month = new Date(createdAt).getMonth()
    const year = new Date(createdAt).getFullYear()
    const hours = new Date(createdAt).getHours()
    const minute = new Date(createdAt).getMinutes()

    // return createdAt
    if (minute < 10)
      return `${hours}:0${minute} on ${dayName}, ${newday}/${month + 1}/${year}`
    else return `${hours}:${minute} on ${dayName}, ${newday}/${month + 1}/${year}`
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
    topics.forEach(el => {
      if (el.slug == slug){
        setSelectedTopic(el)
        setSelectedMessages(el.Messages)
      }
    })
  }, [])
  useEffect(() => {
    socket.emit("join_room", slug)
    dispatch(fetchMessages(localStorage.TopicId))
      .then(_=>{
        setLoad(false)
      })
  }, [])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setLoad(true);
      console.log(`Local Id ${localStorage.TopicId}, ${data.id}`);
      let flag = true
      messages.forEach(el => {
        if (el.id == data.id) flag = false
      })
      if (flag) {
        console.log("insert message", data.id);
        dispatch(insertMessage(data))
        setLoad(false)
      }
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

        <div
          className="container px-10 mt-32 flex gap-5 h-fit overflow-hidden w-full md:w-1/2"
          id="scrollStyle">
          <ScrollToBottom className="w-full bg-stone-900 bg-opacity-75 backdrop-blur-sm overflow-auto mb-2 p-5">
            {messages.map((messageContent) => {
              return (
                <div
                  className="px-1 py-2 border-b-2 border-black flex flex-col gap-5 rounded-sm my-1"
                  id={messageContent.id} key={messageContent.id}>
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <p id="author" className="text-2xl text-yelloku capitalize">
                        {messageContent.User.fullName}
                      </p>
                      {messageContent.User.isPremium ? (
                        <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2545/2545603.png"
                            className="-ml-1 mr-1.5 h-4 w-4"
                          />
                          <p className="whitespace-nowrap text-sm">Premium</p>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <p id="time" className="text-lg font-light text-gray-400">
                      {setDate(messageContent.createdAt)}
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
          <div className="flex flex-col px-10 container w-full  md:w-1/2">
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

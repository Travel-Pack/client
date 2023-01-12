import { useState } from "react"
import { useEffect } from "react"
import { HiOutlineChatAlt } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ScrollToTopBtn from "../components/ScrollToTopBtn"
import { blackButton, yellowButton } from "../helpers/buttonStyle"
import { fetchForumId, fetchTopics, postTopic } from "../stores/actions/actionCreator"

export default function Forum() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const { topics } = useSelector((state) => state.forums)
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const navToSection = (slug, id) => {
    dispatch(fetchForumId(id))
    nav(`/forum/${slug}`)
  }

  useEffect(() => {
    dispatch(fetchTopics())
  }, [])

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postTopic({ title: inputValue, type: "Forum" }))
      .then(res => {
        if (res == 'ok') dispatch(fetchTopics())
        setInputValue("")
      })
  }

  if (topics)
    return (
      <div className="min-h-screen min-w-screen bg-[url('https://img.freepik.com/free-photo/light-bulb-made-from-yellow-paper-ball_1205-372.jpg?1&w=826&t=st=1673443596~exp=1673444196~hmac=d8ea655f02d72be086daf616fed4a913aa1d504f18fd06a38e923492ae294c11')] bg-right bg-contain bg-no-repeat bg-fixed">
        <div className="flex-col flex gap-5 xl:mt-20">
          <section id="forumHero" className="bg-yelloku py-10 sticky top-0">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold mb-3 text-center">
                Travel Pack Forum
              </h1>
            </div>
          </section>

          <div className="flex flex-col gap-5 container mx-auto max-w-7xl">
            <div className="md:mr-96">
              <button
                onClick={() => setShowInput(!showInput)}
                className={`${blackButton} py-3 w-full mb-2`}>
                Add Topic
              </button>
              <form
                onSubmit={handleSubmit}
                className={`flex items-center gap-2 ${showInput ? "h-11" : "h-0 hidden"}`}>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  className={`transition-transform w-full flex h-full relative`}
                  placeholder="write your forum title here..."
                />
                <button
                  type="submit"
                  className={`${yellowButton} h-full px-7 text-xl text-center block mx-auto py-1`}>
                  Submit
                </button>
              </form>
            </div>
            {topics.map((el, index) => {
              return (
                <div
                  className={`flex md:mr-96 items-center border hover:bg-yelloku bg-white shadow-md  gap-10 justify-between ${
                    (index + 1) % 2 === 0 ? "bg-blue-100" : ""
                  }`}
                  key={el.id}
                  onClick={() => navToSection(el.slug, el.id)}>
                  <div className={`div flex flex-col py-5 px-6`}>
                    <h1 className="text-xl font-medium">{el.title}</h1>
                    <p className="font-light text-lg text-gray-500 capitalize">
                      Author: {el.User.fullName}
                    </p>
                  </div>
                  <div
                    className={`border-l-2 border-gray-400 w-1/4 justify-center gap-2 items-center flex py-2`}>
                    <h1 className="text-2xl">{el.Messages.length}</h1>
                    <HiOutlineChatAlt className="w-6 h-6" />
                    <div className="w-24 h-24 ml-6">
                      <img
                        src={`https://source.unsplash.com/random/?Nature&id=${index}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <ScrollToTopBtn />
      </div>
    )
}

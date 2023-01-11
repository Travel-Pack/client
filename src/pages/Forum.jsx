import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ScrollToTopBtn from "../components/ScrollToTopBtn"
import { blackButton } from "../helpers/buttonStyle"
import { fetchForumId, fetchTopics } from "../stores/actions/actionCreator"

export default function Forum() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const { topics } = useSelector((state) => state.forums)
  const [showInput, setShowInput] = useState(false)
  const navToSection = (slug, id) => {
    dispatch(fetchForumId(id))
    nav(`/forum/${slug}`)
  }

  useEffect(() => {
    dispatch(fetchTopics())
  }, [])

  if (topics)
    return (
      <div className="min-h-screen min-w-screen bg-[url('https://img.freepik.com/free-photo/light-bulb-made-from-yellow-paper-ball_1205-372.jpg?1&w=826&t=st=1673443596~exp=1673444196~hmac=d8ea655f02d72be086daf616fed4a913aa1d504f18fd06a38e923492ae294c11')] bg-right bg-contain bg-no-repeat bg-fixed">
        <div className="flex-col flex gap-5 xl:mt-20">
          <section id="forumHero" className="bg-yelloku py-10 sticky top-0">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold mb-3 text-center">Travel Pack Forum</h1>
            </div>
          </section>

          <div className="flex flex-col gap-5 container mx-auto max-w-7xl">
            <div className="md:mr-96">
            <button onClick={()=> setShowInput(!showInput)} className={`${blackButton} py-3 w-full`}>Add Topic</button>
            <input type="text" className={`${showInput ? "h-28" : "h-0 hidden"} transition-transform w-full flex`}/>
            </div>
            {topics.map((el, index) => {
              return (
                <div
                  className={`flex md:mr-96 items-center border bg-white shadow-md py-5 px-6 gap-10 justify-between ${
                    (index + 1) % 2 === 0 ? "bg-yellow-50" : ""
                  }`}
                  key={el.id}
                  onClick={() => navToSection(el.slug, el.id)}>
                  <div className={`div flex flex-col`}>
                    <h1 className="text-xl font-medium">{el.title}</h1>
                    <p className="font-light text-lg text-gray-500 capitalize">
                      Author: {el.User.fullName}
                    </p>
                  </div>
                  <div
                    className={`border-l-2 border-gray-400 w-1/5 justify-evenly items-center flex flex-col `}>
                    <h1 className="text-2xl">{el.Messages.length}</h1>
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

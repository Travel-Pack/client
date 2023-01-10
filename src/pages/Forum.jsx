import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ScrollToTopBtn from "../components/ScrollToTopBtn"
import { fetchForumId, fetchTopics } from "../stores/actions/actionCreator"

export default function Forum() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const { topics } = useSelector((state) => state.forums)
  function navigateToDetail() {
    nav(`/forum/${1}`)
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  //Batas awal edit
  const navToSection = (slug, id) => {
    dispatch(fetchForumId(id))
    nav(`/forum/${slug}`)
  }

  useEffect(() => {
    dispatch(fetchTopics())
  }, [])
  // Batas akhir Edit
  if (topics)
    return (
      <div className="flex-col flex gap-5 xl:mt-20">
        <ScrollToTopBtn />
        <section id="forumHero" className="bg-yelloku py-10">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-3">List of Topics</h1>
            <div className="search items-center gap-5 flex">
              <label htmlFor="searchTopic" className="text-xl">
                Search Destination:
              </label>
              <input
                type="text"
                name="searchTopic"
                id="searchTopic"
                className="border-0 border-b-4 bg-transparent w-1/2"
                placeholder="Vacation on Bali"
              />
            </div>
          </div>
        </section>

        {/* Qomar Mulai Edit */}
        <div className="mx-auto flex flex-col gap-5 w-fit">
          {topics.map((el, index) => {
            return (
              <div
                className={`flex items-center bg-white shadow-md py-5 px-6 gap-10 justify-between ${(index +  1) % 2 === 0 ? "flex-row-reverse" : ""}`}
                key={el.id}
                onClick={() => navToSection(el.slug, el.id)}>
                <div className={`div flex flex-col`}>
                  <h1 className="text-lg font-medium">{el.title}</h1>
                  <p className="font-light">Author: {el.User.fullName}</p>
                </div>
                <div
                  className={`border-l border-stone-300 w-1/5 justify-evenly items-center flex flex-col `}>
                  <h1>560</h1>
                </div>
              </div>
            )
          })}
        </div>
        {/* Qomar Selesai Edit */}
      </div>
    )
}

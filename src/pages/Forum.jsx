import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ScrollToTopBtn from "../components/ScrollToTopBtn"

const serverUrl = "http://localhost:3000/"
// const socket = io.connect(serverUrl);

export default function Forum() {
  const nav = useNavigate()
  function navigateToDetail() {
    nav(`/forum/${1}`)
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  //Batas awal edit
  const [availableTopics, setAvailableTopics] = useState([])
  const navToSection = (slug) => {
    nav(`/forum/${slug}`)
  }
  const fetchMessages = async () => {
    try {
      let { data } = await axios.get(serverUrl + 'publics/topic')
      console.log(data);
      setAvailableTopics(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMessages()
  }, [])
  // Batas akhir Edit
  if (availableTopics) return (
    <div className="flex-col flex gap-5 xl:mt-20">
      <ScrollToTopBtn />
      <section id="forumHero" className="bg-yelloku py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-3">List of Topics</h1>
          <div className="search items-center gap-5 flex">
            <label htmlFor="searchDesti" className="text-xl">
              Search Destination:
            </label>
            <input
              type="text"
              name="searchDest"
              id="searchDest"
              className="border-0 border-b-4 bg-transparent w-1/2"
              placeholder="Nusa Dua"
            />
          </div>
        </div>
      </section>

      {/* Qomar Mulai Edit */}
      <div className="mx-auto flex flex-col gap-5 w-fit">
        {availableTopics.map((el) => {
          return (
            <div
              className="flex items-center bg-white shadow-md py-5 px-4 justify-between"
              key={el.id}
              onClick={() => navToSection(el.slug)}>
              <div className="w-fit px-3">
                <div className="rounded-full w-6 h-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/1/15/Dipper_Pines.png"
                    alt="avatarProfile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="div flex flex-col">
                <h1 className="text-lg font-medium">
                  {el.title}
                </h1>
                <h1>👌❤️💕👍🤩</h1>
                <p className="font-light">
                  Author: {el.User.fullName}
                </p>
              </div>
              <div className="border-l border-stone-300 w-1/5 justify-evenly items-center flex flex-col">
                <h1>560</h1>
                <h1>15568</h1>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
            </div>
          )
        })}
      </div>
      {/* Qomar Selesai Edit */}

      <div className="container mx-auto">
        <div className="grid xl:grid-cols-4 px-5 xl:px-0 gap-3">
          {arr.map((el) => {
            return (
              <div
                key={el}
                onClick={navigateToDetail}
                className="aspect-square cursor-pointer">
                <img
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1800&t=st=1672981795~exp=1672982395~hmac=4cb88347a08dabb475b46b9165ee9e46861d90348b5a2c26d93e49b3823ca809"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

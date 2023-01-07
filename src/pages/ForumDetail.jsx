import { Pagination } from "flowbite-react"
import { useState } from "react"
import PaginationCustom from "../components/PaginationCustom"

export default function ForumDetail() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  const [isShow, setIsShow] = useState(false)

  const destination = ["Gili", "Nusa Dua", "Bundaran HI"]
  const member = ["alamo", "gravity", "dipper", "mabel", "pines", "razor", "void"]

  function showDivInput() {
    setIsShow(!isShow)
  }

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <div className="flex flex-col xl:mt-20 bg-gray-100">
      <div className="w-full xl:h-72 relative">
        <img
          src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=2000&t=st=1672978137~exp=1672978737~hmac=6fe7322da5662ae038075362c74d87c92080674444aa7b8a15486de3918fd6d3"
          alt=""
          className="object-cover w-full xl:h-full brightness-50"
        />
        <h1 className="absolute bottom-[10%] left-5 text-3xl font-medium text-white">
          {destination[Math.floor(Math.random() * destination.length)] + " Reviews"}
        </h1>
      </div>
      <div className="container mx-auto mt-10 flex justify-evenly">
        <section id="leftSide" className="flex flex-col gap-3">
          <div className="flex flex-col xl:flex-row justify-evenly gap-5">
            <PaginationCustom />
            <button className="bg-black py-2 px-7 text-white duration-200 active:scale-95" onClick={showDivInput}>
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
            <button type="submit" className="bg-black text-white block w-full mt-2 py-2">
              submit!
            </button>
          </form>
          <div className="mx-auto flex flex-col gap-5 w-fit">
            {arr.map((el) => {
              return (
                <div
                  className="flex items-center bg-white shadow-md py-5 px-4 justify-between"
                  key={el}>
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
                      10 Kids Unaware of Their Halloween Costume
                    </h1>
                    <h1>👌❤️💕👍🤩</h1>
                    <p className="font-light">
                      It's one thing to subject yourself to a Halloween costume mishap
                      because, hey, that's your prerogative.
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
          <div className="flex justify-center">
            <PaginationCustom />
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

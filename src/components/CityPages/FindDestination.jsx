import { useState } from "react"
import TravelCards from "../TravelSection/TravelCards"
export default function FindDestination() {
  const [active, setActive] = useState(null)

  function handleSort() {
    setActive("bg-white text-black")
  }

  return (
    <div className="bg-stone-50 mt-20">
      <div className="h-96 px-16 flex flex-col justify-end bg-zinc-400 bg-blend-multiply bg-[url('https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] bg-cover ">
        <h1 className="text-white font-semibold text-6xl pb-10">
          Find The next <br /> Destination
        </h1>
        <div className="flex gap-10">
          <div
            className={`hover:bg-white hover:text-black text-white duration-200 py-2.5 px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            onClick={() => handleSort}>
            Destination
          </div>

          <div
            className={`hover:bg-white hover:text-black text-white duration-200 py-2.5 px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            onClick={() => handleSort}>
            Hotel
          </div>
          
        </div>
      </div>
      <div className="mx-auto px-16 flex justify-center py-10 gap-5 min-h-full">
        <TravelCards />
      </div>
    </div>
  )
}

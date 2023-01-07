import { useState } from "react"
import TravelCards from "../components/TravelSection/TravelCards"
import SearchForm from "../components/TravelSection/SearchForm"
export default function FindTravel() {
  const [active, setActive] = useState(null)

  function handleSort() {
    setActive("bg-white text-black")
  }

  return (
    <div className="bg-stone-50 xl:mt-20">
      <div className="xl:h-96 pt-10 xl:px-16 xl:pt-0 flex flex-col justify-end bg-zinc-400 bg-blend-multiply bg-[url('https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] bg-cover ">
        <h1 className="text-white font-semibold text-center xl:text-left xl:text-6xl text-4xl pb-2 xl:pb-10">
          Find The next <br /> Destination
        </h1>
        <div className="flex justify-between xl:gap-10">
          <div
            className={`hover:bg-white hover:text-black text-white duration-200 xl:py-2.5 px-1 py-1 xl:px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            onClick={() => handleSort}>
            <h1 className="">Price Low to High</h1>
          </div>

          <div
            className={`hover:bg-white hover:text-black text-white duration-200 xl:py-2.5 px-1 py-1 xl:px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            onClick={() => handleSort}>
            <h1 className="">Price High to Low</h1>
          </div>
          <div
            className={`hover:bg-white hover:text-black text-white duration-200 xl:py-2.5 px-1 py-1 xl:px-9 font-medium relative block cursor-pointer ${
              active ? "active" : ""
            }`}
            onClick={() => handleSort}>
            <h1 className="">Name (A-Z)</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto px-3 xl:px-16 flex justify-center py-3 xl:py-10 gap-5 min-h-full">
        <TravelCards />

        <SearchForm />
      </div>
    </div>
  )
}

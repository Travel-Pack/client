import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SwiperCar from "../components/Swiper/SwiperCar"

export default function TravelStep() {
  const [sliderVal, setSliderVal] = useState(0)
  const nav = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    nav("/travelItenerary")
  }
  return (
    <div className="mt-20 flex gap-10 bg-yelloku duration-500 ease-in-out">
      <div className="1/4 min-h-max duration-500 ease-in-out relative">
        <img
          src="https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
          className="w-full h-full object-cover brightness-50"
        />
        <h1 className="text-5xl text-white font-bold mb-5 absolute inset-x-1/4 top-10">
          Preparing the next <br />
          <span className="font-light">Travel</span>
        </h1>
      </div>
      <form
        className="w-3/4 mx-auto px-16 py-10 duration-500 ease-in-out"
        onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center gap-10">
          <label htmlFor="inputBudget" className="text-xl font-medium">
            Desired Budget :{" "}
          </label>
          <div>
            <input
              type="number"
              className="border-0 border-b-4 bg-transparent border-black"
              placeholder="in Thousand"
            />
            IDR
          </div>
        </div>

        <h1 className="text-2xl font-medium text-center mb-2">City</h1>
        <SwiperCar />
        <h1 className="text-2xl font-medium text-center mb-2">Destination</h1>
        <SwiperCar />

        <div className="slider max-w-3xl mx-auto flex flex-col gap-3">
          <div className="flex justify-between">
            <label
              htmlFor="default-range"
              className="block mb-1 font-medium text-xl text-gray-900 dark:text-white">
              Destination Allocation
            </label>
            <h1 className="text-lg">{sliderVal ? sliderVal + "%" : ""}</h1>
          </div>

          <input
            id="default-range"
            type="range"
            onChange={(e) => setSliderVal(e.target.value)}
            className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />

          <label htmlFor="numberDestination" className="font-medium text-xl">
            Number of Destinations
          </label>
          <input
            type="text"
            id="numberDestination"
            className="border-0 border-b-4 border-black bg-transparent"
            placeholder="e.g : 5"
          />
        </div>

        <button type="submit" className="w-full text-white bg-black py-3 max-w-6xl mx-auto mt-10 block">
          Generate
        </button>
      </form>
    </div>
  )
}

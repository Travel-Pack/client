import { useEffect, useState } from "react"
import { BsBinoculars, BsCompass, BsSearch } from "react-icons/bs"

export default function SearchForm() {
  const [sliderVal, setSliderVal] = useState(undefined)
  const [data, setData] = useState([])

  useEffect(() => {}, [sliderVal])
  function handleSearch(e) {
    e.preventDefault()
    setData("abc", "abdsdaisdj", "filterr!!")
  }

  const arr = ["searchTour", "destination", "city"]

  return (
    <form action="" className="w-1/5 hidden xl:block" onSubmit={handleSearch}>
      <div className="bg-white -mt-24">
        <div className="flex flex-col gap-5 ">
          <div className="px-10 py-5">
            <h1 className="text-3xl font-light capitalize">
              Find Your <br /> destination
            </h1>
            {arr.map((el, index) => {
              return (
                <div className="relative w-full my-5" key={el}>
                  <input
                    type="text"
                    name={el}
                    id={el}
                    className="bg-transparent border-0 border-b-4 border-black w-full placeholder:text-black pl-5 placeholder:capitalize"
                    placeholder={el}
                  />
                  <div className="absolute top-3">
                    {el === "searchTour" ? <BsSearch/> : ""}
                    {el === "destination" ? <BsCompass/> : ""}
                    {el === "city" ? <BsBinoculars/> : ""}
                  </div>
                </div>
              )
            })}

            <div className="slider">
              <label
                htmlFor="default-range"
                className="block mb-1 font-medium text-gray-900 dark:text-white">
                Price Filter
              </label>
              <input
                id="default-range"
                type="range"
                onChange={(e) => setSliderVal(e.target.value * 100)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <h1 className="">IDR {sliderVal ? sliderVal + "k" : ""}</h1>
            </div>
          </div>
          <button
            type="submit"
            className="block tracking-wide py-3 bg-black text-white">
            search
          </button>
        </div>
      </div>
    </form>
  )
}

import { useEffect, useState } from "react"
import { BsBinoculars, BsCompass, BsSearch } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { blackButton } from "../../helpers/buttonStyle"
import { fetcDestinations, fetchDestination } from "../../stores/actions/actionCreator"
import Loader from "../Loader"

export default function SearchForm() {
  const [sliderVal, setSliderVal] = useState(50000)
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    searchByDest: "",
    searchByCity: "",
    filterCost: sliderVal
  })
  const dispatch = useDispatch();

  useEffect(() => { 
    setData({...data, filterCost: sliderVal})
  }, [sliderVal])
  function handleSearch(e) {
    e.preventDefault();
    setLoad(true);
    dispatch(fetcDestinations("", data))
      .then(_=>{
        setData({
          ...data,
          filterCost: sliderVal
        })
        setLoad(false);
      })
  }

  const onChangeHandler = (e)=>{
    const updatedData = {...data, [e.target.name]: e.target.value};
    setData(updatedData);
  }

  if(load){
    return <Loader/>
  }
  return (
    <form action="" className="w-1/5 hidden xl:block" onSubmit={handleSearch}>
      <div className="bg-white -mt-24">
        <div className="flex flex-col gap-5 ">
          <div className="px-10 py-5">
            <h1 className="text-3xl font-light capitalize">
              Find Your <br /> destination
            </h1>
            <div className="relative w-full my-5">
              <input
                type="text"
                name="searchByDest"
                id="searchByDest"
                value={data.searchByDest}
                onChange={onChangeHandler}
                className="bg-transparent border-0 border-b-4 border-black w-full placeholder:text-black pl-5 placeholder:capitalize"
                placeholder="Enter Destination"
              />
              <div className="absolute top-3">
                <BsCompass />
              </div>
            </div>
            <div className="relative w-full my-5">
              <input
                type="text"
                name="searchByCity"
                id="searchByCity"
                value={data.searchByCity}
                onChange={onChangeHandler}
                className="bg-transparent border-0 border-b-4 border-black w-full placeholder:text-black pl-5 placeholder:capitalize"
                placeholder="Enter City Name"
              />
              <div className="absolute top-3">
                <BsBinoculars />
              </div>
            </div>
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
              <h1 className="">IDR {sliderVal + "k"}</h1>
            </div>
          </div>
          <button
            type="submit"
            className={`block tracking-wide py-3 ${blackButton}`}>
            search
          </button>
        </div>
      </div>
    </form>
  )
}

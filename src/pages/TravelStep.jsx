import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader";
import { fetchCities, fetchCity, generateTravelStep } from "../stores/actions/actionCreator";

export default function TravelStep() {

  const [citySelected, setCitySelected] = useState("");
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const city = useSelector((state) => state.cities.city);
  const [travelStepData, setTravelStepData] = useState({
    budget: "",
    numberOfDestination: "",
    allocationDestination: 50,
    CityId: "",
    DestinationIds: []
  })
  const [topText, setTopText] = useState(false)
  const [showDest, setShowDest] = useState(false)
  const nav = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    setLoad(true);
    dispatch(generateTravelStep(travelStepData))
      .then(res=>{
        setLoad(false);
        if(res === "ok"){
          nav("/travel-step/generated");
        }
      })
  }

  const onChangeHandler = (e)=>{
    const updatedTravelStepData = {...travelStepData, [e.target.name]: e.target.value}
    setTravelStepData(updatedTravelStepData);
  }

  useEffect(()=>{
    dispatch(fetchCities())
      .then(_=>{
        setLoad(false);
      })
  }, [])

  function showCity() {
    if(travelStepData.budget !== "" || travelStepData.numberOfDestination !== ""){
      setTopText(!topText)
    }
  }

  function displayDest(cityName, CityId, citySlug) {
    setCitySelected(cityName)
    const updatedTravelStepData = {...travelStepData, CityId}
    setTravelStepData(updatedTravelStepData);
    setLoad(true);
    dispatch(fetchCity(citySlug))
      .then(_=>{
        setLoad(false);
        setShowDest(!showDest);
        console.log(city);
      })
  }

  function selectDest(destinationId) {
    const updatedTravelStepData = {...travelStepData}
    const index = updatedTravelStepData.DestinationIds.findIndex((el)=>el === destinationId);
    if( index === -1){
      updatedTravelStepData.DestinationIds.push(destinationId);
    }
    else{
      updatedTravelStepData.DestinationIds.splice(index, 1);
    }
    setTravelStepData(updatedTravelStepData);
  }


  if(load){
    return <Loader />
  }
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col xl:flex-row ease-in-out h-screen">
        <div
          className={`duration-100 ease-in-out relative ${topText ? "w-1/4" : "w-full"}`}>
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div
            onClick={() => {
              setTopText(false), setShowDest(false)
            }}
            className={`absolute top-24 border-white pb-5 ${
              topText ? "text-lg xl:text-4xl left-10" : "text-lg xl:text-6xl inset-1/3 text-center"
            }`}>
            <h1 className="text-white font-semibold cursor-pointer ">Preparing</h1>
            <div className="border-b-2 pb-5 border-white">
              <h1 className="text-white font-semibold cursor-pointer ">
                <span className="font-light">the next</span> Travel
              </h1>
            </div>
          </div>
          <div
            className={`flex flex-col w-full xl:w-auto text-center absolute inset-y-[30%] xl:inset-y-1/3 bg-black h-fit bg-opacity-60 py-16 px-5 ${
              topText ? "xl:inset-x-5 gap-4" : "xl:inset-x-1/3 gap-7 "
            }`}>
            <div>
              <label htmlFor="inputBudget" className="xl:text-2xl background text-white">
                Desired Budget :
              </label>
              <input
                type="number"
                id="inputBudget"
                onChange={onChangeHandler}
                value={travelStepData.budget}
                name="budget"
                className="w-3/4 mx-auto shadow-md border-yelloku bg-transparent text-white text-center focus:ring-0 focus:border-yellow-100 font-medium xl:text-2xl placeholder:text-xl"
                placeholder="ex. 25000000"
              />
            </div>

            <div>
              <label htmlFor="inputBudget" className="xl:text-2xl background text-white">
                Total Destination :
              </label>
              <input
                type="number"
                id="inputBudget"
                value={travelStepData.numberOfDestination}
                onChange={onChangeHandler}
                name="numberOfDestination"
                className="w-3/4 mx-auto shadow-md border-yelloku bg-transparent text-white text-center focus:ring-0 focus:border-yellow-100 font-medium xl:text-2xl placeholder:text-xl"
                placeholder="ex. 2"
              />
            </div>

            <h1 className="block mb-1 font-medium text-xl text-white mx-auto">
              Allocation
            </h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="rangeDest" className="text-white text-lg">
                Proportion
              </label>
              <div className="flex justitfy-between w-full text-white">
                <h1 className="flex-1">Destination : {travelStepData.allocationDestination + "%"}</h1>
                <h1 className="flex-1">Hotel : {100 - travelStepData.allocationDestination + "%"}</h1>
              </div>
              <input
                id="rangeDest"
                type="range"
                onChange={onChangeHandler}
                value={travelStepData.allocationDestination}
                name="allocationDestination"
                className="w-full mx-auto h-1 bg-white rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {topText ? (
              <div>
                <button className="text-xl bg-yelloku w-full mx-auto text-black py-1.5 active:scale-95 duration-200">
                  new budget
                </button>
              </div>
            ) : (
              <button
                onClick={showCity}
                className="text-xl bg-yelloku w-full mx-auto text-black py-1.5 active:scale-95 duration-200">
                choose city
              </button>
            )}
            {showDest ? (
              <h1 className="text-2xl font-medium text-white">Destination in {citySelected}</h1>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={`mx-auto pl-2 pt-2 duration-200 ease-in-out bg-gray-50 ${
            topText ? "block w-3/4 " : "hidden w-0"
          }`}>
          <div
            className={`${
              showDest ? "w-0 hidden" : "w-full block overflow-y-auto max-h-screen"
            }`}
            id="scrollStyle">
            <div className="flex flex-wrap gap-2 justify-center mt-20">
              {cities.map((el) => {
                return (
                  <div className="max-w-xs aspect-square" onClick={()=>displayDest(el.name, el.id, el.slug)} key={el.id}>
                    <img src={el.image} alt={el.name} className="w-full h-full" />
                  </div>
                )
              })}
            </div>
          </div>
          {showDest ? (
            <form onSubmit={(e) => handleSubmit(e)}>
              <div
                className="w-full block max-h-screen mt-20 overflow-y-auto"
                id="scrollStyle">
                <div className="flex flex-wrap gap-2 justify-center max-h-[800px]">
                  {city.destination.map((el) => {
                    let classDestinationCard = "max-w-xs aspect-square ";
                    if(travelStepData.DestinationIds.findIndex((destinationId)=>destinationId === el.id) !== -1){
                      classDestinationCard += "border border-8 border-yelloku"
                    }
                    return (
                      <div className={classDestinationCard} onClick={()=>{selectDest(el.id)}} key={el.id}>
                        <img src={el.mainImg} alt="" className="w-full h-full" />
                      </div>
                    )
                  })}
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-lg font-medium underline text-black bg-yelloku py-3 mt-2 mx-auto block">
                Generate
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

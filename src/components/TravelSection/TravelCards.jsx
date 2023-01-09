import { useState, useRef } from "react"
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"

export default function TravelCards() {

  const {type} = useParams();
  // const destinationsByCity = useSelector((state) => state.destinations.destinationsByCity);
  // const hotelsByCity = useSelector((state) => state.destinations.hotelsByCity);
  const destinations = useSelector((state) => state.destinations.destinations);
  const city = useSelector((state) => state.cities.city);
  
  let data;
  
  if(type === "destination"){
    data = city.destination;
  }
  else if(type === "hotel"){
    data = city.hotel;
  }
  else{
    data = destinations;
  }

  const nav = useNavigate()
  const hRef = useRef(null)

  function navToDetail(slug) {
    if(type === "destinations"){
      nav(`/destination/${slug}`)
    }
    else{
      nav(`/hotel/${slug}`)
    }
  }
  
  const wordCount = hRef.current ? hRef.current.textContent.split(" ").length : 0
  
  // useEffect(() => {
  //   window.clamp(moduleRef.current, { clamp: 3 })
  // })

  return (
    <div className="flex gap-6 flex-wrap w-full xl:w-4/5">
      {!data.length? <h1 className="mx-auto text-2xl font-bold">{`Sorry, no ${type} in this city yet.`}</h1>
      :
      data.map((el) => {
        return (
          <div key={el.id} className="bg-white shadow-md flex flex-col cursor-pointer justify-between max-w-[450px] max-h-[470px] mb-5 overflow-hidden active:scale-95 duration-200">
            <div className="w-full h-1/2" onClick={()=>{navToDetail(el.slug)}}>
              <img
                src={type === "hotel"? el.image : el.mainImg}
                className="w-full h-full object-cover"
                alt={el.name}
              />
            </div>
            <div className="px-7">
              <div className="flex justify-between pt-5">
                <h1 className="text-xl tracking-wide">{el.name}</h1>
                <h1 className="text-xl tracking-wide text-red-500">{type === "hotel"? el.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) : el.cost.toLocaleString("id-ID", {style:"currency", currency:"IDR"})}</h1>
              </div>
              <h1 className="text-red-500">7.5 Superb</h1>

              <h1 className="text-stone-500 font-light py-5 line-clamp overflow-ellipsis" ref={hRef}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                fuga provident animi quae doloremque esse sit
              </h1>
            </div>
            <div className="flex bg-yelloku w-full gap-10 px-5 py-4">
              <h1>12 Days</h1>
              <h1>18+</h1>
              <h1>{el.CityId} City Name</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

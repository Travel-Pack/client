import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export default function IteneraryCards({type}) {

  const generatedTravelSteps = useSelector((state) => state.travelSteps.generatedTravelSteps);
  const travelSteps = useSelector((state) => state.travelSteps.travelSteps);
  let data = generatedTravelSteps;
  if(type === "wishlist") {
    data = travelSteps;
  }
  const nav = useNavigate()
  function handleSave() {
    nav("/my-travel-step")
  }
  const arr = [1, 2, 3, 4]

  if(!data.length){
    return <h1 className="font-bold text-center text-2xl">Sorry, no matched travel steps.</h1>
  }
  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((el, index) => {
        let total = el.hotel.price;
        return (
          <div
            className="col-span-2 shadow-lg flex flex-col gap-2 py-7 px-6 border"
            key={index}>
            <h1 className="text-xl font-semibold">Travel Step {index + 1}</h1>
            <div>
              <h1 className="font-bold text-2xl">Hotel</h1>
              <div className="flex justify-between text-lg">
                <h1>{el.hotel.name}</h1>
                <h3>{el.hotel.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h3>
              </div>
              <div className="flex justify-center gap-1">
                <div className="w-1/2 aspect-square bg-emerald-200">
                  <img src={el.hotel.image} className="w-full h-full object-cover" alt="" />
                </div>
                {/* <div className="w-1/2 aspect-square bg-emerald-200">
                  <img src="https://img.freepik.com/free-photo/sunrise-lake-batur_1385-1765.jpg?w=1800&t=st=1672982893~exp=1672983493~hmac=1fc8014cc11300f87cda64772028284a3e6c46745bc00e08ec73bcfd9f62fef3" className="w-full h-full object-cover" alt="" />
                </div> */}
              </div>
            </div>
            <h1 className="font-bold text-2xl">Destination(s)</h1>
            {el.destination.map(destination => {
              total += destination.cost;
              return <div key={destination.id}>
                <div className="flex justify-between text-lg">
                  <h1>{destination.name}</h1>
                  <h3>{destination.cost.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h3>
                </div>
                <div className="flex gap-1 justify-center">
                  <div className="w-1/2 aspect-square bg-amber-200">
                    <img src={destination.mainImg} className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </div>
            })}
            <div>
              <div className="flex justify-between">
                <h1>Subtotal</h1>
                <h3>{total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h3>
              </div>
            </div>
            <button className="bg-black px-7 py-2 text-white" onClick={handleSave}>
              Save
            </button>
          </div>
        )
      })}
    </div>
  )
}

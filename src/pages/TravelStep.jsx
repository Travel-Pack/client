import SwiperCar from "../components/Swiper/SwiperCar"

export default function TravelStep() {
  function handleSort() {
    console.log("blabla")
  }
  return (
    <div className="bg-stone-50 mt-20 flex gap-10">
      <div className="1/4 min-h-max">
        <img
          src="https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/4 mx-auto py-7">
        <h1 className="text-3xl font-semibold">Preparing the next Travel</h1>
        <div className="flex items-center gap-10">
          <label htmlFor="inputBudget" className="text-xl">
            Desired Budget :{" "}
          </label>
          <div>
            <input
              type="number"
              className="border-0 border-b-4 bg-transparent border-black"
            />
            IDR
          </div>
        </div>

        <SwiperCar />
      </div>
    </div>
  )
}

import { useNavigate } from "react-router-dom"

export default function TravelStep() {
const nav = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    nav("/travelItenerary")
  }
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h1 className="text-center">Travel Step</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="budget"></label>
          <input type="number" name="budget" id="budget" />
        </div>
        <div>
          <h1 className="">City</h1>
          <div className="flex  gap-5">
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1>Destination</h1>
          <div className="flex gap-5">
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
            <div className="card h-44 w-44 bg-yellow-300">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div>
          <label
            for="default-range"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Default range
          </label>
          <input
            id="default-range"
            type="range"
            value="50"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
        </div>

        <div className="">
          <input type="number" name="destination" />
        </div>

        <button type="submit">Generate</button>
      </form>
    </div>
  )
}

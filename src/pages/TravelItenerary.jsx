import { useNavigate } from "react-router-dom"

export default function TravelItenerary() {
  const nav = useNavigate()
  function handleSave() {
    nav("/my-travel-step")
  }
  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto mt-20">
      <h1>Travel Step</h1>
      <div className="grid grid-cols-6">
        <div>
          <h1>Itenerary A</h1>
          <div>
            <div className="flex">
              <h1>Hotel</h1>
              <h3>IDR 8000k</h3>
            </div>
            <div className="w-52 h-52 bg-emerald-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-emerald-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="flex">
              <h1>Deestination A</h1>
              <h3>IDR 8000k</h3>
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="flex">
              <h1>Subtotal</h1>
              <h3>IDR 1200k</h3>
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <button className="bg-black px-7 py-2 text-white" onClick={handleSave}>
            Save
          </button>
        </div>
        <div>
          <h1>Itenerary A</h1>
          <div>
            <div className="flex">
              <h1>Hotel</h1>
              <h3>IDR 8000k</h3>
            </div>
            <div className="w-52 h-52 bg-emerald-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-emerald-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="flex">
              <h1>Deestination A</h1>
              <h3>IDR 8000k</h3>
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="flex">
              <h1>Subtotal</h1>
              <h3>IDR 1200k</h3>
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <button className="bg-black px-7 py-2 text-white" onClick={handleSave}>
            Save
          </button>
        </div>
        <div>
          <h1>Itenerary A</h1>
          <div>
            <div className="flex">
              <h1>Hotel</h1>
              <h3>IDR 8000k</h3>
            </div>
            <div className="w-52 h-52 bg-emerald-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-emerald-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="flex">
              <h1>Deestination A</h1>
              <h3>IDR 8000k</h3>
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="flex">
              <h1>Subtotal</h1>
              <h3>IDR 1200k</h3>
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-52 h-52 bg-amber-200">
              <img src="" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <button className="bg-black px-7 py-2 text-white" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

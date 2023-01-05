import { useNavigate } from "react-router-dom"

export default function TravelItenerary() {
  const nav = useNavigate()
  function handleSave() {
    nav("/my-travel-step")
  }
  return (
    <div className="flex flex-col justify-center container mx-auto mt-20">
      <h1 className="text-center text-4xl font-medium mb-10">Travel Step</h1>
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-2 shadow-lg flex flex-col gap-2 py-7 px-6 border">
          <h1 className="text-xl font-semibold">Itenerary A</h1>
          <div>
            <div className="flex justify-between text-lg">
              <h1>Hotel</h1>
              <h3>IDR 8000k</h3>
            </div>
            <div className="flex justify-center gap-1">
              <div className="w-1/2 aspect-square bg-emerald-200">
                <img src="" className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-1/2 aspect-square bg-emerald-200">
                <img src="" className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg">
              <h1>Deestination A</h1>
              <h3>IDR 8000k</h3>
            </div>
            <div className="flex gap-1 justify-center">
              <div className="w-1/2 aspect-square bg-amber-200">
                <img src="" className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-1/2 aspect-square bg-amber-200">
                <img src="" className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h1>Subtotal</h1>
              <h3>IDR 1200k</h3>
            </div>
          </div>
          <button
            className="bg-black px-7 py-2 text-white"
            onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

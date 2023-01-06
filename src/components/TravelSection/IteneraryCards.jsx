import { useNavigate } from "react-router-dom"

export default function IteneraryCards() {
  const nav = useNavigate()
  function handleSave() {
    nav("/my-travel-step")
  }
  const arr = [1, 2, 3, 4]
  return (
    <div className="grid grid-cols-4 gap-5">
      {arr.map((el) => {
        return (
          <div
            className="col-span-2 shadow-lg flex flex-col gap-2 py-7 px-6 border"
            key={el}>
            <h1 className="text-xl font-semibold">Itenerary {el}</h1>
            <div>
              <div className="flex justify-between text-lg">
                <h1>Hotel</h1>
                <h3>IDR 8000k</h3>
              </div>
              <div className="flex justify-center gap-1">
                <div className="w-1/2 aspect-square bg-emerald-200">
                  <img src="https://img.freepik.com/free-photo/sunrise-lake-batur_1385-1765.jpg?w=1800&t=st=1672982893~exp=1672983493~hmac=1fc8014cc11300f87cda64772028284a3e6c46745bc00e08ec73bcfd9f62fef3" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-1/2 aspect-square bg-emerald-200">
                  <img src="https://img.freepik.com/free-photo/sunrise-lake-batur_1385-1765.jpg?w=1800&t=st=1672982893~exp=1672983493~hmac=1fc8014cc11300f87cda64772028284a3e6c46745bc00e08ec73bcfd9f62fef3" className="w-full h-full object-cover" alt="" />
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
                  <img src="https://img.freepik.com/free-photo/sunrise-lake-batur_1385-1765.jpg?w=1800&t=st=1672982893~exp=1672983493~hmac=1fc8014cc11300f87cda64772028284a3e6c46745bc00e08ec73bcfd9f62fef3" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-1/2 aspect-square bg-amber-200">
                  <img src="https://img.freepik.com/free-photo/sunrise-lake-batur_1385-1765.jpg?w=1800&t=st=1672982893~exp=1672983493~hmac=1fc8014cc11300f87cda64772028284a3e6c46745bc00e08ec73bcfd9f62fef3" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h1>Subtotal</h1>
                <h3>IDR 1200k</h3>
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

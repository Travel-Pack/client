import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function TravelCards() {
  const nav = useNavigate()
  const hRef = useRef(null)

  function navToDetail() {
    nav("/destination/gili")
  }
  
  const wordCount = hRef.current ? hRef.current.textContent.split(" ").length : 0

  // useEffect(() => {
  //   window.clamp(moduleRef.current, { clamp: 3 })
  // })

  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className="flex gap-6 flex-wrap w-full xl:w-4/5">
      {item.map((el) => {
        return (
          <div className="bg-white shadow-md flex flex-col cursor-pointer justify-between max-w-[450px] max-h-[470px] mb-5 overflow-hidden active:scale-95 duration-200" key={el}>
            <div className="w-full h-1/2" onClick={navToDetail}>
              <img
                src="https://img.freepik.com/free-photo/kelingking-beach-sunset-nusa-penida-island-bali-indonesia_335224-338.jpg?w=1380&t=st=1672934804~exp=1672935404~hmac=565e86391fa85de1eb65bbe6c1ee26d5f6e64f6f0e00dcfc83566d0fe2483123"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="px-7">
              <div className="flex justify-between pt-5">
                <h1 className="text-xl tracking-wide">Iceland</h1>
                <h1 className="text-xl tracking-wide text-red-500">$3500</h1>
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
              <h1>Europe</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Cards({ type, cities, destinations }) {
  const nav = useNavigate()

  function handleNavCity(slug) {
    nav(`/find-byCity/${slug}`)
  }
  function handleNavDestination(slug) {
    nav(`/destination/${slug}`)
  }

  useEffect(() => {
  }, [])
  if (type === "city") {
    return (
      <div className="grid px-2 mt-3 grid-cols-2 xl:grid-cols-4 gap-2">

        {cities.map((el) => {

          return (
            <div
              key={el.id}
              className="aspect-square duration-300 ease-out overflow-hidden cursor-pointer"
              onClick={()=>{handleNavCity(el.slug)}}>
              <img
                className="object-cover h-full w-full group-hover:scale-105 duration-700 hover:brightness-125"
                src={el.image}
                alt={el.name}
              />
            </div>
          )
        })}
      </div>
    )
  }
  if (type === "destination") {
    return (
      <div className="grid px-2 mt-3 xl:grid-cols-3">
        {destinations.map(el => {
          return <div
            key={el.id}
            className=" duration-300 ease-out overflow-hidden cursor-pointer"
            onClick={()=>{handleNavDestination(el.slug)}}>
            <img
              className="object-cover h-full w-full group-hover:scale-105 duration-700"
              src={el.mainImg}
              alt={el.name}
            />
          </div>
        })}
      </div>
    )
  }
}

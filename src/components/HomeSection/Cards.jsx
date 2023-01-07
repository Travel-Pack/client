import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Cards({ type }) {
  const nav = useNavigate()

  function handleNavCity() {
    /* ganti params! */
    nav(`/find-byCity/${1}`)
  }
  function handleNavDestination() {
    /* ganti params! */
    nav(`/destination/gili`)
  }

  const cityImg = [
    "https://img.freepik.com/premium-photo/monas-monument-jakarta-indonesia_134785-10762.jpg?w=1800",
    "https://statik.tempo.co/data/2020/04/18/id_931835/931835_720.jpg",
    "https://images.unsplash.com/photo-1615608178738-37d47d27c13d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1615608273520-ce1dda209c29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1615556075244-9dd09e1934fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1627071690191-2a5f5f482eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80",
    "https://images.unsplash.com/photo-1626710916458-4307c35d48e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1614088459293-5669fadc3448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1624495833746-d7415f9149af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  ]

  useEffect(() => {
    // console.log(type)
  }, [])
  if (type === "city") {
    return (
      <div className="grid px-2 mt-3 grid-cols-4 gap-2">
        {cityImg.map((el) => {
          return (
            <div
              className="aspect-square duration-300 ease-out overflow-hidden cursor-pointer"
              onClick={handleNavCity}>
              <img
                className="object-cover h-full w-full group-hover:scale-105 duration-700 hover:brightness-125"
                src={el}
                alt="pura bali"
              />
            </div>
          )
        })}
      </div>
    )
  }
  if (type === "destination") {
    return (
      <div className="grid px-2 mt-3 grid-cols-3">
        <div
          className=" duration-300 ease-out overflow-hidden cursor-pointer"
          onClick={handleNavDestination}>
          <img
            className="object-cover h-full w-full group-hover:scale-105 duration-700"
            src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
            alt="pura bali"
          />
        </div>
        <div
          className="duration-300 ease-out overflow-hidden cursor-pointer"
          onClick={handleNavDestination}>
          <img
            className="object-cover h-full w-full group-hover:scale-105 duration-700"
            src="https://img.freepik.com/free-photo/temple-gates-lempuyang-luhur-temple-bali-indonesia_335224-367.jpg?w=1380&t=st=1672832316~exp=1672832916~hmac=6674bc7d66c9a2496df16af54aca75644263b9076fb740b01339df0848575e39"
            alt="pura bali"
          />
        </div>
        <div className="duration-300 ease-out">
          <img
            className="object-cover h-full w-full group-hover:scale-105 duration-700"
            src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
            alt="pura bali"
          />
        </div>
        <div className="duration-300 ease-out">
          <img
            className="object-cover h-full w-full group-hover:scale-105 duration-700"
            src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
            alt="pura bali"
          />
        </div>
        <div
          className="duration-300 ease-out overflow-hidden cursor-pointer"
          onClick={handleNavDestination}>
          <img
            className="object-cover h-full w-full group-hover:scale-105 duration-700"
            src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
            alt="pura bali"
          />
        </div>
        <div
          className="duration-300 ease-out overflow-hidden cursor-pointer"
          onClick={handleNavDestination}>
          <img
            className="object-cover h-full w-full group-hover:scale-105 duration-700"
            src="https://img.freepik.com/free-photo/temple-gates-lempuyang-luhur-temple-bali-indonesia_335224-367.jpg?w=1380&t=st=1672832316~exp=1672832916~hmac=6674bc7d66c9a2496df16af54aca75644263b9076fb740b01339df0848575e39"
            alt="pura bali"
          />
        </div>
        <div className="duration-300 ease-out">
          <img
            className="object-cover h-full w-full group-hover:scale-105 duration-700"
            src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
            alt="pura bali"
          />
        </div>
        <div className=" duration-300 ease-out">
          <img
            className="object-cover h-full w-full group-hover:scale-105 duration-700"
            src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
            alt="pura bali"
          />
        </div>
      </div>
    )
  }
}

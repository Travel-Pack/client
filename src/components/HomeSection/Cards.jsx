import { useNavigate } from "react-router-dom"

export default function Cards() {
  const nav = useNavigate()

  function handleNav() {
    /* ganti params! */
    nav(`/destination/gili`)
  }
  return (
    <div className="grid grid-cols-4 gap-2 px-2 mt-3">
      <div
        className="aspect-square duration-300 ease-out overflow-hidden cursor-pointer"
        onClick={handleNav}>
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-700"
          src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
          alt="pura bali"
        />
      </div>
      <div
        className="aspect-square duration-300 ease-out overflow-hidden cursor-pointer"
        onClick={handleNav}>
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-700"
          src="https://img.freepik.com/free-photo/temple-gates-lempuyang-luhur-temple-bali-indonesia_335224-367.jpg?w=1380&t=st=1672832316~exp=1672832916~hmac=6674bc7d66c9a2496df16af54aca75644263b9076fb740b01339df0848575e39"
          alt="pura bali"
        />
      </div>
      <div className=" aspect-square duration-300 ease-out">
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-700"
          src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
          alt="pura bali"
        />
      </div>
      <div className=" aspect-square duration-300 ease-out">
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-700"
          src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
          alt="pura bali"
        />
      </div>
      <div
        className="aspect-square duration-300 ease-out overflow-hidden cursor-pointer"
        onClick={handleNav}>
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-700"
          src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
          alt="pura bali"
        />
      </div>
      <div
        className="aspect-square duration-300 ease-out overflow-hidden cursor-pointer"
        onClick={handleNav}>
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-700"
          src="https://img.freepik.com/free-photo/temple-gates-lempuyang-luhur-temple-bali-indonesia_335224-367.jpg?w=1380&t=st=1672832316~exp=1672832916~hmac=6674bc7d66c9a2496df16af54aca75644263b9076fb740b01339df0848575e39"
          alt="pura bali"
        />
      </div>
      <div className=" aspect-square duration-300 ease-out">
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-700"
          src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
          alt="pura bali"
        />
      </div>
      <div className=" aspect-square duration-300 ease-out">
        <img
          className="object-cover h-full w-full group-hover:scale-105 duration-700"
          src="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?w=1380&t=st=1672206056~exp=1672206656~hmac=bb75d482494deca58cef3e09ca5236a0569a8a5c920f2cc12745b0619fbc4222"
          alt="pura bali"
        />
      </div>
    </div>
  )
}

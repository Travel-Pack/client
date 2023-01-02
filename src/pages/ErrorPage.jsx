import { NavLink, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  
  return (
    <div className="bg-[url('./assets/images/errorPage.jpg')] min-h-screen bg-no-repeat bg-cover">
      <div className="w-full mx-auto flex flex-col gap-3 items-center justify-center min-h-screen backdrop-brightness-75 backdrop-saturate-150">
      <h1 className="text-[10rem] font-bold text-yellow-300 mb-0">Oops!</h1>
        <p className="text-5xl font-light text-white">Sorry, were losing the destination.</p>
        <h1 className="text-9xl font-black text-yellow-300">{error.status}</h1>
        <p className="text-5xl font-medium text-white">
          <i>{error.statusText || error.message}</i>
        </p>
        <NavLink to={"/"} className="text-3xl text-black bg-yellow-300 px-6 py-2.5 mt-5">
          Back to Home
        </NavLink>
      </div>
    </div>
  )
}

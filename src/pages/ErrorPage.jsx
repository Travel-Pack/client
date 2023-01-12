import { NavLink, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  
  return (
    <div className="bg-[url('./assets/images/errorPage.jpg')] h-screen w-screen bg-no-repeat bg-cover fixed">
      <div className="w-full mx-auto flex flex-col gap-3 items-center justify-center min-h-screen backdrop-brightness-75 backdrop-saturate-150">
      <h1 className="text-[10rem] font-bold text-yelloku mb-0">Oops!</h1>
        <p className="text-5xl font-light text-white">Sorry, were losing the destination.</p>
        <h1 className="text-9xl font-black text-yelloku">{error.status}</h1>
        <p className="text-5xl font-medium text-white">
          <i>{error.statusText || error.message}</i>
        </p>
        <NavLink to={"/"} className="text-sm text-black bg-white px-10 py-3 mt-5 tracking-wide active:scale-95 duration-200">
          back to home
        </NavLink>
      </div>
    </div>
  )
}

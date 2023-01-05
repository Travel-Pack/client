import Cards from "../components/HomeSection/Cards"
import Compass from "../components/svg/Compass"

export function HomePage() {
  return (
    <div>
      <div className="flex-col flex h-screen items-center justify-evenly bg-cover bg-[url('./assets/images/giliTrawangan.jpg')]">
        <div>
          <h1 className="text-center font-bold text-5xl text-white">
            Travel Pack
          </h1>
          <h1 className="text-3xl font-light text-white">
            Join Global community to list all worth destination in the world
          </h1>
          <button className="bg-yelloku py-2 px-9 block mx-auto mt-2 lowercase">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-col flex pb-10">
        <div className="bg-yelloku flex items-center justify-center py-10 gap-14">
          <div className="flex items-center">
            <Compass />
            <input
              type="text"
              placeholder="Where to?"
              className="bg-transparent border-0 border-b-2  pr-20 border-zinc-900 py-2 placeholder:text-lg placeholder:text-zinc-900 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Province?"
              className="bg-transparent border-0 border-b-2  pr-20 border-zinc-900 py-2 placeholder:text-lg placeholder:text-zinc-900 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City?"
              className="bg-transparent border-0 border-b-2  pr-20 border-zinc-900 py-2 placeholder:text-lg placeholder:text-zinc-900 focus:outline-none"
            />
          </div>
          <div>
            <button className="bg-zinc-900 text-yellow-50 px-14 py-2.5 active:scale-95 duration-200">
              find now
            </button>
          </div>
        </div>
        <div className="container mx-auto my-5">
          <h1 className="text-4xl tracking-wide border-l-4 border-zinc-900 pl-7 font-bold">
            Amazing <span className="font-light">Destinations And Fun Adventures</span>
            Waiting For You
          </h1>
        </div>
        <Cards />
      </div>

      <section id="destination" className="flex flex-col"></section>
    </div>
  )
}

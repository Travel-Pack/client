import IteneraryCards from "../components/TravelSection/IteneraryCards";

export default function MyTravelStep() {
  return (
    <div className="flex flex-col gap-5 justify-center mt-20">
      <section id="title" className="bg-yelloku py-10">
        <div className="container mx-auto flex flex-col gap-5">
          <h1 className="text-4xl font-medium">My List</h1>
        </div>
      </section>
      <section id="cards" className="container mx-auto max-w-6xl">
        <IteneraryCards />
      </section>
    </div>
  )
}

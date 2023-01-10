import { useNavigate } from "react-router-dom"
import IteneraryCards from "../components/TravelSection/IteneraryCards"

export default function TravelItenerary() {
  return (
    <div className="flex flex-col gap-5 justify-center mt-20">
      <section id="title" className="bg-yelloku py-5">
        <div className="container mx-auto flex flex-col gap-5">
          <h1 className="text-4xl font-medium">Travel Step</h1>
        </div>
      </section>
      <section id="cards" className="mx-auto">
        <IteneraryCards />
      </section>
    </div>
  )
}

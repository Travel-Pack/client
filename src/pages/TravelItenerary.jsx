import { useNavigate } from "react-router-dom"
import IteneraryCards from "../components/TravelSection/IteneraryCards"

export default function TravelItenerary() {
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=1800&t=st=1673367124~exp=1673367724~hmac=1eb149ec475353213df55a1a7d2aadbdc30131bbe9b4cffee40a80fd132a2ece')] bg-cover bg-fixed">
      <div className="flex flex-col gap-5 justify-center mt-20 backdrop-blur-md">
        <section id="title" className="bg-black py-5 text-yelloku">
          <div className="container mx-auto flex flex-col gap-5">
            <h1 className="text-4xl font-medium">Travel Step</h1>
          </div>
        </section>
        <section id="cards" className="mx-auto">
          <IteneraryCards />
        </section>
      </div>
    </div>
  )
}

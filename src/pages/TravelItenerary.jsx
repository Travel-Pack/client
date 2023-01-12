import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PremiumModal from "../components/PremiumModal"
import Skeleton from "../components/Skeleton"
import IteneraryCards from "../components/TravelSection/IteneraryCards"
import { blackButton } from "../helpers/buttonStyle"

export default function TravelItenerary() {
  const [showModal, setShowModal] = useState(false)
  const needPremium = useSelector((state) => state.others.needPremium)

  function toggleModal(){
    setShowModal(!showModal)
  }

  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=1800&t=st=1673367124~exp=1673367724~hmac=1eb149ec475353213df55a1a7d2aadbdc30131bbe9b4cffee40a80fd132a2ece')] bg-cover bg-fixed">
      <div className="flex flex-col gap-5 justify-center mt-0 md:mt-20 backdrop-blur-md">
        <section id="title" className="bg-black py-5 text-yelloku">
          <div className="container mx-auto flex flex-col gap-5">
            <h1 className="text-4xl font-medium">Travel Step</h1>
          </div>
        </section>
        <section id="cards" className="mx-auto">
          <IteneraryCards />
          {needPremium ? (
            <section>
              <div className="grid gap-20 px-10 mt-20 grid-cols-2">
                <Skeleton />
                <Skeleton />
              </div>
              <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <img
                      alt="Party"
                      src="https://images.unsplash.com/photo-1489721775296-bd64cd2c4ddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="lg:py-24">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                      Upgrade to premium
                    </h2>
                    <p className="mt-4 text-gray-600">
                      Join travel pack family for more travel steps and many
                      more!
                    </p>
                    <button
                      onClick={toggleModal}
                      className={`mt-8 inline-flex items-center rounded border px-8 py-3 ${blackButton}`}>
                      <span className="text-sm font-medium"> Upgrade now </span>
                      <svg
                        className="ml-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <></>
          )}
        </section>
      </div>
      <PremiumModal toggleModal={toggleModal} showModal={showModal}/>
    </div>
  )
}

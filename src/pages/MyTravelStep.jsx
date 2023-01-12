import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Loader from "../components/Loader"
import IteneraryCards from "../components/TravelSection/IteneraryCards"
import { fetchTravelSteps } from "../stores/actions/actionCreator"

export default function MyTravelStep() {
  const [load, setLoad] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTravelSteps()).then((_) => {
      setLoad(false)
    })
  }, [])

  if (load) {
    return <Loader />
  }
  return (
    <div>
      <section
        id="title"
        className="h-screen fixed bg-[url('https://img.freepik.com/free-photo/bali-pagoda-indonesia_1150-11015.jpg?w=826&t=st=1673369220~exp=1673369820~hmac=f42faa9842992555a7b2c5efd8bf378903f99acb3c6fcefca4c607b1570e2e97')] bg-slate-400 bg-blend-multiply bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full">
          <div className="mx-auto flex flex-col pt-24 gap-5 px-10 h-full">
            <h1 className="text-5xl font-semibold text-white text-center">
              My Travel <br /> List
            </h1>
          </div>
        </div>
      </section>
      <div className="flex gap-5 justify-center mt-20">
        <section id="cards" className="container mx-auto max-w-6xl">
          <IteneraryCards type={"wishlist"} />
        </section>
      </div>
    </div>
  )
}

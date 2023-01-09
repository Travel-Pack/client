import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import IteneraryCards from "../components/TravelSection/IteneraryCards";
import { fetchTravelSteps } from "../stores/actions/actionCreator";

export default function MyTravelStep() {

  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchTravelSteps())
      .then(_=>{
        setLoad(false);
      })
  }, [])

  if(load){
    return <Loader/>
  }
  return (
    <div className="flex flex-col gap-5 justify-center mt-20">
      <section id="title" className="bg-yelloku py-10">
        <div className="container mx-auto flex flex-col gap-5">
          <h1 className="text-4xl font-medium">My List</h1>
        </div>
      </section>
      <section id="cards" className="container mx-auto max-w-6xl">
        <IteneraryCards type={"wishlist"} />
      </section>
    </div>
  )
}

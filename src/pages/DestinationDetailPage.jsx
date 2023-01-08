import { Outlet, NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Loader from "../components/Loader";
import { fetchDestination } from "../stores/actions/actionCreator";

export function DestinationDetailPage() {

  const destination = useSelector((state) => state.destinations.destination)
  let { destinationSlug } = useParams();
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchDestination(destinationSlug))
      .then(_=>{
        setLoad(false);
      })
  }, [])

  if(load){
    return <Loader/>
  }
  return (
    <div>
      <section style={{backgroundImage: `url(${destination.mainImg})`}} className={`bg-cover bg-bottom bg-no-repeat h-96 mt-20`}>
        <div className="flex-col flex mx-auto justify-end h-full pt-10 px-16 backdrop-contrast-110 backdrop-brightness-75">
          <div className="max-w-lg text-center sm:text-left">
            <div className="font-caramel text-xl font-bold text-white md:text-7xl">
              {destination.name},{" "}
              <h3 className="text-4xl font-light">City Name</h3>
            </div>
            <div className="mt-14 sm:mt-6">
              <div className="flex gap-6" id="NavDetail">
                <NavLink
                  to={""}
                  className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-medium hover:bg-white w-32 py-2 text-center text-white hover:text-black duration-200">
                  Information
                </NavLink>
                <NavLink
                  to="review"
                  className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-medium hover:bg-white w-32 py-2 text-center text-white hover:text-black duration-200">
                  Review
                </NavLink>
                {/* <NavLink
                  to="covid"
                  className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-medium hover:bg-white w-32 py-2 text-center text-white hover:text-black duration-200">
                  Covid Stats
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  )
}

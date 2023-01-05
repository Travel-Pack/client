import { Outlet, NavLink } from "react-router-dom";

export function DestinationDetailPage() {

  return (
    <div>
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1576035739451-40088e802245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)] bg-cover bg-bottom bg-no-repeat h-80 mt-20">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="font-caramel text-xl font-bold text-white sm:text-7xl md:text-7xl">
              Gili Lawa Darat Island, <p className="text-4xl">East Nusa Tenggara</p>
            </h2>
            <div className="mt-14 sm:mt-6">
              <div className="flex justify-between" id="NavDetail">
                <NavLink to={""} className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-bold hover:bg-white w-32 py-2 text-center text-white hover:text-black">Information</NavLink>
                <NavLink to="review" className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-bold hover:bg-white w-32 py-2 text-center text-white hover:text-black">Review</NavLink>
                <NavLink to="covid" className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-bold hover:bg-white w-32 py-2 text-center text-white hover:text-black">Covid
                  Stats</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet/>
    </div>
  )
}

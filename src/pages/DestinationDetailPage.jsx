import { Outlet, NavLink } from "react-router-dom"

export function DestinationDetailPage() {
  return (
    <div>
      <section className="bg-[url(https://images.unsplash.com/photo-1576035739451-40088e802245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)] bg-cover bg-bottom bg-no-repeat h-96 mt-20">
        <div className="flex-col flex mx-auto justify-end h-full pt-10 px-16 backdrop-contrast-110 backdrop-brightness-75">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="font-caramel text-xl font-bold text-white md:text-7xl">
              Gili Lawa Darat Island,{" "}
              <h3 className="text-4xl font-light">East Nusa Tenggara</h3>
            </h2>
            <div className="mt-14 sm:mt-6">
              <div className="flex justify-between" id="NavDetail">
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
                <NavLink
                  to="covid"
                  className="font-nunito hover:underline hover:decoration-8 hover:decoration-yellow-200 cursor-pointer font-medium hover:bg-white w-32 py-2 text-center text-white hover:text-black duration-200">
                  Covid Stats
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  )
}

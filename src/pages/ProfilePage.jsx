import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserData, updateUser } from "../stores/actions/actionCreator"
import Loader from "../components/Loader"
import { VscEdit } from "react-icons/vsc"
import { blackButton } from "../helpers/buttonStyle"
import PremiumModal from "../components/PremiumModal"

export function ProfilePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.others.user)
  const [showModal, setShowModal] = useState(false)
  const [updateData, setUpdateData] = useState({})
  const [load, setLoad] = useState(true)
  const [inputActive1, setInputActive1] = useState(false)
  const [inputActive2, setInputActive2] = useState(false)
  const [inputActive3, setInputActive3] = useState(false)
  const [inputActive4, setInputActive4] = useState(false)

  const onChangeHandler = (e) => {
    const updatedupdateData = {
      ...updateData,
      [e.target.name]: e.target.value,
    }
    setUpdateData(updatedupdateData)
  }

  function handleUpdateProfile(e) {
    e.preventDefault()
    dispatch(updateUser(updateData)).then((res) => {
      setLoad(true)
      console.log(res)
      if (res === "ok") {
        dispatch(fetchUserData()).then((_) => {
          navigate("/profile")
        })
      }
      setLoad(false)
    })
  }

  function toggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    dispatch(fetchUserData()).then((_) => {
      setLoad(false)
    })
  }, [])

  useEffect(() => {
    setUpdateData({
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      password: "",
      passwordConfirmation: "",
    })
  }, [user])

  if (load) {
    return <Loader />
  }
  return (
    <section className="bg-white">
      <NavLink to={"/"} className="text-2xl fixed right-5 top-5">
        Travel <span className="font-bold">Pack</span>
      </NavLink>
      {/*Ganti 2 logonya*/}
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1601844075967-c1376c021732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <NavLink to={"/"} className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <img
                src="/assets/travelPack.png"
                alt="travelPack-Logo"
                className="h-24 sm:h-24 bg-white rounded-full p-2"
              />
            </NavLink>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Let's go TravelPacking!
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Get ready and prepare your travel here!!
            </p>
          </div>
        </section>
        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 bg-stone-50 min-h-screen">
          <div className="max-w-xl lg:max-w-3xl p-5 bg-white">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/">
                <span className="sr-only">Home</span>
                <img
                  src="/assets/travelPack.png"
                  alt="travelPack-Logo"
                  className="h-14"
                />
              </a>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Let's go TravelPacking!
              </h1>
            </div>
            <form
              onSubmit={handleUpdateProfile}
              className="mt-2 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <h1 className="font-medium text-gray-700 text-center text-lg">
                  Hallo {user.fullName}!
                  {user.isPremium ? (
                    <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2545/2545603.png"
                        className="-ml-1 mr-1.5 h-4 w-4"
                      />
                      <p className="whitespace-nowrap text-sm">Premium</p>
                    </span>
                  ) : (
                    <></>
                  )}
                </h1>
                <label
                  htmlFor="Name"
                  className="block font-medium text-gray-700">
                  Name
                </label>
                <div className="flex justify-between gap-2 items-center">
                  <input
                    onChange={onChangeHandler}
                    value={updateData.fullName}
                    type="text"
                    id="Full Name"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="p-3 mt-1 w-full rounded-sm border-gray-200 bg-white text-gray-700 shadow-sm disabled:bg-gray-300"
                    disabled={inputActive1 ? false : true}
                  />
                  <VscEdit
                    onClick={() => setInputActive1(!inputActive1)}
                    className="cursor-pointer w-8 h-8"
                  />
                </div>
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="phoneNumber"
                  className="block font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex justify-between gap-2 items-center">
                  <input
                    onChange={onChangeHandler}
                    value={updateData.phoneNumber}
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className="p-3 mt-1 w-full rounded-sm border-gray-200 bg-white text-gray-700 shadow-sm disabled:bg-gray-300"
                    disabled={inputActive2 ? false : true}
                  />
                  <VscEdit
                    onClick={() => setInputActive2(!inputActive2)}
                    className="cursor-pointer w-8 h-8"
                  />
                </div>
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block font-medium text-gray-700">
                  Email
                </label>
                <div className="flex justify-between gap-2 items-center">
                  <input
                    onChange={onChangeHandler}
                    value={updateData.email}
                    type="email"
                    id="Email"
                    name="email"
                    placeholder="Enter your email"
                    className="p-3 mt-1 w-full rounded-sm border-gray-200 bg-white text-gray-700 shadow-sm disabled:bg-gray-300 select-none"
                    disabled={inputActive3 ? false : true}
                  />
                  <VscEdit
                    onClick={() => setInputActive3(!inputActive3)}
                    className="cursor-pointer w-8 h-8"
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <div className="flex items-center gap-5">
                  <label
                    htmlFor="Password"
                    className="block font-medium text-gray-700">
                    Password
                  </label>
                  <VscEdit
                    onClick={() => setInputActive4(!inputActive4)}
                    className="cursor-pointer w-5 h-5"
                  />
                </div>

                <input
                  onChange={onChangeHandler}
                  value={updateData.password}
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Enter password"
                  className="p-3 mt-1 w-full rounded-sm border-gray-200 bg-white text-gray-700 shadow-sm disabled:bg-gray-300"
                  disabled={inputActive4 ? false : true}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block font-medium text-gray-700">
                  Password Confirmation
                </label>
                <input
                  onChange={onChangeHandler}
                  value={updateData.passwordConfirmation}
                  type="password"
                  id="PasswordConfirmation"
                  name="passwordConfirmation"
                  placeholder="Confirm password"
                  className="p-3 mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm disabled:bg-gray-300"
                  disabled={inputActive4 ? false : true}
                />
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md mx-auto bg-yelloku px-12 py-3 font-medium  hover:bg-black hover:text-yelloku duration-200">
                  Change account details
                </button>
              </div>
            </form>
            {user.isPremium ? <></>
              :
              <button
                className={`w-full flex rounded-md mx-auto gap justify-center py-3 font-medium mt-6 ${blackButton}`}
                onClick={toggleModal}>
                <h1>Upgrade to premium!</h1>
              </button>
            }
          </div>
        </main>
      </div>
      <PremiumModal toggleModal={toggleModal} showModal={showModal} />
    </section>
  )
}

import { NavLink, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from "../stores/actions/actionCreator";
import Loader from "../components/Loader";

export function RegisterPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  })
  const [load, setLoad] = useState(false);

  const onChangeHandler = (e)=>{
    const updatedRegisterData = {...registerData, [e.target.name]: e.target.value};
    setRegisterData(updatedRegisterData);
  }

  function handleRegister(e){
    e.preventDefault();
    dispatch(registerUser(registerData))
    .then(_=>{
      setLoad(true);
      setRegisterData({
          fullName: "",
          phoneNumber: "",
          email: "",
          password: "",
          passwordConfirmation: ""
        })
        setLoad(false);
        navigate("/login");
      })
  }
  
  if(load){
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
            src="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
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
              Come and join our traveling family!
            </p>
          </div>
        </section>
        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
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
            <form onSubmit={handleRegister} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  onChange={onChangeHandler}
                  value={registerData.fullName}
                  type="text"
                  id="Full Name"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="p-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  onChange={onChangeHandler}
                  value={registerData.phoneNumber}
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  className="p-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  onChange={onChangeHandler}
                  value={registerData.email}
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  onChange={onChangeHandler}
                  value={registerData.password}
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Enter password"
                  className="p-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>
                <input
                  onChange={onChangeHandler}
                  value={registerData.passwordConfirmation}
                  type="password"
                  id="PasswordConfirmation"
                  name="passwordConfirmation"
                  placeholder="Confirm password"
                  className="p-3 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md bg-yelloku px-12 py-3 text-sm font-medium transition hover:bg-transparent hover:text-yellow-300 focus:outline-none focus:ring active:text-yellow-300">
                  Create an account
                </button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <NavLink to="/login" className="text-gray-700 underline">
                    Log in
                  </NavLink>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

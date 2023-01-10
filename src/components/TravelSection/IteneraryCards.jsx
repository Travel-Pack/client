import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchTravelSteps, saveTravelStep } from "../../stores/actions/actionCreator"
import Loader from "../Loader"
import { Button, Label, Modal, TextInput } from "flowbite-react"

export default function IteneraryCards({ type }) {

  const [load, setLoad] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [savedTravelStep, setSavedTravelStep] = useState({
    HotelId: 0,
    name: "",
    DestinationIds: []
  })
  const dispatch = useDispatch()
  useEffect(() => {
    if (type === "wishlist") {
      setLoad(true)
      dispatch(fetchTravelSteps()).then((_) => {
        setLoad(false)
      })
    }
  }, [])
  const generatedTravelSteps = useSelector(
    (state) => state.travelSteps.generatedTravelSteps
  )
  const travelSteps = useSelector((state) => state.travelSteps.travelSteps)
  let data;
  if (type === "wishlist") {
    data = travelSteps.map(el=>{
      return {
        hotel: el.Hotel,
        destination: el.Favourites.map(e=>e.Destination),
        name: el.name
      }
    })
  }
  else {
    data = generatedTravelSteps.map(el=>{
      return {
        hotel: el.hotel,
        destination: el.destination
      }
    })
  }
  const onChangeHandler = (e) => {
    const updatedSavedTravelStep = { ...savedTravelStep, name: e.target.value };
    setSavedTravelStep(updatedSavedTravelStep);
  }
  const nav = useNavigate()
  function handleSave(e) {
    e.preventDefault();
    setLoad(true);
    dispatch(saveTravelStep(savedTravelStep))
      .then(res => {
        if (res === "ok") {
          setSavedTravelStep({
            HotelId: 0,
            name: "",
            DestinationIds: []
          })
          nav('/my-travel-step');
        }
        setLoad(false);
      })
  }
  const saveHandler = (savedData) => {
    setShowModal(!showModal)
    setSavedTravelStep({ ...savedTravelStep, HotelId: savedData.hotel.id, DestinationIds: savedData.destination })
  }

  if (load) {
    return <Loader />
  }
  return (
    <>
      {!data.length ? <h1 className="font-bold text-center text-2xl">Sorry, no matched travel steps.</h1>
        :
        <div className="grid grid-cols-2 gap-20 px-10">
          {data.map((el, index) => {
            let total = el.hotel.price;
            return (
              <div className="shadow-lg flex flex-col border h-full" key={index}>
                <h1 className="text-lg font-bold text-center w-full bg-yelloku">
                  {type === "wishlist" ? el.name : `Travel Step ${index + 1}`}
                </h1>

                {/* <h1 className="font-bold text-lg text-center py-2 underline">
                  Destination(s)
                </h1>
                <div className="h-full w-full">
                  {el.destination.map((destination) => {
                    total += destination.cost
                    return (
                      <div
                        className="w-full h-1/2 bg-gray-50 p-4 relative border"
                        key={destination.id}>
                        <img
                          src={destination.mainImg}
                          className="w-full h-full object-cover shadow-xl"
                          alt=""
                        />
                        <div className="flex justify-center items-end  absolute inset-0">
                          <div className="text-black text-xs bg-yelloku w-full flex justify-between py-1 px-2">
                            <h1>{destination.name}</h1>
                            <h3>
                              {destination.cost.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              })}
                            </h3>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div> */}
                <section id="hotelCard">
                  <h1 className="font-bold text-lg text-center py-2 underline">Hotel</h1>
                  <div className="flex w-full">
                  <div className="h-32 w-32 relative">
                    <img
                      src={el.hotel.image}
                      className="w-full h-full object-cover object-top"
                      alt=""
                    />
                  </div>
                  <div className="flex items-end w-full h-full absolute inset-0">
                      <div className="text-sm bg-black bg-opacity-80 text-white w-full flex justify-between py-2 px-3">
                        <h1 className="truncate">{el.hotel.name}</h1>
                        <h3 className="">
                          {el.hotel.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </h3>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="subtotal " className="w-full px-1 text-lg flex justify-between">
                  <h1 className="">Subtotal</h1>
                  <h3 className="">
                    {total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                  </h3>
                </section>
                {type === "wishlist" ? (
                  // <button className="bg-black px-7 py-2 text-white" onClick={() => saveHandler(el)}>
                  //   Add Travel Name
                  // </button>
                  <></>
                ) : (
                  <button className="bg-black px-7 py-2 text-white" onClick={() => saveHandler(el)}>
                    Add Travel Name
                  </button>
                )}
              </div>
            )
          })}
          <React.Fragment>
            <Modal
              show={showModal}
              size="md"
              popup={true}
              onClose={() => setShowModal(!showModal)}>
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                  <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white">
                    Travel Pack Name
                  </h3>
                  <form onSubmit={(e) => handleSave(e)}>
                    <div>
                      <TextInput
                        id="nameTravel"
                        name="nameTravel"
                        placeholder="Next destination 2024"
                        required={true}
                        value={savedTravelStep.name}
                        onChange={onChangeHandler}
                      />
                    </div>

                    <button className="bg-yelloku py-2 w-full mt-5" type="submit">
                      Add!
                    </button>
                  </form>
                </div>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        </div>
      }
    </>
  )
}

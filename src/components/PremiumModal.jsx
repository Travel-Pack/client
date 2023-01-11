import { Button, Modal } from "flowbite-react"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { yellowButton } from "../helpers/buttonStyle"
import { notifySuccess } from "../helpers/notify"
import { activatePremium, fetchUserData, generateTravelStep, getTransactionToken } from "../stores/actions/actionCreator"
import Loader from "./Loader"

export default function ({ toggleModal, showModal }) {

  const generatedTravelStepCriteria = useSelector(
    (state) => state.travelSteps.generatedTravelStepCriteria
  )
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch()

  const paymentHandler = async () => {
    const token = await getTransactionToken()
    window.snap.pay(token, {
      onSuccess: function (result) {
        notifySuccess("Succefully upgraded to premium")
        setLoad(true)
        dispatch(activatePremium()).then((_) => {
          dispatch(fetchUserData())
            .then((_) => {
              if (generatedTravelStepCriteria.budget) {
                dispatch(generateTravelStep(generatedTravelStepCriteria))
              }
              toggleModal()
              setLoad(false)
            })
        })
      },
      onPending: function (result) {
        console.log("Payment status pending")
      },
      onError: function (result) {
        console.log("Payment status error")
      },
      onClose: function () {
        console.log("Payment window closed")
      },
    })
  }

  if (load) {
    return <Loader />
  }
  return (
    <React.Fragment>
      <Modal show={showModal} size="2xl" onClose={toggleModal}>
        <Modal.Header>Join Travel Pack Family!</Modal.Header>
        <Modal.Body>
          <img src="https://images.unsplash.com/photo-1583452924150-c86772c4fab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80"
            alt="image"
            className="h-48 w-full object-cover"
          />
          <div className="flex items-center gap-3">
            <img src="/assets/travelPack.ico" alt="logo" className="h-12 mt-5" />
            <h1 className="mt-4 text-2xl">
              Travel <span className="font-bold">Pack</span>
            </h1>
          </div>
          <div className="pt-4">
            <p className="text-base leading-relaxed">Premium Feature(s)</p>
            <ul className="list-disc ml-4">
              <li>Generates more travel steps</li>
              <ul>
                <li>- You can generate more travel steps than non premium users</li>
                <li>- Premium user generate 10 travel steps</li>
                <li>- Non premium user generate 4 travel steps</li>
              </ul>
              <li className="mt-4">Premium badge</li>
              <p>- User can get a special premium badge on forum, profile page, and review page</p>
              <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2545/2545603.png"
                  className="-ml-1 mr-1.5 h-4 w-4"
                />
                <p className="whitespace-nowrap text-sm">Premium</p>
              </span>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            id="pay-button"
            onClick={paymentHandler}
            className={`${yellowButton} px-5 py-2`}>
            Proceed Payment
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

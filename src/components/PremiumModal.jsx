import { Button, Modal } from "flowbite-react"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { yellowButton } from "../helpers/buttonStyle"
import { activatePremium, fetchUserData, getTransactionToken } from "../stores/actions/actionCreator"
import Loader from "./Loader"

export default function ({ toggleModal, showModal }) {
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch()

  const paymentHandler = async () => {
    const token = await getTransactionToken()
    window.snap.pay(token, {
      onSuccess: function (result) {
        console.log("Succefully upgraded to premium", result)
        setLoad(true)
        dispatch(activatePremium()).then((_) => {
          dispatch(fetchUserData()).finally((_) => {
            setLoad(false)
            toggleModal()
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
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            id="pay-button"
            onClick={paymentHandler}
            className={`${yellowButton}`}>
            Proceed Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

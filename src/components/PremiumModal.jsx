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
        <Modal.Header>Small modal</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            id="pay-button"
            onClick={paymentHandler}
            className={`${yellowButton}`}>
            I accept
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

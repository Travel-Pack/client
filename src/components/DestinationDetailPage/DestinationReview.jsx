import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { fetchDestination, postReview } from "../../stores/actions/actionCreator"
import Loader from "../Loader"
import { useParams } from "react-router-dom"
import RatingStar from "../RatingStar/RatingStar"

export function DestinationReview() {
  const { type } = useParams()
  const [load, setLoad] = useState(false)
  const [review, setReview] = useState({
    cost: 0,
    fun: 0,
    internet: 0,
    safety: 0,
    comment: "",
  })
  const destination = useSelector((state) => state.destinations.destination)
  const hotel = useSelector((state) => state.destinations.hotel)
  let data
  if (type === "destination") {
    data = destination
  } else {
    data = hotel
  }
  const onChangeHandler = (e) => {
    const updatedReview = { ...review, [e.target.name]: e.target.value }
    setReview(updatedReview)
  }
  const dispatch = useDispatch()
  const submitReviewHandler = (e) => {
    e.preventDefault()
    dispatch(postReview(review)).then((_) => {
      setLoad(true)
      dispatch(fetchDestination()).then((_) => {
        setLoad(false)
      })
    })
  }

  if (load) {
    return <Loader />
  }
  return (
    <section className="min-h-screen bg-stone-100 w-full md:ml-96 mx-auto">
      <div className="mt-20 pt-5 md:px-32">
        <h1 className="font-bold font-caveat text-6xl">
          {destination.name}, {"City Name"}
        </h1>
        <h1 className="font-bold font-caveat my-10 text-5xl">Overall</h1>
        <div className="flex items-center mb-5">
          <p className="bg-yelloku text-sm font-semibold inline-flex items-center p-1.5 rounded">
            4.7
          </p>
          <p className="ml-2 font-medium text-gray-900">Excellent</p>
          <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full" />
          <p className="text-sm font-medium text-gray-500">
            376 reviews
          </p>
        </div>
        <div className="gap-8 sm:grid sm:grid-cols-2">
          <div>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Cost
              </dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                  <div
                    className="bg-yelloku h-2.5 rounded transition-colors"
                    style={{ width: "96%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  4.8
                </span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Fun
              </dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                  <div
                    className="bg-yelloku h-2.5 rounded"
                    style={{ width: "92%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  4.6
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Internet
              </dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                  <div
                    className="bg-yelloku h-2.5 rounded"
                    style={{ width: "94%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  4.7
                </span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Safety
              </dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                  <div
                    className="bg-yelloku h-2.5 rounded"
                    style={{ width: "94%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  4.7
                </span>
              </dd>
            </dl>
          </div>
        </div>
        <h1 className="font-bold font-caveat my-10 text-5xl">Reviews</h1>
        {data.Reviews.length ? (
          data.Reviews.map((el) => {
            return (
              <div
                key={el.id}
                className="flex gap-8 items-center border-b py-6 border-gray-200">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="user"
                  className="w-20"
                />
                <div className="w-full">
                  <div className="flex justify-between mb-4">
                    <p className="font-bold">{"John Doe"}</p>
                    <p>
                      {new Date(el.createdAt).toLocaleString("en-IE", {
                        dateStyle: "short",
                      })}
                    </p>
                  </div>
                  <p>{el.comment}</p>
                </div>
              </div>
            )
          })
        ) : (
          <h1 className="font-bold text-2xl text-center">
            No review for this {type} yet.
          </h1>
        )}
        <form className="my-10" onSubmit={submitReviewHandler}>
          <section className="rating-star pb-5 grid grid-cols-2 max-w-4xl mx-auto gap-5">
            <div className="flex items-center">
              <p className="text-xl w-20">Cost</p>
              <div className="flex items-center">
                <RatingStar />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xl w-20">Fun</p>
              <div className="flex items-center">
                <RatingStar />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xl w-20">Intenet</p>
              <div className="flex items-center">
                <RatingStar />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xl w-20">Safety</p>
              <div className="flex items-center">
                <RatingStar />
              </div>
            </div>
          </section>

          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Enter your review message here
          </label>
          <div className="relative">
            <input
              value={review.comment}
              onChange={onChangeHandler}
              id="comment"
              name="comment"
              className="block w-full p-3 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your review message here ..."
              required
            />
          </div>
          <button className="bg-yelloku py-3 px-6 rounded-xl my-4 block mx-auto">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

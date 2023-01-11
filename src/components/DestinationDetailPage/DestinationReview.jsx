import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import {
  fetchDestination,
  fetchHotel,
  postReview,
} from "../../stores/actions/actionCreator"
import Loader from "../Loader"
import { useParams } from "react-router-dom"
import RatingStar from "../RatingStar/RatingStar"

export function DestinationReview() {
  const { type } = useParams()
  const destination = useSelector((state) => state.destinations.destination)
  const hotel = useSelector((state) => state.destinations.hotel)
  const [load, setLoad] = useState(false)
  const [review, setReview] = useState({
    cost: 0,
    internet: 0,
    safety: 0,
    fun: 0,
    comment: "",
  })
  const [score, setScore] = useState(0)
  let data
  if (type === "destination") {
    data = {
      name: destination.destination.name,
      slug: destination.destination.slug,
      avg_cost: destination.reviews.averageCost,
      avg_fun: destination.reviews.averageFun,
      avg_internet: destination.reviews.averageInternet,
      avg_safety: destination.reviews.averageSafety,
      comments: destination.comment,
      DestinationId: destination.destination.id,
    }
  } else {
    data = {
      name: hotel.name,
      slug: hotel.slug,
      avg_cost: +hotel.avg_cost,
      avg_fun: +hotel.avg_fun,
      avg_internet: +hotel.avg_internet,
      avg_safety: +hotel.avg_safety,
      comments: hotel.Reviews,
      HotelId: hotel.id,
    }
  }
  const onChangeHandler = (e) => {
    const updatedReview = { ...review, [e.target.name]: e.target.value }
    setReview(updatedReview)
  }
  const dispatch = useDispatch()
  const submitReviewHandler = (e) => {
    e.preventDefault()
    dispatch(
      postReview({
        ...review,
        DestinationId: data.DestinationId,
        HotelId: data.HotelId,
      })
    ).then((res) => {
      if (res === "ok") {
        setLoad(true)
        setReview({
          cost: 0,
          internet: 0,
          safety: 0,
          fun: 0,
          comment: "",
        })
        let fetch = fetchDestination
        if (type !== "destination") {
          fetch = fetchHotel
        }
        dispatch(fetch(data.slug)).then((_) => {
          setLoad(false)
        })
      }
    })
  }

  useEffect(() => {
    let average =
      (data.avg_cost + data.avg_fun + data.avg_internet + data.avg_safety) / 4
    setScore(average)
  }, [data])
  if (load) {
    return <Loader />
  }
  return (
    <section className="min-h-screen bg-stone-50 w-full ">
      <div className="mt-20 pt-5 md:px-32 container mx-auto ">
        <h1 className="font-bold font-caveat text-6xl">
          {data.name}, {"City Name"}
        </h1>
        <h1 className="font-bold font-caveat my-10 text-5xl">Overall</h1>
        <div className="flex items-center mb-5">
          <p className="bg-yelloku text-sm font-semibold inline-flex items-center p-1.5 rounded">
            {score.toFixed(2)}
          </p>
          <p className="ml-2 font-medium text-gray-900">
            {score > 4 ? "Excellent" : score < 3 ? "Bad" : "Good"}
          </p>
          <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full" />
          <p className="text-sm font-medium text-gray-500">
            {data.comments.length} reviews
          </p>
        </div>
        <div className="gap-8 sm:grid sm:grid-cols-2">
          <div>
            <dl>
              <dt className="text-sm font-medium text-gray-500">Cost</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                  <div
                    className="bg-yelloku h-2.5 rounded transition-colors"
                    style={{ width: `${(data.avg_cost / 5) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {data.avg_cost ? data.avg_cost.toFixed(2) : 0}
                </span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500">Fun</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                  <div
                    className="bg-yelloku h-2.5 rounded"
                    style={{ width: `${(data.avg_fun / 5) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {data.avg_fun ? data.avg_fun.toFixed(2) : 0}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt className="text-sm font-medium text-gray-500">Internet</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                  <div
                    className="bg-yelloku h-2.5 rounded"
                    style={{ width: `${(data.avg_internet / 5) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {data.avg_internet ? data.avg_internet.toFixed(2) : 0}
                </span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500">Safety</dt>
              <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                  <div
                    className="bg-yelloku h-2.5 rounded"
                    style={{ width: `${(data.avg_safety / 5) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {data.avg_safety ? data.avg_safety.toFixed(2) : 0}
                </span>
              </dd>
            </dl>
          </div>
        </div>
        <h1 className="font-bold font-caveat my-10 text-5xl">Reviews</h1>
        {data.comments.length ? (
          data.comments.map((el, index) => {
            return (
              <div
                key={index}
                className="flex gap-8 items-center border-b py-6 border-gray-200">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="user"
                  className="w-20"
                />
                <div className="w-full">
                  <div className="flex justify-between mb-4">
                    <span className="font-bold">
                      {type === "destination" ? el.user : el.User.fullName}
                      {type === "destination" ? el.isPremium ?
                        <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2545/2545603.png"
                            className="-ml-1 mr-1.5 h-4 w-4"
                          />
                          <p className="whitespace-nowrap text-sm">Premium</p>
                        </span> : <></> :
                        el.User.isPremium?
                        <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2545/2545603.png"
                            className="-ml-1 mr-1.5 h-4 w-4"
                          />
                          <p className="whitespace-nowrap text-sm">Premium</p>
                        </span> : <></>
                      }
                    </span>
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
        <h1 className="font-bold font-caveat text-5xl mt-14">
          Write Your Review
        </h1>
        <form className="my-10" onSubmit={submitReviewHandler}>
          <section className="rating-star pb-5 grid grid-cols-2 max-w-4xl mx-auto gap-5">
            <div className="flex items-center">
              <p className="text-xl w-20">Cost</p>
              <div className="flex items-center">
                <RatingStar
                  key="1"
                  name="cost"
                  setReview={setReview}
                  review={review}
                />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xl w-20">Fun</p>
              <div className="flex items-center">
                <RatingStar
                  key="2"
                  name="fun"
                  setReview={setReview}
                  review={review}
                />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xl w-20">Intenet</p>
              <div className="flex items-center">
                <RatingStar
                  key="3"
                  name="internet"
                  setReview={setReview}
                  review={review}
                />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xl w-20">Safety</p>
              <div className="flex items-center">
                <RatingStar
                  key="4"
                  name="safety"
                  setReview={setReview}
                  review={review}
                />
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
              className="bg-gray-200 block w-full p-3 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
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

import { Carousel } from "flowbite-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
  WiDayCloudyWindy,
  WiDayRain,
  WiDaySunny,
  WiDayWindy,
  WiRaindrop,
  WiStrongWind,
  WiThermometer,
} from "react-icons/wi"
import { useCallback, useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { yellowButton } from "../../helpers/buttonStyle"
import { notifyError } from "../../helpers/notify"
// import { fetchWeatherData } from "../../stores/actions/actionCreator"

export function DestinationInformation() {
  const currentDate = new Date()
  const [weatherData, setWeatherData] = useState({})
  const [dayStatus, setDayStatus] = useState("")
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const destination = useSelector((state) => state.destinations.destination)
  const hotel = useSelector((state) => state.destinations.hotel)

  let data

  const { type } = useParams()
  if (type === "destination") {
    data = {
      name: destination.destination.name,
      slug: destination.destination.slug,
      price: destination.destination.cost,
      Reviews: destination.comment,
      geocoding: destination.destination.geocoding,
      Images: destination.destination.Images,
      city: destination.destination.City.name,
      description: destination.destination.description,
    }
  } else {
    data = {
      name: hotel.name,
      slug: hotel.slug,
      price: hotel.price,
      Reviews: hotel.Reviews,
      geocoding: hotel.geocoding,
      Images: hotel.Images,
      city: hotel.City.name,
      description: "",
    }
  }
  const destGeocoding = data.geocoding
  async function fetchWeather(geocoding) {
    try {
      const latLong = geocoding?.split(", ")
      const { data } = await axios.get(
        `https://api.api-ninjas.com/v1/weather?lat=${latLong[0]}&lon=${latLong[1]}`,
        {
          headers: { "X-API-KEY": "LM70771SiGLHsyf0tUdFvw==pYI4irjldWvqfANa" },
        }
      )
      setWeatherData(data)
    } catch (error) {
      notifyError(error)
    }
  }
  useEffect(() => {
    fetchWeather(destGeocoding)
  }, [destGeocoding, dayStatus])

  useEffect(() => {
    if (weatherData.temp < 22) {
      setDayStatus("rainy")
    } else if (weatherData.temp > 22) {
      setDayStatus("sunny")
    } else if (weatherData.temp === 22) {
      setDayStatus("windy")
    }
  }, [weatherData])

  return (
    <section className="min-h-screen bg-stone-50 mx-auto w-screen">
      <section className="gap-10 flex flex-col-reverse md:flex-row detail-inside py-5 md:px-32 bg-white container mx-auto">
        <div className="left-side w-11/12">
          <h1 className="font-bold font-caveat text-6xl">
            {data.name}, {data.city}
          </h1>
          <h1 className="text-2xl my-3">
            Estimated:{" "}
            {data.price
              ? `${data.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}`
              : "Free"}
          </h1>
          <p className="text-justify text-gray-600 text-xl mt-8">{data.description}</p>
          {/*Gallery*/}
          <section className="gallery">
            {data.Images.length ? (
              <div>
                <h1 className="font-bold font-caveat mt-10 text-6xl">Gallery</h1>
                <div className="my-10">
                  <div className="h-30 sm:h-64 xl:h-64 2xl:h-[500px]">
                    <Carousel slideInterval={5000} className="overflow-hidden">
                      {data.Images.map((el) => {
                        return (
                          <img
                            src={el.imgUrl}
                            className="block w-full xl:h-full object-cover"
                            alt="Destination"
                            key={el.id}
                          />
                        )
                      })}
                    </Carousel>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </section>
          {/*Location*/}
          {data.geocoding.split(", ").length === 2 ? (
            <section className="location">
              <div className="flex items-center">
                <h1 className="font-bold font-caveat my-10 text-5xl">Location</h1>
                <a
                  href={`https://maps.google.com/?q=${data.geocoding.split(", ")[0]},${
                    data.geocoding.split(", ")[1]
                  }`}
                  target="_blank"
                  className={`group flex items-center ml-10 ${yellowButton} p-4 rounded-2xl text-lg hover:font-bold`}>
                  <h2>Open on Google Maps</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-8 w-8 transform transition-transform group-hover:translate-x-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
              <MapContainer
                id="map"
                center={data.geocoding.split(", ")}
                zoom={10}
                scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={data.geocoding.split(", ")}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </section>
          ) : (
            <></>
          )}
        </div>

        <div className="right-side md:w-1/3 rounded-xl py-10 h-fit sticky top-0">
          <div className=" flex flex-col items-center bg-sky-700 text-amber-200 shadow-md py-20 px-10">
            <h1 className="text-3xl font-bold text-amber-200">{data.city}</h1>
            <h1 className="text-lg">
              {currentDate.toLocaleDateString("id-ID", options)}
            </h1>
            <div className="flex flex-col items-center justify-center ">
              {dayStatus === "rainy" ? (
                <>
                  <WiDayRain className="w-36 h-36 " />
                  <div className="flex">
                    <WiThermometer className="w-9 h-9" />
                    <h1>{weatherData.temp}°C</h1>
                  </div>
                  <h1 className="text-xl text-center">
                    Today Will be rainy! dont forget coat for travel!
                  </h1>
                </>
              ) : (
                ""
              )}
              {dayStatus === "sunny" ? (
                <>
                  <WiDaySunny className="w-36 h-36" />
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {/* <h1>{weatherData.humidity}°C</h1> */}
                    <div className="flex items-center">
                      <WiThermometer className="w-8 h-8" />
                      <h1 className="text-xl">{weatherData.temp}°C</h1>
                    </div>
                    <div className="flex items-center">
                      <WiStrongWind className="w-8 h-8" />
                      <h1 className="text-xl">{weatherData.wind_speed}</h1>
                    </div>
                    <div className="flex items-center">
                      <WiRaindrop className="w-8 h-8" />
                      <h1 className="text-xl">{weatherData.humidity}</h1>
                    </div>
                  </div>
                  <h1 className="text-xl text-center">
                    Today Will be sunny! Enjoy the trip
                  </h1>
                </>
              ) : (
                ""
              )}
              {dayStatus === "windy" ? (
                <>
                  <WiDayWindy className="w-36 h-36 " />
                  <h1 className="text-xl text-center">
                    Today Will be windy! Prepare yourself for the wind!
                  </h1>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="my-10 bg-white shadow-md">
            <h1 className="text-xl font-bold px-2 py-2 w-full bg-yelloku">Reviews</h1>
            {data.Reviews.length ? (
              <>
                {data.Reviews?.map((el, index) => {
                  const formatDate = new Date(el.createdAt).toLocaleDateString("id-ID", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })
                  return (
                    <div
                      className="w-full h-full shadow-sm p-2 border bg-white border-black mb-3"
                      key={index}>
                      <div className="flex items-center justify-between">
                        <h1 className="font-medium text-md capitalize underline">
                          {type === "destination" ? el.user : el.User.fullName}
                        </h1>
                        <h1 className=" text-gray-400">{formatDate}</h1>
                      </div>
                      {type === "destination" ? (
                        el.isPremium ? (
                          <div className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2545/2545603.png"
                              className="-ml-1 mr-1.5 h-4 w-4"
                            />
                            <p className="whitespace-nowrap text-sm">Premium</p>
                          </div>
                        ) : (
                          <></>
                        )
                      ) : el.User.isPremium ? (
                        <div className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2545/2545603.png"
                            className="-ml-1 mr-1.5 h-4 w-4"
                          />
                          <p className="whitespace-nowrap text-sm">Premium</p>
                        </div>
                      ) : (
                        <></>
                      )}
                      <h1 className="font-light text-lg py-2">
                        {el.comment.length > 70
                          ? `${el.comment.slice(0, 70)}...`
                          : el.comment}
                      </h1>
                    </div>
                  )
                })}
              </>
            ) : (
              <>
                <h1 className="text-center text-xl py-2">No review from user yet</h1>
              </>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

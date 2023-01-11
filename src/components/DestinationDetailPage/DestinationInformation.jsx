import { Carousel } from "flowbite-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { WiDayCloudyWindy, WiDayRain, WiDaySunny, WiDayWindy } from "react-icons/wi"
import { useCallback, useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { yellowButton } from "../../helpers/buttonStyle"
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
      console.log(error)
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
      <section className="gap-10 flex flex-col-reverse md:flex-row detail-inside mt-20 py-5 md:px-32 container mx-auto">
        <div className="left-side w-11/12">
          <h1 className="font-bold font-caveat text-6xl">
            {/* edit */}
            {data.name}, {data.city}
          </h1>
          <p className="text-justify text-xl mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a elit
            pharetra, pulvinar lacus non, rutrum magna. Vestibulum quis elit lacinia,
            dignissim elit iaculis, efficitur massa. Ut aliquam purus sed tincidunt
            pulvinar. Duis eget neque ac risus iaculis sagittis. Mauris viverra, sem at
            placerat laoreet, libero augue tristique purus, quis dictum mauris nisl at
            lectus. Pellentesque nec tincidunt ante. Maecenas euismod euismod sapien ac
            bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed laoreet ex in cursus placerat. Curabitur ac nunc
            quis purus porttitor cursus vitae sit amet orci. Aliquam lacinia est vitae
            risus pellentesque, vel venenatis ipsum sodales. Aliquam erat volutpat.
            Vivamus quis lacinia enim, ut mollis ex. Nullam quis felis nulla. Curabitur
            sollicitudin mi at ex commodo, ac tempus tellus bibendum. Quisque eu enim
            vestibulum, elementum dolor placerat, venenatis purus. In metus metus, laoreet
            et ex vitae, laoreet egestas eros. Suspendisse maximus sodales accumsan. Fusce
            sit amet consequat quam. Nullam vehicula arcu neque. Nunc ut accumsan sapien.
            Aenean bibendum tincidunt enim ut vestibulum. Fusce a magna consequat, blandit
            tortor at, rhoncus turpis. Suspendisse at lorem ac ante tincidunt dictum quis
            at metus. Fusce scelerisque enim sit amet enim pharetra ultrices. Vestibulum
            sem tellus, facilisis et egestas vel, imperdiet consequat tellus. Etiam vel
            dui pulvinar, aliquet ex quis, varius sapien. Duis pellentesque velit sit amet
            efficitur blandit.
          </p>
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
                    class="ml-3 h-8 w-8 transform transition-transform group-hover:translate-x-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
          <div className=" flex flex-col items-center bg-slate-100 shadow-md py-20 px-10">
            <h1 className="text-3xl font-semibold text-black">{data.city}</h1>
            <h1 className="text-lg font-light text-sky-600">
              {currentDate.toLocaleDateString("id-ID", options)}
            </h1>
            <div className="flex flex-col items-center justify-center ">
              {dayStatus === "rainy" ? (
                <>
                  <WiDayRain className="w-36 h-36 text-sky-600" />
                  <div className="flex">
                    {/* <h1>{weatherData.humidity}</h1> */}
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
                  <WiDaySunny className="w-36 h-36 text-sky-600" />
                  <div className="flex text-3xl font-light gap-5 mb-5">
                    {/* <h1>{weatherData.humidity}°C</h1> */}
                    <h1>{weatherData.temp}°C</h1>
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
                  <WiDayWindy className="w-36 h-36 text-sky-600" />
                  <h1 className="text-xl text-center">
                    Today Will be windy! Prepare yourself for the wind!
                  </h1>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="my-10 bg-white p-3 shadow-md">
            <h1 className="text-xl mb-7 font-bold">Reviews</h1>
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
                      className="w-full h-full shadow-md p-3 border-b-2 border-black mb-3"
                      key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <h1 className="font-semibold text-xl">
                          {type === "destination" ? el.user : el.User.fullName}
                        </h1>
                        <h1 className=" text-gray-400">{formatDate}</h1>
                      </div>
                      <h1 className="font-light text-lg mb-5">{el.comment}</h1>
                    </div>
                  )
                })}
              </>
            ) : (
              <>
                <h1 className="text-center text-xl">No review from user yet</h1>
              </>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

import { Carousel } from "flowbite-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { WiDayCloudyWindy, WiDayRain, WiDaySunny } from "react-icons/wi"
import { useState } from "react"

function weatherRandom() {
  const weather = ["rainy", "cloudy", "normal"]
  return weather[Math.floor(Math.random() * weather.length)]
}

export function DestinationInformation() {
  const currentDate = new Date()

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  const destination = useSelector((state) => state.destinations.destination)
  const hotel = useSelector((state) => state.destinations.hotel)
  let data;

  const { type } = useParams()
  if (type === "destination") {
    data = {
      name: destination.destination.name,
      slug: destination.destination.slug,
      price: destination.destination.cost,
      Reviews: destination.comment,
      geocoding: destination.destination.geocoding,
      Images: destination.destination.Images,
      city: destination.destination.City.name
    }
  } else {
    data = {
      name: hotel.name,
      slug: hotel.slug,
      price: hotel.price,
      Reviews: hotel.Reviews,
      geocoding: hotel.geocoding,
      Images: hotel.Images,
      city: hotel.City.name
    }
  }

  return (
    <section className="min-h-screen bg-stone-100 md:ml-96 w-full mx-auto">
      <section className="flex gap-10 detail-inside mt-20 pt-5 md:px-32">
        <div className="w-full">
          <h1 className="font-bold font-caveat text-6xl">
            {/* edit */}
            {data.name}, {data.city}
          </h1>
          <p className="text-justify mt-8">
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
                  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000}>
                      {data.Images.map((el) => {
                        return (
                          <img
                            src={el.imgUrl}
                            className="block w-full h-[540px] object-cover"
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
          <section className="location">
            <h1 className="font-bold font-caveat my-10 text-5xl">Location</h1>
            <MapContainer
              id="map"
              center={data.geocoding.split(", ")}
              zoom={5}
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
          {/*Highlights*/}
          <section className="highlight">
            {data.Reviews.length ? (
              <>
                <h1 className="font-bold font-caveat mt-10 text-6xl">Highlights</h1>
                <div className="my-10">
                  <div
                    id="carouselHighlights"
                    className="carousel slide relative"
                    data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                      <button
                        type="button"
                        data-bs-target="#carouselHighlights"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselHighlights"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselHighlights"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                      />
                    </div>
                    <div className="carousel-inner relative w-full overflow-hidden">
                      {data.Reviews.map((el, index) => {
                        let classCarouselItem =
                          "carousel-item relative float-left w-full "
                        if (index === 0) {
                          classCarouselItem += "active"
                        }
                        return (
                          <div className={classCarouselItem} key={index}>
                            <blockquote className="bg-gray-100 px-20 py-8">
                              <div className="flex items-center">
                                <img
                                  alt="User"
                                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                                  className="h-16 w-16 rounded-full object-cover"
                                />
                                <div className="ml-4 text-sm">
                                  <p className="font-medium">{el.user}</p>
                                </div>
                              </div>
                              <p className="relative mt-4 text-gray-500">
                                {el.comment}
                              </p>
                            </blockquote>
                          </div>
                        )
                      })}
                    </div>
                    <button
                      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 -ml-6"
                      type="button"
                      data-bs-target="#carouselHighlights"
                      data-bs-slide="prev">
                      <span
                        className="carousel-control-prev-icon inline-block bg-black"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 -mr-6"
                      type="button"
                      data-bs-target="#carouselHighlights"
                      data-bs-slide="next">
                      <span
                        className="carousel-control-next-icon inline-block bg-black"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </section>
        </div>
        <div className="weather w-1/6 bg-black pt-10">
          <div className="backdrop-blur-lg flex flex-col items-center w-full h-full">
            <h1 className="text-2xl font-bold text-white">
              {currentDate.toLocaleDateString("id-ID", options)}
            </h1>
            <WiDayRain className="w-36 h-36 text-yelloku" />
            <WiDayCloudyWindy className="w-36 h-36 text-yelloku" />
            <WiDaySunny className="w-36 h-36 text-yelloku" />
          </div>
        </div>
      </section>
    </section>
  )
}

import { Carousel } from "flowbite-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export function DestinationInformation() {
  return (
    <div>
      {/*Information section*/}
      <section className="py-10 max-w-screen-2xl mx-auto">
        <h1 className="font-bold font-caveat text-6xl">
          Gili Lawa Darat Island, East Nusa Tenggara
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
          quis purus porttitor cursus vitae sit amet orci. Aliquam lacinia est vitae risus
          pellentesque, vel venenatis ipsum sodales. Aliquam erat volutpat. Vivamus quis
          lacinia enim, ut mollis ex. Nullam quis felis nulla. Curabitur sollicitudin mi
          at ex commodo, ac tempus tellus bibendum. Quisque eu enim vestibulum, elementum
          dolor placerat, venenatis purus. In metus metus, laoreet et ex vitae, laoreet
          egestas eros. Suspendisse maximus sodales accumsan. Fusce sit amet consequat
          quam. Nullam vehicula arcu neque. Nunc ut accumsan sapien. Aenean bibendum
          tincidunt enim ut vestibulum. Fusce a magna consequat, blandit tortor at,
          rhoncus turpis. Suspendisse at lorem ac ante tincidunt dictum quis at metus.
          Fusce scelerisque enim sit amet enim pharetra ultrices. Vestibulum sem tellus,
          facilisis et egestas vel, imperdiet consequat tellus. Etiam vel dui pulvinar,
          aliquet ex quis, varius sapien. Duis pellentesque velit sit amet efficitur
          blandit.
        </p>
        {/*Gallery*/}
        <h1 className="font-bold font-caveat mt-10 text-6xl">Gallery</h1>
        <div className="my-10">
          {/* <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <img src="https://images.unsplash.com/photo-1602486493959-78e7be266a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80" className="block w-full h-[540px] object-cover" alt="Destination" />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img src="https://images.unsplash.com/photo-1550033588-6f3e54613d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="block w-full h-[540px] object-cover" alt="Destination" />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img src="https://images.unsplash.com/photo-1576035739460-d6f6423dbf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80" className="block w-full h-[540px] object-cover" alt="Destination" />
              </div>
            </div>
            <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon inline-block bg-black rounded-full" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon inline-block bg-black rounded-full" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>
        </div>
        {/*Location*/}
        <h1 className="font-bold font-caveat my-10 text-6xl">Location</h1>
        <MapContainer
          id="map"
          center={[-1.7443032632194848, 120.80736489269272]}
          zoom={5}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-8.467514341862568, 119.5584845704952]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        {/*Highlights*/}
        <section>
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
                <div className="carousel-item active relative float-left w-full">
                  <blockquote className="bg-gray-100 px-20 py-8">
                    <div className="flex items-center">
                      <img
                        alt="User"
                        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div className="ml-4 text-sm">
                        <p className="font-medium">John Doe</p>
                      </div>
                    </div>
                    <p className="relative mt-4 text-gray-500">
                      <span className="text-xl">“</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                      assumenda officiis sit amet itaque eveniet accusantium corporis
                      tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                      repellat, commodi in esse quisquam.
                      <span className="text-xl">”</span>
                    </p>
                  </blockquote>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <blockquote className="bg-gray-100 px-20 py-8">
                    <div className="flex items-center">
                      <img
                        alt="User"
                        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div className="ml-4 text-sm">
                        <p className="font-medium">James Doe</p>
                      </div>
                    </div>
                    <p className="relative mt-4 text-gray-500">
                      <span className="text-xl">“</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                      assumenda officiis sit amet itaque eveniet accusantium corporis
                      tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                      repellat, commodi in esse quisquam.
                      <span className="text-xl">”</span>
                    </p>
                  </blockquote>
                </div>
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
        </section>
      </section>
    </div>
  )
}

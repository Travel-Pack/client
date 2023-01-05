import React, { useRef, useState } from "react"
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination])

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null)
  const appendNumber = useRef(500)
  const prependNumber = useRef(1)
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  )

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ])
    prependNumber.current = prependNumber.current - 2
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0)
  }

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current])
  }

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0)
  }

  function handleClickCity(index){
    console.log("mana ni indexnya:"+ index)
  }

  return (
    <div className="w-full p-2 bg-transparent border-sky-900 border shadow-md mb-5 select-none">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual>
        {slides.map((slideContent, index) => (
          <SwiperSlide onClick={() => handleClickCity(index)} key={slideContent} virtualIndex={index}>
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1615412704911-55d589229864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1582&q=80"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button>
        <button onClick={() => append()} className="append-slides">
          Append Slide
        </button>
      </p>
    </div>
  )
}

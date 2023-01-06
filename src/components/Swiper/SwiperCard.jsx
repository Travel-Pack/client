import React, { useRef, useState } from "react"
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination])

export default function SwiperCard() {
  const [swiperRef, setSwiperRef] = useState(null)
  const appendNumber = useRef(50)
  const prependNumber = useRef(1)
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 50 }).map((_, index) => `Slide ${index + 1}`)
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
    <div className="w-full py-2 h-fit shadow-md mb-5 select-none">
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
    </div>
  )
}

import { useEffect, useState } from "react"
import { GoChevronUp } from "react-icons/go"

export default function ScrollToTopBtn() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  })
  return (
    <span
      className={`fixed bottom-2 right-2 bg-black z-50 duration-200 cursor-pointer ${
        showTopBtn ? "opacity-100" : "opacity-0"
      }`}>
      <GoChevronUp onClick={goToTop} className="w-10 h-10 text-yelloku" />
    </span>
  )
}

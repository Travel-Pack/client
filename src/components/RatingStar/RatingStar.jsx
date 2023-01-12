import { useEffect } from "react"
import { useState } from "react"
import { FaStar } from "react-icons/fa"

export default function RatingStar({name, setReview, review}) {
  const [rating, setRating] = useState(0)
  const [hoverColor, setHoverColor] = useState(null)

  useEffect(() => {
    setReview({...review, [name]:rating})
  }, [rating])
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label className="" key={name+i}>
            <input
              type="radio"
              className="hidden w-0 h-0"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue)
              }}
            />
            <FaStar
              className={`star w-10 h-10 cursor-pointer duration-200 ease-in-out ${
                ratingValue <= (hoverColor || rating) ? "fill-yelloku" : "fill-stone-200"
              }`}
              onPointerEnter={() => {
                setHoverColor(ratingValue)
              }}
              onPointerLeave={() => {
                setHoverColor(null)
              }}
            />
          </label>
        )
      })}
    </div>
  )
}

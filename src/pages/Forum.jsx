import { useNavigate } from "react-router-dom"

export default function Forum() {
  const nav = useNavigate()
  function navigateToDetail() {
    nav(`/forum/${1}`)
  }
  return (
    <div className="flex-col flex gap-5 mt-20">
      <div onClick={navigateToDetail} className="cursor-pointer max-w-7xl mx-auto">
        <h1>Topic</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab animi,
          perspiciatis illum placeat ratione expedita ea dicta, sed assumenda itaque, quia
          hic. Minus, voluptate aliquid repellat dolores fugit quia. Natus consectetur
          maiores necessitatibus explicabo et suscipit repudiandae placeat temporibus
          sequi quod mollitia, esse nam obcaecati, eos excepturi soluta modi deserunt
          voluptatibus quia qui culpa eligendi quis. Animi, itaque labore.
        </p>
      </div>
    </div>
  )
}

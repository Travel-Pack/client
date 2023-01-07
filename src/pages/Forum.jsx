import { useNavigate } from "react-router-dom"

export default function Forum() {
  const nav = useNavigate()
  function navigateToDetail() {
    nav(`/forum/${1}`)
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <div className="flex-col flex gap-5 xl:mt-20">
      <section id="forumHero" className="bg-yelloku py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-3">List of Topics</h1>
          <div className="search items-center gap-5 flex">
            <label htmlFor="searchDesti" className="text-xl">
              Search Destination:
            </label>
            <input
              type="text"
              name="searchDest"
              id="searchDest"
              className="border-0 border-b-4 bg-transparent w-1/2"
              placeholder="Nusa Dua"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="grid xl:grid-cols-4 px-5 xl:px-0 gap-3">
          {arr.map((el) => {
            return (
              <div
                key={el}
                onClick={navigateToDetail}
                className="aspect-square cursor-pointer">
                <img
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1800&t=st=1672981795~exp=1672982395~hmac=4cb88347a08dabb475b46b9165ee9e46861d90348b5a2c26d93e49b3823ca809"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

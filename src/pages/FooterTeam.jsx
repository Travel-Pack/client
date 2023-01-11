export default function FooterTeam() {
  return (
    <div className="flex bg-black text-white py-16 px-14 text-sm justify-center">
      <div className="flex flex-col gap-7 max-w-4xl">
        <h1 className="text-xl text-center">About This Project</h1>
        <p className="text-justify">Travel Pack is the ultimate travel planning and community platform for finding the best destinations in Indonesia. Our platform allows you to browse through a wide variety of cities and locations, and read reviews from other travelers. 

          Travel Pack's recommendation feature allows you to choose your budget and preferences. You can create a wishlist of your dream vacation destinations and share it with the community.

          Travel Pack also offers a vibrant community of travelers where you can connect with like-minded individuals, share your own travel experiences and tips, and get inspired for your next adventure.

          Start planning your dream vacation and connect with other travelers today with Travel Pack!</p>
        <div className=" text-gray-300 max-w-4xl mx-auto text-center flex text-xl items-center">
          Repository : <a className="ml-8" href="https://github.com/Travel-Pack" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="github logo" className="w-10 h-10" />
          </a>
        </div>
        <ul className="flex justify-center font-medium text-lg flex-wrap gap-5 ">
          <li className="border-l-2 pl-5 border-white">Joshua Natanael</li>
          <li className="border-l-2 pl-5 border-white">Nur Qomarudin</li>
          <li className="border-l-2 pl-5 border-white">Abdullah Alam</li>
          <li className="border-l-2 pl-5 border-white">Ezar Rizqullah Tsaqif Setyawan</li>
          <li className="border-l-2 pl-5 border-white">Bobby Rahdyan A. Notokoesoemo</li>
          <li className="border-l-2 pl-5 border-white">Setya Rangga Raka Pangestu</li>
        </ul>
      </div>
    </div>
  )
}

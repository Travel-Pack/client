export default function MessageCard({message}){
    return (
      <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink drop-shadow-xl">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow transform transition hover:scale-105 duration-300 ease-in-out">
          <div className="flex flex-wrap no-underline hover:no-underline">
            <div className="w-full font-bold text-xl my-2 text-gray-800 px-6 max-w-prose truncate">
              name
            </div>
            <p className="text-gray-800 text-base px-6 mb-5 max-w-prose truncate">
              caption
            </p>
          </div>
          <p className="w-full my-2 text-gray-600 text-xs md:text-sm px-6">
            Expired at 
          </p>
        </div>
      </div>
    );
  }
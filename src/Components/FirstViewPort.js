import {
  ArrowNarrowRightIcon,
  LocationMarkerIcon,
  SearchIcon
} from "@heroicons/react/solid";


const FirstViewPort = () => {
  return (
    <div className="md:h-full mt-10 mb-20 flex items-center justify-center">
      <div>
      <svg width="60" height="60" viewBox="0 0 99.5 56.5" fill="#ffffff" className='block md:hidden mx-auto mb-6 '>
          <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path>
        </svg>
        <h1 className="text-3xl md:text-6xl text-white font-bold text-center my-auto">
          Your favorite <br /> restaurants, delivered
        </h1>

        <form className="flex items-center justify-between bg-white md:w-8/12 rounded-3xl mx-auto mt-12 p-2.5 md:p-2">
          <LocationMarkerIcon className="text-gray-500 w-8 h-8 hidden md:block " />
          <SearchIcon className="text-gray-500 w-6 h-6 block md:hidden " />
          <input
            type="text"
            className="outline-none w-9/12"
            placeholder="Enter delivery address"
          />
          <button className="rounded-3xl md:bg-red-700 w-1/12 text-center">
            <ArrowNarrowRightIcon className="w-6 h-6 text-gray-700 mx-auto" />
          </button>
        </form>
        <div className="text-center mt-4">
          <a
            href="https://identity.doordash.com/auth?client_id=1666519390426295040&enable_last_social=false&intl=en&layout=consumer_web&prompt=none&redirect_uri=https%3A%2F%2Fwww.doordash.com%2Fpost-login%2F&response_type=code&scope=%2A&state=%2F%7C%7C25e16ec4-0ded-4384-85e1-2f059cf67d6b"
            className="text-white underline font-semibold"
          >
            Sign in for saved address
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstViewPort;

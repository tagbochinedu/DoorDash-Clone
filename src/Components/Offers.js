import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Offers = () => {
  return (
    <div className="md:flex flex-col  justify-between md:p-24 py-24 px-10 ">
      <div className="md:w-3/12 w-full flex justify-between md:block items-center">
        <img
          src="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg"
          alt="motorbike"
          className="w-24 md:w-36 h-24 md:h-36 md:mx-auto"
        />
        <div className="w-8/12">
          <h1 className="font-bold text-3xl md:text-center mb-4">
            Become a Dasher
          </h1>
          <p className="md:text-center font-semibold md:w-10/12 text-lg md:mx-auto">
            As a delivery driver, you'll make reliable money—working anytime,
            anywhere.
          </p>
          <div className="flex items-center md:justify-center text-red-700 font-semibold">
            <a href="https://www.doordash.com/dasher/signup/?utm_source=dx_signup_midtile_cx_home">
              start earning
            </a>
            <ArrowNarrowRightIcon className="w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="md:w-3/12 w-full flex justify-between items-center my-8">
        <img
          src="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront%202.svg"
          alt="house icon"
          className="w-24 md:w-36 h-24 md:h-36 md:mx-auto"
        />
        <div className="w-8/12">
          <h1 className="font-bold text-3xl md:text-center mb-4">
            Become a Partner
          </h1>
          <p className="md:text-center font-semibold md:w-10/12 text-lg md:mx-auto">
            Grow your business and reach new customers by partnering with us.
          </p>
          <div className="flex items-center md:justify-center text-red-700 font-semibold">
            <a href="https://www.doordash.com/dasher/signup/?utm_source=dx_signup_midtile_cx_home">
              Sign up your store
            </a>
            <ArrowNarrowRightIcon className="w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="md:w-3/12 w-full flex justify-between">
        <img
          src="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg"
          alt="store-front icon"
          className="w-24 md:w-36 h-24 md:h-36 md:mx-auto"
        />
        <div className="w-8/12">
          <h1 className="font-bold text-3xl md:text-center mb-4">Try the App</h1>
          <p className="md:text-center font-semibold md:w-10/12 text-lg md:mx-auto">
            Get the best DoorDash experience with live order tracking.
          </p>
          <div className="flex items-center md:justify-center text-red-700 font-semibold">
            <a
              href="https://apps.apple.com/app/id719972451?mt=8&pt=9654801&ct=Mobile+Splash+Page+%28New+-+08%2F3%2F17%29"
              className=""
            >
              Get the app
            </a>
            <ArrowNarrowRightIcon className="ml-2 w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

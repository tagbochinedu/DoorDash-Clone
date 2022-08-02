import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Offers = () => {
  return (
    <div className="  ">
      <div className="md:flex flex-col md:flex-row  justify-between md:p-24 py-24 px-10">
        <div className="md:w-3/12 w-full flex md:justify-between justify-around md:block items-center">
          <img
            src="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg"
            alt="motorbike"
            className="w-24 md:w-36 h-24 md:h-36 md:mx-auto"
          />
          <div className="w-6/12 md:w-full md:mx-auto">
            <h1 className="font-bold text-3xl md:text-center mb-4">
              Become a Dasher
            </h1>
            <p className="md:text-center font-semibold md:w-10/12 text-lg md:mx-auto">
              As a delivery driver, you'll make reliable money—working anytime,
              anywhere.
            </p>
            <div className="flex items-center md:justify-center text-btnred font-semibold">
              <a href="https://www.doordash.com/dasher/signup/?utm_source=dx_signup_midtile_cx_home">
                start earning
              </a>
              <ArrowNarrowRightIcon className="w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="md:w-3/12 w-full flex md:justify-between justify-around md:block items-center my-8 md:my-0">
          <img
            src="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront%202.svg"
            alt="house icon"
            className="w-24 md:w-36 h-24 md:h-36 md:mx-auto"
          />
          <div className="w-6/12 md:w-full md:mx-auto">
            <h1 className="font-bold text-3xl md:text-center mb-4">
              Become a Partner
            </h1>
            <p className="md:text-center font-semibold md:w-10/12 text-lg md:mx-auto">
              Grow your business and reach new customers by partnering with us.
            </p>
            <div className="flex items-center md:justify-center text-btnred font-semibold">
              <a href="https://www.doordash.com/dasher/signup/?utm_source=dx_signup_midtile_cx_home">
                Sign up your store
              </a>
              <ArrowNarrowRightIcon className="w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="md:w-3/12 w-full flex md:justify-between justify-around md:block items-center">
          <img
            src="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg"
            alt="store-front icon"
            className="w-24 md:w-36 h-24 md:h-36 md:mx-auto"
          />
          <div className="w-6/12 md:w-full md:mx-auto">
            <h1 className="font-bold text-3xl md:text-center mb-4">
              Try the App
            </h1>
            <p className="md:text-center font-semibold md:w-10/12 text-lg md:mx-auto">
              Get the best DoorDash experience with live order tracking.
            </p>
            <div className="flex items-center md:justify-center text-btnred font-semibold">
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
      <div className=" gradient md:p-24 py-24">
        <div className="flex md:flex-row flex-col-reverse md:justify-between items-center mb-20">
          <div className="pl-16 md:pl-0 md:w-4/12 w-full">
            <div className="w-8/12 md:w-full mt-6">
              <h1 className=" text-2xl md:text-4xl font-bold ">
                Every Flavor Welcome
              </h1>
              <p className="font-semibold my-4 text-sm">
                From your neighborhood sushi spot to the burger and fries you
                crave, choose from over 300,000 local and national favorites
                across the U.S., Canada and Australia.
              </p>
              <button className="p-2 rounded-3xl bg-btnred text-white font-semibold">
                Find Restaurants
              </button>
            </div>
          </div>
          <div className="justify-end flex md:w-7/12 w-full ">
            <img
              src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1366,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/hero/food/food_one.png"
              alt="food-1"
              className="md:w-full w-11/12"
            />
          </div>
        </div>
        <div className="md:flex justify-between items-center mt-20">
          <div className='md:w-7/12 w-full'>
            <img
              src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1366,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/hero/food/food_two.png"
              alt="food-2"
              className="md:w-full w-11/12"
            />
          </div>
          <div className="pl-16 md:pl-0 w-full md:w-4/12 mt-6">
            <div className="w-6/12 md:w-full">
              <h1 className="text-2xl md:text-4xl font-bold ">
                You’ve got stuff to do. We’ve got options.
              </h1>
              <p className="font-semibold my-4">
                Get it delivered right to your door. Or, try Pickup on your way
                home. It’s mealtime on your time.
              </p>
              <button className="p-2 rounded-3xl bg-btnred text-white font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

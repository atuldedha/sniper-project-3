import React from "react";
import Placeholder from "../../images/demoModePlaceholder.svg";

const DemoBanner = () => {
  return (
    <div className="bg-pink1 pl-14 pr-8 py-10 flex items-center md:space-x-12 relative rounded-2xl">
      {/* img  */}
      <div className="hidden md:inline-flex basis-1/2">
        <img
          src={Placeholder}
          alt="placeholder"
          className="absolute bottom-0 left-0 lg:left-12 w-52 lg:w-64 xl:w-80 object-contain"
        />
      </div>

      {/* right text */}
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-purple1 text-xl font-nuni font-extrabold">
          Demo mode is enabled
        </h1>
        <p className="font-nuni font-normal text-sm text-gray1">
          We’ve added sample data and a payment account so you can try things
          out. When you’re ready, disable demo mode to clear the sample data.
        </p>

        <button className="w-max py-2 px-8 text-center bg-purple1 text-white font-nuni font-normal text-base rounded-lg">
          Disable demo mode
        </button>
      </div>
    </div>
  );
};

export default DemoBanner;

import React from "react";
import SmallCard from "./SmallCard/SmallCard";
import Placeholder1 from "../../images/placeholder1.svg";
import Placeholder2 from "../../images/placeholder2.svg";

const Banner = ({ name }) => {
  return (
    <div className="bg-pink1 pl-4 pr-4 py-5 lg:pl-14 lg:pr-8 lg:py-10 flex items-center space-x-8 relative rounded-2xl">
      {/* left part */}
      <div className="flex flex-col items-start w-full lg:basis-1/2">
        <h1 className="text-lg md:text-xl xl:text-2xl text-purple1 font-nuni font-extrabold block pb-4">
          Good morning, {name}
        </h1>
        <p className="font-nuni font-normal text-gray1 text-sm lg:text-base block pb-8">
          As you explore Mangomint, feel free to use the guide below or schedule
          a call with your dedicated expert if you have any questions.
        </p>

        <div className="flex flex-col items-start">
          <span className="font-nuni font-bold text-xs md:text-sm text-gray1 block pb-4">
            Helpful links:
          </span>
          <div className="flex items-center space-x-4 lg:space-x-8">
            <span className="font-semibold font-nuni text-xs text-purple2 underline">
              Chart Support
            </span>

            {/* vertical line */}
            <div className="h-4 border-l-borderPurple border-l-2" />

            <span className="font-semibold font-nuni text-xs text-purple2 underline">
              Learning Center
            </span>

            {/* vertical line */}
            <div className="h-4 border-l-borderPurple border-l-2" />
            <span className="font-semibold font-nuni text-xs text-purple2 underline">
              Webinars
            </span>
          </div>
        </div>
      </div>

      {/* right part */}
      <div className="hidden lg:inline-flex basis-1/2 w-full">
        {/* 1st card */}
        <div className="absolute top-2 right-2">
          <SmallCard name="Stanley Hudson" image={Placeholder2} />
        </div>

        {/* 2card */}
        <div className="absolute bottom-2 right-48">
          <SmallCard name="Pam Beesly" image={Placeholder1} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

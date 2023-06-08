import React from "react";

const SmallCard = ({ name, image }) => {
  return (
    <div className="bg-white shadow-med rounded-2xl p-7">
      <div className="flex items-center space-x-2 mb-8">
        <img
          src={image}
          alt="profile"
          className="rounded-full h-10 w-10 object-contain"
        />
        <div className="flex flex-col items-start">
          <span className="font-nuni font-bold text-lg text-gray1">{name}</span>
          <span className="font-nuni font-semibold text-base text-gray2">
            Talk with an expert
          </span>
        </div>
      </div>

      <button className="w-full bg-purple2 py-3 text-center px-4 font-nuni font-normal text-base text-white rounded-lg">
        Schedule a call
      </button>
    </div>
  );
};

export default SmallCard;

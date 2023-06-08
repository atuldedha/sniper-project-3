import React from "react";
import Check from "../../images/checkWhite.svg";

const PointsCheck = ({ checked, handleCheckboxClick, index, text }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* custom checkbox */}
      <div
        className={`h-4 w-4 rounded-md flex items-center justify-center ${
          checked
            ? "bg-green1 border border-green1"
            : "bg-white border border-gray3"
        }`}
        onClick={() => handleCheckboxClick(index)}
      >
        {checked && (
          <img src={Check} alt="check" className="w-2 h-2 object-contain" />
        )}
      </div>
      <span
        className={`${
          checked ? "text-gray2 line-through" : "text-gray1"
        } font-nuni font-normal text-sm lg:text-base`}
      >
        {text}
      </span>
    </div>
  );
};

export default PointsCheck;

import React from "react";
import PlayIcon from "../../images/playIcon.svg";

const CustomPlayIcon = () => {
  return (
    <div className="rounded-full bg-purple3 w-14 h-14 flex items-center justify-center">
      <img src={PlayIcon} alt="icon" />
    </div>
  );
};

export default CustomPlayIcon;

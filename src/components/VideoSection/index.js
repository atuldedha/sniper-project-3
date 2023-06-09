import React, { useState } from "react";
import PointsCheck from "../PointsCheck";
import ReactPlayer from "react-player";
import CustomPlayIcon from "../CustomPlayIcon";
import { points } from "./staticData";

const VideoSection = () => {
  const [checked, setChecked] = useState(new Array(points.length).fill(false));
  const [selected, setSelected] = useState(0);

  const handleCheckboxClick = (_, index) => {
    setChecked((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          return !item;
        } else return item;
      })
    );
  };
  return (
    <div className="shadow-large rounded-2xl bg-white px-4 py-3 lg:px-10 lg:py-8">
      {/* heading */}
      <h1 className="font-nuni font-extrabold text-xl text-gray1 block mb-6">
        Things to try in Mangomint
      </h1>

      {/* divider */}
      <div className="w-full border-b border-b-white1 mb-7" />

      {/* points and video */}
      <div className="flex items-center flex-col-reverse lg:flex-row space-x-0 lg:space-x-8 w-full">
        <div className="grid grid-cols-1 lg:space-y-2 basis-2/3">
          {/* points */}
          {points?.map((point, index) => (
            <div className="flex flex-col">
              <div
                key={index}
                className={`w-full py-5 px-4 cursor-pointer hover:bg-pink2 hover:rounded-lg mt-2 ${
                  selected === index ? "bg-pink2 rounded-lg" : ""
                }`}
                onClick={() => setSelected(index)}
              >
                <PointsCheck
                  text={point?.text}
                  checked={checked[index]}
                  index={index}
                  handleCheckboxClick={handleCheckboxClick}
                />
              </div>
              {/* video */}
              {selected === index && (
                <div className="flex flex-col items-center space-y-2 lg:hidden w-full max-w-md mt-3">
                  <div className="w-full max-w-md h-60 rounded-lg">
                    <ReactPlayer
                      url={points[selected]?.videoLink}
                      controls
                      playIcon={<CustomPlayIcon />}
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <p className="font-nuni font-semibold text-xs lg:text-sm text-gray1 text-center">
                    {points[selected]?.subText}
                  </p>

                  <button className="w-max py-2 px-8 text-center bg-purple1 text-white font-nuni font-normal text-sm lg:text-base rounded-lg">
                    Go to Calendar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* video */}
        <div className="hidden lg:flex flex-col space-y-4 items-center max-w-md">
          {/* video cpomponent */}
          <div className="w-full max-w-md h-60 rounded-lg">
            <ReactPlayer
              url={points[selected]?.videoLink}
              controls
              playIcon={<CustomPlayIcon />}
              width="100%"
              height="100%"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <p className="font-nuni font-semibold text-xs lg:text-sm text-gray1 text-center">
            {points[selected]?.subText}
          </p>

          <button className="w-max py-2 px-8 text-center bg-purple1 text-white font-nuni font-normal text-sm lg:text-base rounded-lg">
            Go to Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

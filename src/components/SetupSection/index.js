import React, { useEffect, useState } from "react";
import StepCard from "./StepCard/StepCard";
// static data for steps
import { setupGuideSteps } from "./staticData";

// setup seatcion
const SetupSection = () => {
  // state to manage card expanding
  const [expandStepCard, setExpandStepCard] = useState(
    new Array(setupGuideSteps?.length).fill(false)
  );
  //   state tp check which steos are completed
  const [wholeStepCompleted, setWholeStepCompleted] = useState(
    new Array(setupGuideSteps?.length).fill(false)
  );

  //   by default expand the 1 step
  useEffect(() => {
    setExpandStepCard((prev) =>
      prev.map((item, i) => {
        if (i === 0) return true;
        else return item;
      })
    );
  }, []);

  //   click handler function to expand card
  const handleStepCardClick = (index) => {
    setExpandStepCard((prev) =>
      prev?.map((item, i) => {
        if (i === index) return !item;
        else return item;
      })
    );
  };
  return (
    <div className="flex flex-col">
      {/* heading */}
      <h1 className="text-gray1 text-xl fint-nuni font-extrabold block pb-2">
        Setup guide
      </h1>
      {/* para */}
      <p className="font-normal font-nuni text-sm text-gray1 block pb-10">
        Below are the most common steps that people take to get up and running.
      </p>

      {/* steps */}
      <div className="flex flex-col w-full space-y-4">
        {setupGuideSteps?.map((guide, index) => (
          <StepCard
            key={guide.id}
            stepTitle={guide.stepTitle}
            steps={guide?.steps}
            index={index}
            expanded={expandStepCard[index]}
            handleCardClick={handleStepCardClick}
            setWholeStepCompleted={setWholeStepCompleted}
            wholeStepCompleted={wholeStepCompleted[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default SetupSection;

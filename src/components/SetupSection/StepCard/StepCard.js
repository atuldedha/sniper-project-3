import React, { useEffect, useState } from "react";
import PointsCheck from "../../PointsCheck";

// each step component
const StepCard = ({
  steps,
  stepTitle,
  expanded,
  index,
  wholeStepCompleted,
  setWholeStepCompleted,
  handleCardClick,
}) => {
  // check state to see which items are checked
  const [checks, setChecks] = useState(new Array(steps?.length).fill(false));
  //   inprogress state to determine the current state of the step
  const [inProgress, setInProgress] = useState(false);

  // click handler function of checkbox of the step
  const handleCheckboxClick = (e, index) => {
    e.stopPropagation();
    setChecks((prev) =>
      prev?.map((item, i) => {
        if (i === index) return !item;
        else return item;
      })
    );
  };

  //   custom function to count number of steps completed
  const countStepsCompleted = () => {
    return checks.reduce((count, value) => (value ? count + 1 : count), 0);
  };

  //   useeffect tp see of the step has started or notstarted or completed
  useEffect(() => {
    const allFalse = checks.every((value) => value === false);
    const allTrue = checks.every((value) => value === true);
    if (allFalse) {
      setInProgress(false);
    } else if (allTrue) {
      // all true means all steps of that step are completed
      setWholeStepCompleted((prev) =>
        prev.map((item, i) => {
          if (i === index) return true;
          else return item;
        })
      );
    } else {
      setInProgress(true);
    }

    // all are false or all are not true 1.e, not completed
    if (allFalse || !allTrue) {
      setWholeStepCompleted((prev) =>
        prev.map((item, i) => {
          if (i === index) return false;
          else return item;
        })
      );
    }
  }, [checks, index, setWholeStepCompleted]);

  return (
    <div
      className="flex flex-col bg-white px-5 py-7 items-start w-full rounded-2xl shadow-large cursor-pointer"
      onClick={() => handleCardClick(index)}
    >
      {/* headng */}
      <div className="flex items-center justify-between pb-5 w-full">
        {/* left content */}
        <div className="flex flex-col items-start">
          <span className="font-nuni font-extarbold text-base text-gray1 block pb-2">
            {stepTitle}
          </span>
          <span className="font-nuni font-normal text-xs md:text-sm text-gray1">
            {countStepsCompleted()} of {steps?.length} completed
          </span>
        </div>
        {/* right button */}
        <button
          className={`px-3 py-2 w-max ${
            inProgress || wholeStepCompleted
              ? "bg-green2 text-green1"
              : "text-gray2 bg-gray4"
          } font-nuni font-bold text-sm`}
        >
          {wholeStepCompleted
            ? "Completed"
            : inProgress
            ? "In progress"
            : "Not started"}
        </button>
      </div>

      {/* only show these when cards clicked */}
      {expanded ? (
        <div className="flex flex-col w-full">
          {/* divider */}
          <div className="w-full border-b border-b-white1" />

          {steps?.map((point, index) => (
            <div
              key={index}
              className="w-full py-5 px-4 cursor-pointer hover:bg-pink2 hover:rounded-lg"
              onClick={(e) => handleCheckboxClick(e, index)}
            >
              <PointsCheck
                text={point}
                checked={checks[index]}
                index={index}
                handleCheckboxClick={handleCheckboxClick}
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StepCard;

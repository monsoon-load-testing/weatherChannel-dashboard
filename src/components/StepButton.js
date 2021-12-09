const StepButton = ({ stepName, clickHandler, index, lastStepIdx }) => {
  let borderRight = index === lastStepIdx ? "" : "border-r-2";
  return (
    <button
      className={`h-10 w-15 flex flex-1 items-center justify-center border-b-2 ${borderRight}  border-mediumPurple bg-indigo focus:outline-none cursor-pointer ${
        index === 0 ? "active" : ""
      }`}
      onClick={clickHandler}
    >
      <p className="text-center text-xl text-monsoonWhite font-raleway">
        {stepName}
      </p>
    </button>
  );
};

export default StepButton;

const StepButton = ({ stepName, clickHandler, index }) => {
  return (
    <button
      className={`h-10 w-15 flex flex-grow items-center justify-center border-2 border-t-0  border-cornFlowerBlue bg-indigo outline-none cursor-pointer ${
        index === 0 ? "active" : ""
      }`}
      onClick={clickHandler}
    >
      <p className="text-center text-2xl text-monsoonWhite font-openSans">
        {stepName}
      </p>
    </button>
  );
};

export default StepButton;

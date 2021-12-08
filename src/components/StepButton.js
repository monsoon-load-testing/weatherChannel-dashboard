const StepButton = ({ stepName, clickHandler, index }) => {
  return (
    <button
      className={`h-10 w-15 flex flex-grow items-center justify-center bg-indigo outline-none cursor-pointer ${index === 0 ? 'active' : ''}`}
      onClick={clickHandler}
    >
      <p className="text-center text-2xl text-monsoonWhite">{stepName}</p>
    </button>
  );
};

export default StepButton;

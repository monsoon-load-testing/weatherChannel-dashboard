const StepButton = ({ stepName, clickHandler }) => {
  return (
    <div
      className="h-10 w-15 flex flex-grow items-center justify-center bg-cornFlowerBlue rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
      onClick={clickHandler}
    >
      <p className="text-center text-2xl text-indigo">{stepName}</p>
    </div>
  );
};

export default StepButton;

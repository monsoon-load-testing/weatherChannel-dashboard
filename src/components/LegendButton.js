const LegendButton = ({ checked, activeColor }) => {
  // let color = checked ? activeColor : "bg-white";
  let color = checked ? activeColor : "bg-white";
  return (
    <div className="ml-2 w-10 flex justify-center content-center items-center">
      <span
        className={`h-5 w-5 border-2 flex z-10  rounded-full transition-transform duration-300 ease-in-out border-indigo ${color}`}
      ></span>
    </div>
  );
};

export default LegendButton;

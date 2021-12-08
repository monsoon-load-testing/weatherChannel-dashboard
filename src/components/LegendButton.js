const LegendButton = ({ checked }) => {
  return (
    <div className="ml-2">
      <input type="checkbox" name="toggle" class="hidden" />
      <label
        className="relative w-12 h-6 flex select-none cursor-pointer"
        for="toggle"
      >

        <span
          className={"h-6 w-6 border-2 absolute z-10 rounded-full transition-transform duration-300 ease-in-out flex justify-center items-center border-indigo" + (checked ? " bg-monsoonGreen" : " bg-white")}
        ></span>
      </label>
    </div>
  )
}

export default LegendButton
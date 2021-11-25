const LegendButton = ({ checked }) => {
  return (
    <div className="flex items-center justify-center">
      <input type="checkbox" name="toggle" class="hidden" />
      <label
        className="relative w-12 h-6 flex select-none cursor-pointer"
        for="toggle"
      >
        <span
          className={"absolute left-0 top-0 h-full w-full rounded-full bg-gray-200"}
        ></span>
        <span
          className={"h-6 w-6 border-2 absolute z-10 rounded-full transition-transform duration-300 ease-in-out flex justify-center items-center border-gray-100" + (checked ? " ml-5 bg-monsoonGreen" : " bg-white")}
        ></span>
      </label>
    </div>
  )
}

export default LegendButton
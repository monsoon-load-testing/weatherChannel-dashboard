const Legend = ({ active, setActive }) => {
  const activeHandler = (e) => {
    e.preventDefault();
    const metric = e.target.dataset.metric;
    setActive({...active, [metric]: !active[metric]})
  }

  const { isActiveResponseTime, isActiveConcurrentUsers, isActiveTransactionRate, isActivePassRatio } = active
  return (
    <div class="border bg-gray-500 mt-2">
      <p class="text-center">Legend</p>
      <ul class="flex justify-evenly">
        <li onClick={activeHandler} className="text-left cursor-pointer inline-block" data-metric="isActiveResponseTime">
          Response Time: {isActiveResponseTime ? "active" : "inactive"}
        </li>
        <li onClick={activeHandler} className="text-left cursor-pointer inline-block" data-metric="isActiveConcurrentUsers">
          Concurrent Users: {isActiveConcurrentUsers ? "active" : "inactive"}
        </li>
        <li onClick={activeHandler} className="text-left cursor-pointer inline-block" data-metric="isActiveTransactionRate">
          Transaction Rate: {isActiveTransactionRate ? "active" : "inactive"}
        </li>
        <li onClick={activeHandler} className="text-left cursor-pointer inline-block" data-metric="isActivePassRatio">
          Pass Ratio: {isActivePassRatio ? "active" : "inactive"}
        </li>
      </ul>
    </div>
  )
}

export default Legend;
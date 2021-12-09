import LegendButton from "./LegendButton";

const Legend = ({ active, setActive }) => {
  const activeHandler = (e) => {
    e.preventDefault();
    const metric = e.target.closest('LI').dataset.metric;
    setActive({ ...active, [metric]: !active[metric] });
  };

  const {
    isActiveResponseTime,
    isActiveConcurrentUsers,
    isActiveTransactionRate,
    isActivePassRatio,
  } = active;
  return (
    <div className="mt-2">
      <ul className="flex justify-evenly">
        <li
          onClick={activeHandler}
          className="text-left cursor-pointer flex font-openSans"
          data-metric="isActiveResponseTime"
        >
          {isActiveResponseTime ? <LegendButton checked="on"/> : <LegendButton /> } Response Time
        </li>
        <li
          onClick={activeHandler}
          className="text-left cursor-pointer flex font-openSans"
          data-metric="isActiveConcurrentUsers"
        >
          {isActiveConcurrentUsers ? <LegendButton checked="on"/> : <LegendButton /> } Concurrent Users
        </li>
        <li
          onClick={activeHandler}
          className="text-left cursor-pointer flex font-openSans"
          data-metric="isActiveTransactionRate"
        >
          {isActiveTransactionRate ? <LegendButton checked="on"/> : <LegendButton /> } Transaction Rate
        </li>
        <li
          onClick={activeHandler}
          className="text-left cursor-pointer flex font-openSans"
          data-metric="isActivePassRatio"
        >
          {isActivePassRatio ? <LegendButton checked="on"/> : <LegendButton /> } Pass Ratio
        </li>
      </ul>
    </div>
  );
};

export default Legend;

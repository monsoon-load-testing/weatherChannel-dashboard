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
      <p className="text-center">LEGEND</p>
      <ul className="flex justify-evenly">
        <li
          onClick={activeHandler}
          className="text-left cursor-pointer inline-block"
          data-metric="isActiveResponseTime"
        >
          Response Time: {isActiveResponseTime ? <LegendButton checked="on"/> : <LegendButton /> }
        </li>
        <li
          onClick={activeHandler}
          className="text-left cursor-pointer inline-block"
          data-metric="isActiveConcurrentUsers"
        >
          Concurrent Users: {isActiveConcurrentUsers ? <LegendButton checked="on"/> : <LegendButton /> }
        </li>
        <li
          onClick={activeHandler}
          className="text-left cursor-pointer inline-block"
          data-metric="isActiveTransactionRate"
        >
          Transaction Rate: {isActiveTransactionRate ? <LegendButton checked="on"/> : <LegendButton /> }
        </li>
        <li
          onClick={activeHandler}
          className="text-left cursor-pointer inline-block"
          data-metric="isActivePassRatio"
        >
          Pass Ratio: {isActivePassRatio ? <LegendButton checked="on"/> : <LegendButton /> }
        </li>
      </ul>
    </div>
  );
};

export default Legend;

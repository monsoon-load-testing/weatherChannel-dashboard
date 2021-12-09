const StatisticRow = (props) => {
  return (
    <div className="flex flex-grow items-center justify-center mt-0 pt-0 pb-0 border-t-0 px-6 align-middle border-l-0 text-lg border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700 font-openSans">
      {props.metricName}: {props.metricValue} {props.metricUnit}
    </div>
  );
};

export default StatisticRow;

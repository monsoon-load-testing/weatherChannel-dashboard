import {
  // VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryBrushContainer,
  VictoryZoomContainer,
  createContainer,
  VictoryTooltip,
  VictoryLegend,
  VictoryLabel,
  VictoryScatter,
} from "victory";
import Legend from "./Legend";
import MainChart from "./MainChart";
import WindowChart from "./WindowChart";
import { useState } from "react";

// {responseTime, concurrentUsers, transactionRate, passRatio }
const ChartContainer = ({
  responseTime,
  concurrentUsers,
  transactionRate,
  passRatio,
  refreshDataHandler,
}) => {
  const [
    maxResponseTime,
    maxConcurrentUsers,
    maxTransactionRate,
    maxPassRatio,
  ] = [responseTime, concurrentUsers, transactionRate, passRatio].map(
    (dataset) => {
      return Math.max(...dataset.map((datum) => datum.value));
    }
  );

  const [startTime, endTime] = [
    responseTime[0].time,
    responseTime[responseTime.length - 1].time,
  ];
  const [zoomDomain, setZoomDomain] = useState({
    x: [startTime, endTime],
    y: [0, 1.1],
  });

  const [active, setActive] = useState({
    isActiveResponseTime: true,
    isActiveConcurrentUsers: true,
    isActiveTransactionRate: true,
    isActivePassRatio: true,
  });

  return (
    <div className="w-full rounded-lg flex-shrink-0 flex-grow mt-2">
      <div className="flex justify-center">
        <div className="w-4/5 flex flex-col border bg-gray-500 mt-2">
          <div className="absolute">
            <button className="h-10 min-w-min border rounded-lg" onClick={refreshDataHandler}>REFRESH</button>
          </div>
          <Legend active={active} setActive={setActive} />
          <MainChart
            responseTime={responseTime}
            maxResponseTime={maxResponseTime}
            concurrentUsers={concurrentUsers}
            maxConcurrentUsers={maxConcurrentUsers}
            transactionRate={transactionRate}
            maxTransactionRate={maxTransactionRate}
            passRatio={passRatio}
            maxPassRatio={maxPassRatio}
            zoomDomain={zoomDomain}
            setZoomDomain={setZoomDomain}
            active={active}
          />
          <WindowChart
            responseTime={responseTime}
            maxResponseTime={maxResponseTime}
            concurrentUsers={concurrentUsers}
            maxConcurrentUsers={maxConcurrentUsers}
            transactionRate={transactionRate}
            maxTransactionRate={maxTransactionRate}
            passRatio={passRatio}
            maxPassRatio={maxPassRatio}
            zoomDomain={zoomDomain}
            setZoomDomain={setZoomDomain}
            active={active}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;

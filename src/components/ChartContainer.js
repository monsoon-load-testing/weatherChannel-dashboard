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
const ChartContainer = () => {
  const responseTime = [
    { time: new Date(1982, 1, 1), metric: "Response Time", unit: "ms", value: 125 },
    { time: new Date(1987, 1, 1), metric: "Response Time", unit: "ms", value: 257 },
    { time: new Date(1993, 1, 1), metric: "Response Time", unit: "ms", value: 345 },
    { time: new Date(1997, 1, 1), metric: "Response Time", unit: "ms", value: 515 },
    { time: new Date(2001, 1, 1), metric: "Response Time", unit: "ms", value: 132 },
    { time: new Date(2005, 1, 1), metric: "Response Time", unit: "ms", value: 305 },
    { time: new Date(2011, 1, 1), metric: "Response Time", unit: "ms", value: 270 },
    { time: new Date(2015, 1, 1), metric: "Response Time", unit: "ms", value: 470 },
  ];
  const concurrentUsers = [
    { time: new Date(1982, 1, 1), metric: "Concurrent Users", unit: "", value: 10 },
    { time: new Date(1987, 1, 1), metric: "Concurrent Users", unit: "", value: 20 },
    { time: new Date(1993, 1, 1), metric: "Concurrent Users", unit: "", value: 30 },
    { time: new Date(1997, 1, 1), metric: "Concurrent Users", unit: "", value: 50 },
    { time: new Date(2001, 1, 1), metric: "Concurrent Users", unit: "", value: 10 },
    { time: new Date(2005, 1, 1), metric: "Concurrent Users", unit: "", value: 30 },
    { time: new Date(2011, 1, 1), metric: "Concurrent Users", unit: "", value: 20 },
    { time: new Date(2015, 1, 1), metric: "Concurrent Users", unit: "", value: 40 },
  ];
  const transactionRate = [
    { time: new Date(1982, 1, 1), metric: "Transaction Rate", unit: "transactions/min", value: 25 },
    { time: new Date(1987, 1, 1), metric: "Transaction Rate", unit: "transactions/min", value: 15 },
    { time: new Date(1993, 1, 1), metric: "Transaction Rate", unit: "transactions/min", value: 35 },
    { time: new Date(1997, 1, 1), metric: "Transaction Rate", unit: "transactions/min", value: 37 },
    { time: new Date(2001, 1, 1), metric: "Transaction Rate", unit: "transactions/min", value: 40 },
    { time: new Date(2005, 1, 1), metric: "Transaction Rate", unit: "transactions/min", value: 40 },
    { time: new Date(2011, 1, 1), metric: "Transaction Rate", unit: "transactions/min", value: 12 },
    { time: new Date(2015, 1, 1), metric: "Transaction Rate", unit: "transactions/min", value: 34 },
  ];

  const passRatio = [
    { time: new Date(1982, 1, 1), metric: "Pass Ratio", unit: "%", value: 100 },
    { time: new Date(1987, 1, 1), metric: "Pass Ratio", unit: "%", value: 90 },
    { time: new Date(1993, 1, 1), metric: "Pass Ratio", unit: "%", value: 80 },
    { time: new Date(1997, 1, 1), metric: "Pass Ratio", unit: "%", value: 90 },
    { time: new Date(2001, 1, 1), metric: "Pass Ratio", unit: "%", value: 70 },
    { time: new Date(2005, 1, 1), metric: "Pass Ratio", unit: "%", value: 100 },
    { time: new Date(2011, 1, 1), metric: "Pass Ratio", unit: "%", value: 100},
    { time: new Date(2015, 1, 1), metric: "Pass Ratio", unit: "%", value: 95 },
  ];

  const [maxResponseTime, maxConcurrentUsers, maxTransactionRate, maxPassRatio] = [responseTime, concurrentUsers, transactionRate, passRatio].map(dataset => {
    return Math.max(...dataset.map(datum => datum.value))
  });

  const [startTime, endTime] = [responseTime[0].time, responseTime[responseTime.length - 1].time]
  const [zoomDomain, setZoomDomain] = useState({
    x: [startTime, endTime],
    y: [0, 1.1],
  });

  const [active, setActive] = useState({
    isActiveResponseTime: true,
    isActiveConcurrentUsers: true,
    isActiveTransactionRate: true,
    isActivePassRatio: true,
  })

  return (
    <div className="w-full h-full rounded-lg flex-shrink-0 flex-grow bg-gray-400">
      <div className="flex justify-center">
        <div className="w-4/5 flex flex-col">
          <Legend active={active} setActive={setActive} />
          <MainChart 
            responseTime={responseTime} maxResponseTime={maxResponseTime}
            concurrentUsers={concurrentUsers} maxConcurrentUsers={maxConcurrentUsers}
            transactionRate={transactionRate} maxTransactionRate={maxTransactionRate}
            passRatio={passRatio} maxPassRatio={maxPassRatio}
            zoomDomain={zoomDomain}
            setZoomDomain={setZoomDomain}
            active={active}
          />
          <WindowChart
            responseTime={responseTime} maxResponseTime={maxResponseTime}
            concurrentUsers={concurrentUsers} maxConcurrentUsers={maxConcurrentUsers}
            transactionRate={transactionRate} maxTransactionRate={maxTransactionRate}
            passRatio={passRatio} maxPassRatio={maxPassRatio}
            zoomDomain={zoomDomain}
            setZoomDomain={setZoomDomain}
            active={active}
          />
        </div>
      </div>

    </div>
  )
}

export default ChartContainer;
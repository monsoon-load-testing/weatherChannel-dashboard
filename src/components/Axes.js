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

const Axes= ( { 
  maxResponseTime, maxConcurrentUsers,
  maxTransactionRate, maxPassRatio,
}) => {
  console.log("maxResponseTime", maxResponseTime);
  console.log("maxConcurrentUsers", maxConcurrentUsers);
  console.log("maxTransactionRate", maxResponseTime);
  console.log("maxPassRatio", maxPassRatio);
  return (
    <>
      <VictoryAxis />
      {/* <VictoryAxis
        dependentAxis
        tickValues={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
        tickFormat={(tickValue) => tickValue * maxResponseTime}
        axisLabelComponent={<VictoryLabel x={50} y={150} angle={-90} />}
        label={"Response Time"}
        style={{
          grid: { strokeWidth: 0 },
          ticks: { padding: -5, strokeWidth: 0 },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickValues={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
        tickFormat={(tickValue) => tickValue * maxConcurrentUsers}
        axisLabelComponent={<VictoryLabel x={150} y={150} angle={-90} />}
        label={"Concurrent users"}
        style={{
          ticks: { padding: -35, strokeWidth: 0 },
          grid: { strokeWidth: 0 },
        }}
        // orientation={"right"}
      />
      <VictoryAxis
        dependentAxis
        tickValues={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
        tickFormat={(tickValue) => tickValue * maxTransactionRate}
        offsetX={900}
        axisLabelComponent={
          <VictoryLabel x={900 - 50} y={150} angle={-90} />
        }
        label={"Transaction rate"}
        style={{
          grid: { strokeWidth: 0 },
          ticks: { padding: 0, strokeWidth: 0 },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickValues={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
        tickFormat={(tickValue) => tickValue * maxPassRatio}
        offsetX={900}
        axisLabelComponent={
          <VictoryLabel x={900 + 50} y={150} angle={-90} />
        }
        label={"Pass ratio"}
        style={{
          grid: { strokeWidth: 0 },
          ticks: { padding: -50, strokeWidth: 0 },
        }}
      /> */}
    </>
  )
}

export default Axes;
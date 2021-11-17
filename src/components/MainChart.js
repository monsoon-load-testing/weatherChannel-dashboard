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
  VictoryGroup,
} from "victory";

// import Axes from './Axes'

const MainChart = ({
  responseTime,
  maxResponseTime,
  concurrentUsers,
  maxConcurrentUsers,
  transactionRate,
  maxTransactionRate,
  passRatio,
  maxPassRatio,
  zoomDomain,
  setZoomDomain,
  active,
}) => {
  const {
    isActiveResponseTime,
    isActiveConcurrentUsers,
    isActiveTransactionRate,
    isActivePassRatio,
  } = active;
  const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
  return (
    <>
      <VictoryChart
        key="Main VictoryChart"
        theme={VictoryTheme.material}
        domainPadding={20}
        padding={{ left: 100, right: 100, top: 50, bottom: 30 }}
        width={1000}
        height={350}
        scale={{ x: "time" }}
        domain={{ y: [0, 1.1] }}
        containerComponent={
          <VictoryZoomVoronoiContainer
            allowZoom={false}
            voronoiBlacklist={["ignore1", "ignore2", "ignore3", "ignore4"]}
            voronoiDimension="x"
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={(domain) => setZoomDomain(domain)}
            labels={({ datum }) =>
              `${datum.metric}: ${datum.value} ${datum.unit}`
            }
            labelComponent={<VictoryTooltip />}
          />
        }
      >
        <VictoryAxis key="Response Time Axis" />
        {isActiveResponseTime && (
          <VictoryAxis
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
        )}

        {isActiveConcurrentUsers && (
          <VictoryAxis
            key="Concurrent Users Axis"
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
        )}
        {isActiveTransactionRate && (
          <VictoryAxis
            key="Transaction Rate Axis"
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
        )}
        {isActivePassRatio && (
          <VictoryAxis
            key="Pass Ratio Axis"
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
          />
        )}

        {isActiveResponseTime && (
          <VictoryLine
            key="Response Time Line"
            name="ignore1"
            style={{ data: { stroke: "tomato" } }}
            data={responseTime}
            x={"time"}
            y={(datum) => datum.value / maxResponseTime}
          />
        )}

        {isActiveResponseTime && (
          <VictoryScatter
            key="Response Time Scatter"
            style={{ data: { fill: "tomato" } }}
            data={responseTime}
            x={"time"}
            y={(datum) => datum.value / maxResponseTime}
            size={({ active }) => (active ? 4 : 1)}
          />
        )}

        {isActiveConcurrentUsers && (
          <VictoryLine
            key="Concurrent Users Line"
            name="ignore2"
            style={{ data: { stroke: "blue" } }}
            data={concurrentUsers}
            x={"time"}
            y={(datum) => datum.value / maxConcurrentUsers}
          />
        )}

        {isActiveConcurrentUsers && (
          <VictoryScatter
            key="Concurrent Users Scatter"
            style={{ data: { fill: "blue" } }}
            data={concurrentUsers}
            x={"time"}
            y={(datum) => datum.value / maxConcurrentUsers}
            size={({ active }) => (active ? 4 : 1)}
          />
        )}

        {isActiveTransactionRate && (
          <VictoryLine
            key="Transaction Rate Line"
            name="ignore3"
            style={{ data: { stroke: "purple" } }}
            data={transactionRate}
            x={"time"}
            y={(datum) => datum.value / maxTransactionRate}
          />
        )}

        {isActiveTransactionRate && (
          <VictoryScatter
            key="Transaction Rate Scatter"
            style={{ data: { fill: "purple" } }}
            data={transactionRate}
            x={"time"}
            y={(datum) => datum.value / maxTransactionRate}
            size={({ active }) => (active ? 4 : 1)}
          />
        )}

        {isActivePassRatio && (
          <VictoryLine
            key="Pass Ratio Line"
            name="ignore4"
            style={{ data: { stroke: "green" } }}
            data={passRatio}
            x={"time"}
            y={(datum) => datum.value / maxPassRatio}
          />
        )}

        {isActivePassRatio && (
          <VictoryScatter
            key="Pass Ratio Scatter"
            style={{ data: { fill: "green" } }}
            data={passRatio}
            x={"time"}
            y={(datum) => datum.value / maxPassRatio}
            size={({ active }) => (active ? 4 : 1)}
          />
        )}
      </VictoryChart>
    </>
  );
};

export default MainChart;

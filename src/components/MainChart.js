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
        singleQuadrantDomainPadding={{ x: false }}
        domainPadding={{ x: 60 }}
        padding={{ left: 100, right: 100, top: 50, bottom: 30 }}
        width={1000}
        height={350}
        scale={{ x: "time" }}
        domain={{ y: [0, 1.1] }}
        containerComponent={
          <VictoryZoomVoronoiContainer
            allowZoom={false}
            allowPan={false}
            voronoiBlacklist={["ignore1", "ignore2", "ignore3", "ignore4"]}
            voronoiDimension="x"
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={(domain) => setZoomDomain(domain)}
            labels={({ datum }) =>
              `${datum.metric}: ${datum.value} ${datum.unit}`
            }
            labelComponent={
              <VictoryTooltip
                centerOffset={{ y: 45 }}
                flyoutStyle={{
                  stroke: "black",
                  strokeWidth: 2,
                  fill: "white",
                  padding: 50,
                }}
                flyoutWidth={250}
              />
            }
          />
        }
      >
        <VictoryAxis
          key="Response Time Axis"
          style={{
            grid: { strokeWidth: 0 },
            axis: { stroke: "black" },
            ticks: { stroke: "black" },
            tickLabels: { fill: "black" },
          }}
        />

        {isActiveResponseTime && (
          <VictoryAxis
            dependentAxis
            tickValues={[0, 0.25, 0.5, 0.75, 1]}
            tickFormat={(tickValue) => Math.round(tickValue * maxResponseTime)}
            axisLabelComponent={
              <VictoryLabel
                x={83}
                y={50}
                angle={0}
                style={{
                  fill: "#1D0D5C",
                  fontSize: 16,
                }}
              />
            }
            label={"ms"}
            style={{
              grid: { strokeWidth: 0 },
              ticks: { padding: -5, strokeWidth: 0 },
              axis: { stroke: "black" },
              tickLabels: { fill: "#1D0D5C", fontWeight: "bold" },
            }}
          />
        )}

        {isActiveConcurrentUsers && (
          <VictoryAxis
            key="Concurrent Users Axis"
            dependentAxis
            tickValues={[0.25, 0.5, 0.75, 1]}
            tickFormat={(tickValue) =>
              Math.round(tickValue * maxConcurrentUsers)
            }
            axisLabelComponent={
              <VictoryLabel
                x={125}
                y={50}
                angle={0}
                style={{ fill: "#916cbf", fontSize: 16 }}
              />
            }
            label={"users"}
            style={{
              ticks: { padding: -40, strokeWidth: 0 },
              grid: { strokeWidth: 0 },
              axis: { stroke: "black" },
              tickLabels: {
                fill: "#916cbf",
                fontWeight: "bold",
              },
            }}
            // orientation={"right"}
          />
        )}
        {isActiveTransactionRate && (
          <VictoryAxis
            key="Transaction Rate Axis"
            dependentAxis
            tickValues={[0, 0.25, 0.5, 0.75, 1]}
            tickFormat={(tickValue) =>
              Math.round(tickValue * maxTransactionRate)
            }
            offsetX={900}
            axisLabelComponent={
              <VictoryLabel
                x={900 + 22}
                y={50}
                angle={0}
                style={{ fill: "#649CD9", fontSize: 16 }}
              />
            }
            label={"TPM"}
            style={{
              grid: { strokeWidth: 0 },
              ticks: { padding: -50, strokeWidth: 0 },
              axis: { stroke: "black" },
              tickLabels: { fill: "#649CD9", fontWeight: "bold" },
            }}
          />
        )}
        {isActivePassRatio && (
          <VictoryAxis
            key="Pass Ratio Axis"
            dependentAxis
            tickValues={[0.25, 0.5, 0.75, 1]}
            tickFormat={(tickValue) => Math.round(tickValue * maxPassRatio)}
            offsetX={900}
            axisLabelComponent={
              <VictoryLabel
                x={900 - 20}
                y={50}
                angle={0}
                style={{ fill: "#CC6ACC", fontSize: 16 }}
              />
            }
            label={"%"}
            style={{
              grid: { strokeWidth: 0 },
              ticks: { padding: 0, strokeWidth: 0 },
              axis: { stroke: "black" },
              tickLabels: { fill: "#CC6ACC", fontWeight: "bold" },
            }}
          />
        )}

        {isActiveResponseTime && (
          <VictoryLine
            key="Response Time Line"
            name="ignore1"
            style={{ data: { stroke: "#1D0D5C", strokeWidth: "2.5" } }}
            data={responseTime}
            x={"time"}
            y={(datum) => datum.value / maxResponseTime}
          />
        )}

        {isActiveResponseTime && (
          <VictoryScatter
            key="Response Time Scatter"
            style={{
              data: { fill: "#1D0D5C" },
              labels: { fill: "#1D0D5C", fontWeight: "bold" },
            }}
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
            style={{
              data: {
                stroke: "#916cbf",
                strokeWidth: "2.5",
                strokeLinecap: "round",
              },
            }}
            data={concurrentUsers}
            x={"time"}
            y={(datum) => datum.value / maxConcurrentUsers}
          />
        )}

        {isActiveConcurrentUsers && (
          <VictoryScatter
            key="Concurrent Users Scatter"
            style={{
              data: { fill: "#916cbf" },
              labels: { fill: "#916cbf", fontWeight: "bold" },
            }}
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
            style={{ data: { stroke: "#649CD9", strokeWidth: "2.5" } }}
            data={transactionRate}
            x={"time"}
            y={(datum) => datum.value / maxTransactionRate}
          />
        )}

        {isActiveTransactionRate && (
          <VictoryScatter
            key="Transaction Rate Scatter"
            style={{
              data: { fill: "#649CD9" },
              labels: { fill: "#649CD9", fontWeight: "bold" },
            }}
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
            style={{ data: { stroke: "#CC6ACC", strokeWidth: "2.5" } }}
            data={passRatio}
            x={"time"}
            y={(datum) => datum.value / maxPassRatio}
          />
        )}

        {isActivePassRatio && (
          <VictoryScatter
            key="Pass Ratio Scatter"
            style={{
              data: { fill: "#CC6ACC" },
              labels: { fill: "#CC6ACC", fontWeight: "bold" },
            }}
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

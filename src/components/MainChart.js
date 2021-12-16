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
  colors,
}) => {
  const {
    isActiveResponseTime,
    isActiveConcurrentUsers,
    isActiveTransactionRate,
    isActivePassRatio,
  } = active;
  const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
  return (
    <div className="pl-4 pr-6">
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
              `${datum.metric}: ${Math.round(datum.value)} ${datum.unit}`
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
                  fill: colors.responseTime,
                  fontSize: 16,
                }}
              />
            }
            label={"ms"}
            style={{
              grid: { strokeWidth: 0 },
              ticks: { padding: -5, strokeWidth: 0 },
              axis: { stroke: "black" },
              tickLabels: { fill: colors.responseTime, fontWeight: "bold" },
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
                style={{ fill: colors.concurrentUsers, fontSize: 16 }}
              />
            }
            label={"users"}
            style={{
              ticks: { padding: -40, strokeWidth: 0 },
              grid: { strokeWidth: 0 },
              axis: { stroke: "black" },
              tickLabels: {
                fill: colors.concurrentUsers,
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
                style={{ fill: colors.transactionRate, fontSize: 16 }}
              />
            }
            label={"TPM"}
            style={{
              grid: { strokeWidth: 0 },
              ticks: { padding: -50, strokeWidth: 0 },
              axis: { stroke: "black" },
              tickLabels: { fill: colors.transactionRate, fontWeight: "bold" },
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
                style={{ fill: colors.passRatio, fontSize: 16 }}
              />
            }
            label={"%"}
            style={{
              grid: { strokeWidth: 0 },
              ticks: { padding: 0, strokeWidth: 0 },
              axis: { stroke: "black" },
              tickLabels: { fill: colors.passRatio, fontWeight: "bold" },
            }}
          />
        )}

        {isActiveResponseTime && (
          <VictoryLine
            key="Response Time Line"
            name="ignore1"
            style={{
              data: { stroke: colors.responseTime, strokeWidth: "2.5" },
            }}
            data={responseTime}
            x={"time"}
            y={(datum) => datum.value / maxResponseTime}
          />
        )}

        {isActiveResponseTime && (
          <VictoryScatter
            key="Response Time Scatter"
            style={{
              data: { fill: colors.responseTime },
              labels: { fill: colors.responseTime, fontWeight: "bold" },
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
                stroke: colors.concurrentUsers,
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
              data: { fill: colors.concurrentUsers },
              labels: { fill: colors.concurrentUsers, fontWeight: "bold" },
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
            style={{
              data: { stroke: colors.transactionRate, strokeWidth: "2.5" },
            }}
            data={transactionRate}
            x={"time"}
            y={(datum) => datum.value / maxTransactionRate}
          />
        )}

        {isActiveTransactionRate && (
          <VictoryScatter
            key="Transaction Rate Scatter"
            style={{
              data: { fill: colors.transactionRate },
              labels: { fill: colors.transactionRate, fontWeight: "bold" },
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
            style={{ data: { stroke: colors.passRatio, strokeWidth: "2.5" } }}
            data={passRatio}
            x={"time"}
            y={(datum) => datum.value / maxPassRatio}
          />
        )}

        {isActivePassRatio && (
          <VictoryScatter
            key="Pass Ratio Scatter"
            style={{
              data: { fill: colors.passRatio },
              labels: { fill: colors.passRatio, fontWeight: "bold" },
            }}
            data={passRatio}
            x={"time"}
            y={(datum) => datum.value / maxPassRatio}
            size={({ active }) => (active ? 4 : 1)}
          />
        )}
      </VictoryChart>
    </div>
  );
};

export default MainChart;

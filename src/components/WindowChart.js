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

const WindowChart = ({
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
  return (
    <>
      <VictoryChart
        key="Window VictoryChart"
        theme={VictoryTheme.material}
        domainPadding={{ x: 60 }}
        padding={{ left: 100, right: 100, top: 10, bottom: 50 }}
        width={1000}
        height={110}
        scale={{ x: "time" }}
        domain={{ y: [0, 1.1] }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={zoomDomain}
            onBrushDomainChange={(domain) =>
              setZoomDomain({ x: domain.x, y: [0, 1.1] })
            }
          />
        }
      >
        <VictoryAxis key="Window time axis" />

        {isActiveResponseTime && (
          <VictoryLine
            key="Window Response Time line"
            name="Response Time"
            style={{ data: { stroke: "#1D0D5C" } }}
            data={responseTime}
            x={"time"}
            y={(datum) => datum.value / maxResponseTime}
          />
        )}

        {isActiveConcurrentUsers && (
          <VictoryLine
            key="Window Concurrent Users Line"
            style={{ data: { stroke: "#916cbf" } }}
            data={concurrentUsers}
            x={"time"}
            y={(datum) => datum.value / maxConcurrentUsers}
          />
        )}

        {isActiveTransactionRate && (
          <VictoryLine
            key="Window Transaction Rate Line"
            style={{ data: { stroke: "#649CD9" } }}
            data={transactionRate}
            x={"time"}
            y={(datum) => datum.value / maxTransactionRate}
          />
        )}

        {isActivePassRatio && (
          <VictoryLine
            key="Window Pass Ratio Line"
            style={{ data: { stroke: "#CC6ACC" } }}
            data={passRatio}
            x={"time"}
            y={(datum) => datum.value / maxPassRatio}
          />
        )}
      </VictoryChart>
    </>
  );
};

export default WindowChart;

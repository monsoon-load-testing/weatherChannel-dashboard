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
  responseTime, maxResponseTime, concurrentUsers, maxConcurrentUsers,
  transactionRate, maxTransactionRate, passRatio, maxPassRatio,
  zoomDomain, setZoomDomain, active
}) => {
  const { isActiveResponseTime, isActiveConcurrentUsers, isActiveTransactionRate, isActivePassRatio } = active;
  return (
    <>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        padding={{left:100, right:100, top: 10, bottom: 50}}
        width={1000}
        height={150}
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
        <VictoryAxis />

        {isActiveResponseTime && <VictoryLine
          name="Response Time"
          style={{ data: { stroke: "tomato" } }}
          data={responseTime}
          x={"time"}
          y={(datum) => datum.value / maxResponseTime}
        />}

        {isActiveConcurrentUsers&&<VictoryLine
          style={{ data: { stroke: "blue" } }}
          data={concurrentUsers}
          x={"time"}
          y={(datum) => datum.value / maxConcurrentUsers}
        />}
        
        {isActiveTransactionRate&&<VictoryLine
          style={{ data: { stroke: "purple" } }}
          data={transactionRate}
          x={"time"}
          y={(datum) => datum.value / maxTransactionRate}
        />}
        
        {isActivePassRatio&&<VictoryLine
          style={{ data: { stroke: "green" } }}
          data={passRatio}
          x={"time"}
          y={(datum) => datum.value / maxPassRatio}
        />}
      </VictoryChart>
    </>
  )
}

export default WindowChart
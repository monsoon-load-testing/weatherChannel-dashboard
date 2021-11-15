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
import { useState } from "react";

export function DraftChart() {
  const data2 = [
    { a: new Date(1982, 1, 1), b: 125, c: "ms" },
    { a: new Date(1987, 1, 1), b: 257, c: "ms" },
    { a: new Date(1993, 1, 1), b: 345, c: "ms" },
    { a: new Date(1997, 1, 1), b: 515, c: "ms" },
    { a: new Date(2001, 1, 1), b: 132, c: "ms" },
    { a: new Date(2005, 1, 1), b: 305, c: "ms" },
    { a: new Date(2011, 1, 1), b: 270, c: "ms" },
    { a: new Date(2015, 1, 1), b: 470, c: "ms" },
  ];

  let data3 = [
    { a: new Date(1982, 1, 1), b: 10, c: "users" },
    { a: new Date(1987, 1, 1), b: 10, c: "users" },
    { a: new Date(1993, 1, 1), b: 12, c: "users" },
    { a: new Date(1997, 1, 1), b: 5, c: "users" },
    { a: new Date(2001, 1, 1), b: 7, c: "users" },
    { a: new Date(2005, 1, 1), b: 25, c: "users" },
    { a: new Date(2011, 1, 1), b: 30, c: "users" },
    { a: new Date(2015, 1, 1), b: 2, c: "users" },
  ];

  const [maximaData2, maximaData3] = [data2, data3].map((dataset) =>
    Math.max(...dataset.map((d) => d.b))
  );
  console.log(maximaData2);
  const [zoomDomain, setZoomDomain] = useState({
    x: [new Date(1990, 1, 1), new Date(2009, 1, 1)],
    y: [0, 1],
  });

  const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

  return (
    <main className="flex justify-center">
      <div className="App w-4/5 flex flex-col">
        <h1>Chart 1</h1>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
          padding={100}
          width={1000}
          height={500}
          scale={{ x: "time" }}
          domain={{ y: [0, 1] }}
          containerComponent={
            <VictoryZoomVoronoiContainer
              voronoiDimension="x" // if commented out, tooltip is per line.
              // it' probably better to use tooltips inside each VictoryChart
              // that way we don't have to define a 3 column of data. we can just do
              // ({datum}) => `${datum.b} ms`
              zoomDimension="x"
              zoomDomain={zoomDomain}
              onZoomDomainChange={(domain) => setZoomDomain(domain)}
              labels={({ datum }) => `${datum.c}: ${datum.b}`}
              labelComponent={<VictoryTooltip />}
            />
          }
        >
          <VictoryLegend
            x={125}
            y={0}
            title="Legend"
            centerTitle
            orientation="horizontal"
            gutter={20}
            style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
            data={[
              { name: "Response Time", symbol: { fill: "tomato" } },
              { name: "Concurrent Users", symbol: { fill: "blue" } },
            ]}
          />
          <VictoryAxis />
          <VictoryAxis
            dependentAxis
            tickValues={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
            tickFormat={(tickValue) => tickValue * maximaData2}
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
            tickFormat={(tickValue) => tickValue * maximaData3}
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
            tickFormat={(tickValue) => tickValue * maximaData2}
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
            tickFormat={(tickValue) => tickValue * maximaData3}
            offsetX={900}
            axisLabelComponent={
              <VictoryLabel x={900 + 50} y={150} angle={-90} />
            }
            label={"Pass rate"}
            style={{
              grid: { strokeWidth: 0 },
              ticks: { padding: -50, strokeWidth: 0 },
            }}
          />
          <VictoryLine
            name="series-1"
            style={{ data: { stroke: "tomato" } }}
            data={data2}
            x={"a"}
            // y={"b"}
            y={(datum) => datum.b / maximaData2}
          />
          <VictoryLine
            style={{ data: { stroke: "blue" } }}
            data={data3}
            x={"a"}
            y={(datum) => datum.b / maximaData3}
          />
        </VictoryChart>

        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
          scale={{ x: "time" }}
          width={1000}
          height={150}
          domain={{ y: [0, 1] }}
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={zoomDomain}
              onBrushDomainChange={(domain) =>
                setZoomDomain({ x: domain.x, y: [0, 1] })
              }
            />
          }
        >
          <VictoryAxis />
          <VictoryAxis
            dependentAxis
            tickValues={[0, 1]}
            tickFormat={(tickValue) => tickValue * maximaData2}
          />
          <VictoryLine
            style={{ data: { stroke: "tomato" } }}
            data={data2}
            x={"a"}
            y={(datum) => datum.b / maximaData2}
          />
        </VictoryChart>
      </div>
    </main>
  );
}

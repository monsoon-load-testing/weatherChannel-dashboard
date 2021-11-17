import { DraftChart } from "./DraftChart";
import ChartContainer from "./ChartContainer";
import Statistics from "./Statistics";
import StepButton from "./StepButton";
import { useParams } from "react-router";
import apiClient from "../lib/ApiClient";
import { useState, useEffect } from "react";

const formatData = (rawData) => {
  const data = { ...rawData };
  // const timeOrigin = new Date(Object.values(Object.values(data)[0])[0][0].time);
  // const timeOrigin = 0;
  Object.values(data).forEach((step) => {
    Object.values(step).forEach((metric) => {
      metric.forEach((datum) => {
        // const miliseconds = new Date(datum.time) - timeOrigin;
        const offset = new Date(datum.time).getTimezoneOffset() * 60 * 1000;
        datum.time = new Date(datum.time) - offset;
      });
    });
  });
  return data;
};

const TestPage = () => {
  const tableName = useParams().tableName;
  // const emptyMetric = [{ time: "", metric: "", unit: "", value: "" }];

  const [allSteps, setAllSteps] = useState([]);
  const [allStats, setAllStats] = useState({});
  const [allData, setAllData] = useState({});
  const [currentStep, setCurrentStep] = useState("");
  const [currentStats, setCurrentStats] = useState({});
  const [currentData, setCurrentData] = useState({});
  
  useEffect(() => {
    const stepsPromise = apiClient.getListOfSteps(tableName);
    const statsPromise = apiClient.getTestStats(tableName);
    const datasetPromise = apiClient.getTestDataset(tableName);
    Promise.all([stepsPromise, statsPromise, datasetPromise])
      .then((data) => {
        setAllSteps(data[0]);
        setAllStats(data[1]);
        setAllData(formatData(data[2]));
        return data;
      })
      .then((data) => {
        const steps = data[0];
        const step1 = steps[0];
        setCurrentStep(step1);
      });
  }, [setAllSteps, setAllStats, setAllData, setCurrentStep, tableName]);

  useEffect(() => {
    setCurrentStats(allStats[currentStep] || {});
    setCurrentData(allData[currentStep] || {});
  }, [currentStep, allStats, allData, setCurrentStats, setCurrentData]);

  const clickHandler = (e) => {
    e.preventDefault();
    setCurrentStep(e.target.textContent);
  };

  return (
    <div className="w-full bg-white relative flex overflow-hidden">
      <div className="w-full h-full flex flex-col justify-between">
        {/* <!-- Header --> */}
        <header className="h-16 w-full flex items-center relative justify-between px-5 space-x-10 bg-gray-900">
          {/* <!-- Profile --> */}
          {allSteps.map((stepName) => (
            <StepButton
              key={stepName}
              stepName={stepName}
              clickHandler={clickHandler}
              data-key={stepName}
            />
          ))}
        </header>

        {/* <!-- Main --> */}
        <main className="max-w-full h-full flex relative overflow-y-hidden">
          {/* <!-- Container --> */}
          <div className="h-full w-full rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            {/* <!-- Container --> */}
            {JSON.stringify(currentStats) !== "{}" && (
              <Statistics {...currentStats} />
            )}
            {JSON.stringify(currentData) !== "{}" && (
              <ChartContainer {...currentData} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
// downpour-test-1637014373298
export default TestPage;

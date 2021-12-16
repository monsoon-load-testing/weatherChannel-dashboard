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

  const refreshDataHandler = (e) => {
    e.preventDefault();
    const stepsPromise = apiClient.getListOfSteps(tableName);
    const statsPromise = apiClient.getTestStats(tableName);
    const datasetPromise = apiClient.getTestDataset(tableName);
    Promise.all([stepsPromise, statsPromise, datasetPromise]).then((data) => {
      setAllSteps(data[0]);
      setAllStats(data[1]);
      setAllData(formatData(data[2]));
      return data;
    });
  };

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
    const button = e.target.closest("button");
    const children = button.closest("header").childNodes;
    children.forEach((child) => {
      if (child.classList.contains("active")) {
        child.classList.remove("active");
      }
    });
    button.classList.add("active");
    setCurrentStep(e.target.textContent);
  };

  return (
    <div className="w-full bg-white relative flex overflow-hidden border-2 rounded-lg border-mediumPurple">
      <div className="w-full h-full flex flex-col justify-between">
        {/* <!-- Header --> */}
        <header className="w-full flex items-center relative justify-between px-0  pl-0 pr-0 bg-monsoonWhite">
          {/* <!-- Profile --> */}
          {allSteps.map((stepName, index) => (
            <StepButton
              key={stepName}
              stepName={stepName}
              clickHandler={clickHandler}
              data-key={stepName}
              index={index}
              lastStepIdx={allSteps.length - 1}
            />
          ))}
        </header>

        {/* <!-- Main --> */}
        <main className="max-w-full h-full flex relative overflow-y-hidden p-0">
          {/* <!-- Container --> */}
          <div className="h-full w-full m-auto rounded-tl p-0">
            {/* <!-- Container --> */}
            {JSON.stringify(currentStats) !== "{}" && (
              <Statistics {...currentStats} />
            )}
            {JSON.stringify(currentData) !== "{}" && (
              <ChartContainer
                refreshDataHandler={refreshDataHandler}
                {...currentData}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
export default TestPage;

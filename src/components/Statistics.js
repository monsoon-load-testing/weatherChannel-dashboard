import StatisticRow from "./StatisticRow";

const Statistics = ({ responseTime }) => {
  const p95 = Math.round(responseTime["95th Percentile"]);
  const average = Math.round(responseTime["Average"]);
  const min = Math.round(responseTime["Min"]);
  const max = Math.round(responseTime["Max"]);

  return (
    <div className="w-full rounded-lg flex-shrink-0 flex-grow mb-0  pt-8 pl-24 pr-24">
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <section>
        <div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded ">
            <div className="block w-full overflow-x-auto">
              <div className="items-center bg-transparent w-full border-collapse">
                <div className="">
                  <div>
                    <p className=" text-xl px-6 bg-blueGray-50 text-black align-middle border border-solid border-blueGray-100 text-s border-l-0 border-r-0 whitespace-nowrap font-raleway font-bold text-center">
                      Response Time Metrics
                    </p>
                  </div>
                </div>

                <div className="flex justify-evenly">
                  <StatisticRow
                    metricName="95th Percentile"
                    metricValue={p95}
                    metricUnit="ms"
                  />
                  <StatisticRow
                    metricName="Average"
                    metricValue={average}
                    metricUnit="ms"
                  />
                  <StatisticRow
                    metricName="Min"
                    metricValue={min}
                    metricUnit="ms"
                  />
                  <StatisticRow
                    metricName="Max"
                    metricValue={max}
                    metricUnit="ms"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;

import StatisticRow from "./StatisticRow"

const Statistics = () => {
  return (
    <div className="w-full rounded-lg flex-shrink-0 flex-grow bg-gray-400 mb-0">
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

      <section>
      <div >
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded ">
          {/* <div class="px-6 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Response Time</div> */}
          <div class="block w-full overflow-x-auto">
            <div class="items-center bg-transparent w-full border-collapse">
              <div class="">
                <div>
                  <p class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">Response Time Metrics</p>
                </div>
              </div>

              <div className="flex justify-evenly">
                <StatisticRow metricName="95th Percentile" metricValue="723" metricUnit="ms" />
                <StatisticRow metricName="Average" metricValue="700" metricUnit="ms" />
                <StatisticRow metricName="Min" metricValue="650" metricUnit="ms" />
                <StatisticRow metricName="Max" metricValue="780" metricUnit="ms" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

/*
desired statistics:
responseTime
  average
  min
  max
  p95
*/

export default Statistics;
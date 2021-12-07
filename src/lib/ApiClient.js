const axios = require("axios");

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}
const BASE_URL = "/api/tests";

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getListOfSteps(tableName, callback) {
    return axios
      .get(`${BASE_URL}/${tableName}/steps`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getTestDataset(tableName, callback) {
    return axios
      .get(`${BASE_URL}/${tableName}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getTestStats(tableName, callback) {
    return axios
      .get(`${BASE_URL}/${tableName}/stats`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  
  getListOfTables(tableName, callback) {
    return axios
      .get(`${BASE_URL}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  
};

// IIFE to test shape of test from db
// (async () => {
//   const db = "downpour-test-1637014373298"
//   const steps = await apiClient.getListOfSteps(db);
//   console.log("Steps", steps);
//   const dataset = await apiClient.getTestDataset(db);
//   console.log("Dataset", dataset);
//   const testStats = await apiClient.getTestStats(db);
//   console.log("Stats", testStats);
// })();

export default apiClient;

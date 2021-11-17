import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

// export const GET_LIST_OF_STEPS = "/tests/:tableName/steps";
// export const GET_TEST_DATASET = "/tests/:tableName";
// export const GET_TEST_STATS = "/tests/:tableName/stats";
const BASE_URL = "api/tests";

function unwrapData(response) {
  return response.data;
}
// d
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getListOfSteps(tableName, callback) {
    return axios
      .get(`${BASE_URL}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;

const util = {};
import Axios from "axios";

util.ajax = function (url, type = "get", params) {
  return new Promise((resolve, reject) => {
    if (type === "get") {
      Axios.get(url, params)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    } else {
      Axios.post(url, params)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};
export default util;

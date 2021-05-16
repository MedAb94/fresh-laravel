window._ = require("lodash");

try {
    window.Popper = require("popper.js").default;
    window.$ = window.jQuery = require("jquery");

    require("bootstrap");
} catch (e) {
}

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

let sd = (v, d) => {
    return v === undefined || v === null ? d : v;
};
window.app_api = sd(process.env.MIX_API_URL, "https://dgpsd.herokuapp.com/api");
window.axios.defaults.baseURL = sd(process.env.MIX_API_URL, "https://dgpsd.herokuapp.com/api");
//window.axios.defaults.baseURL = "http://127.0.0.1:8000/api";
window.axios.defaults.baseURL = "https://dgpsd.herokuapp.com/api";


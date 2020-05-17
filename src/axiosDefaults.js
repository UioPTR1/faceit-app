import axios from "axios";

const instance = axios.create({
  baseURL: "https://open.faceit.com/data/v4/",
});
instance.defaults.headers.common["Authorization"] =
  "Bearer 3392a4a0-da4f-45bd-90ed-10d9e8918a15";

export default instance;

import axios from "axios";

const url =
  "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";

const getAllc = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

export default { getAllc };

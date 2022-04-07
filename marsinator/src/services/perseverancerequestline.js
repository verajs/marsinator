import axios from "axios";

const url =
  "https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json";

const getAll = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

export default { getAll };

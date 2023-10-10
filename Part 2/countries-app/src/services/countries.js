import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/name";

const getAll = (value) => {
  const request = axios.get(`${baseUrl}/${value}`);
  return request.then((response) => response.data[0].name);
};

export default { getAll };

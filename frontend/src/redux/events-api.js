import axios from "axios";
axios.defaults.baseURL = "https://events-hunter-production.up.railway.app";
// axios.defaults.baseURL = "http://localhost:4000/";
export const getEvents = async () => {
  try {
    const data = await axios.get("/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

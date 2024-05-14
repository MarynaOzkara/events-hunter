import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/api";
export const getEvents = async () => {
  try {
    const data = await axios.get("/events");
    return data;
  } catch (error) {
    console.log(error);
  }
};

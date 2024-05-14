import axios from "axios";
axios.defaults.baseURL = "https://events-hunter-api.onrender.com";
export const getEvents = async () => {
  try {
    const data = await axios.get("/api/events");
    return data;
  } catch (error) {
    console.log(error);
  }
};

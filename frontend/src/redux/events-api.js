import axios from "axios";
axios.defaults.baseURL = "https://events-hunter.onrender.com";
export const getEvents = async () => {
  try {
    const data = await axios.get("/events");
    return data;
  } catch (error) {
    console.log(error);
  }
};

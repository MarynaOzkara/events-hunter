import "./App.css";

import React, { useEffect } from "react";
import { getEvents } from "./redux/events-api";

const App = () => {
  useEffect(() => {
    getEvents().then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};

export default App;

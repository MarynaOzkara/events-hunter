import "./App.css";

import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((response) => setData(response.message));
  }, []);
  return <div>{!data ? "Loadding..." : data}</div>;
};

export default App;

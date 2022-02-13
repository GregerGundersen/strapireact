import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + ANIMALS_URL + POPULATE)
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
      <ul>
        {data.length > 0
          ? data.map((animal, idx) => {
              return <li key={idx}>{animal.attributes.name}</li>;
            })
          : null}
      </ul>
    </div>
  );
}

export default Home;

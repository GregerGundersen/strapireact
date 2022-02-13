import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "./utils/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data.data));
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
      <ul>
        {data.length > 0
          ? data.map((champion, idx) => {
              return <li key={idx}>{champion.attributes.name}</li>;
            })
          : null}
      </ul>
    </div>
  );
}

export default App;

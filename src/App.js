import Cards from "./components/Cards";
import Header from "./components/Header";
import Champion from "./components/Champion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/champion/:id" element={<Champion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

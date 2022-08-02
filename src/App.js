import { Routes, Route } from "react-router-dom";
import { Practice } from "./Pages/Practice";
import { Rank } from "./Pages/Rank";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="rank" element={<Rank />} />
      </Routes>
    </div>
  );
}

export default App;

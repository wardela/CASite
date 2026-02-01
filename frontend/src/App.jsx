import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./mainscreen/mainscreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;

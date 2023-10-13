import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DictionaryPage from "./pages/DictionaryPage";
import Context from "./components/Context/Context";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

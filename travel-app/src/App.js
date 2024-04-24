import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../src/assets/css/footer.css";
import { Link, useLocation } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="/*" element={<UserPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

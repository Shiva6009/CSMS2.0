import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import Dashboard from "./Components/DashboardPage/Dashboard";
import SidePanelInDashboard from "./Components/SidePanelInDashboard/SidePanelInDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<SidePanelInDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

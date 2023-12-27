import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContext from "./Context/DashboardContext";
import Edit from "./DashboardComponents/Edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="Wrapper" className="Wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route
              path="/Dashboard"
              element={
                <DashboardContext>
                  <Sidebar /> <Dashboard />
                </DashboardContext>
              }
            />
            <Route
              path="/Edit/:id"
              element={
                <DashboardContext>
                  <Sidebar />
                  <Edit />
                </DashboardContext>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

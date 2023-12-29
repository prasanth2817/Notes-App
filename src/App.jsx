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
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <DashboardContext>
                  <Dashboard />
                </DashboardContext>
              }
            />
            <Route
              path="/Dashboard"
              element={
                <DashboardContext>
                  <Dashboard />
                </DashboardContext>
              }
            />
            <Route
              path="/Edit/:id"
              element={
                <DashboardContext>
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

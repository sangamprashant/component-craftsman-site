import React from "react";
import "./App.css";
import {
  ComponentDashboard,
  Home,
  Installation,
  Navbar,
  NotFound,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "component-craftsman/css";
import { AppContext } from "./AppProvider";

function App() {
  const [isDark, setIsDark] = React.useState(
    localStorage.getItem("mode") === "dark"
  );

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };

  React.useEffect(() => {
    document.body.className = isDark ? "body-night" : "body";
  }, [isDark]);

  return (
    <AppContext.Provider value={{ isDark, toggleDarkMode }}>
      <BrowserRouter>
        <div>
          <Navbar />
          <div style={{ paddingTop: "80px" }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/installation" element={<Installation />} />
              <Route exact path="/component" element={<ComponentDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

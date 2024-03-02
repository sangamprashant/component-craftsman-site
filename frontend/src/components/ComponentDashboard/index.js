import React from "react";
import "./ComponentDashboard.css";
import Footer from "../Footer";
import Left from "./Left";
import ComponentRender from "./ComponentRender";
import Message from "./Message";
import { useLocation } from "react-router-dom";
import { MyIcons_Array } from "./Icons";

function ComponentDashboard() {
  const [query, setQuery] = React.useState("");
  const location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const queryParams = new URLSearchParams(window.location.search);
    const queryString = queryParams.get("query");
    setQuery(queryString);
    window.scrollTo(0, 0);
  }, [window.location.search, location]);

  const filteredIcons = MyIcons_Array.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <div className="task-manager nigt">
        <div className="left-bar">
          <Left />
        </div>
        <div className="page-content">
          <div className="tasks-wrapper">
            <ComponentRender query={query} />
            <Footer />
          </div>
        </div>
        <div className="right-bar">
          <div className=" position-fixed w-full search-input-control">
            <input
              className="form-control p-2"
              placeholder="Search icons.."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="right-content">
            <Message MyIcons_Array={filteredIcons} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentDashboard;

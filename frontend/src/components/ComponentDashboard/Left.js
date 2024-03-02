import React from "react";
import { Link } from "react-router-dom";

const listItems = [
  {
    heading: "",
    data: [
      {
        path: "/component",
        title: "component overview",
      },
    ],
  },
  {
    heading: "Buttons",
    data: [
      {
        path: "/component?query=basicbutton",
        title: "Basic button",
      },
      {
        path: "/component?query=buttons",
        title: "Buttons",
      },
      {
        path: "/component?query=funbutton",
        title: "Fun button",
      },
      {
        path: "/component?query=iconbutton",
        title: "Icon button",
      },
    ],
  },
  {
    heading: "Loading",
    data: [
      {
        path: "/component?query=loading",
        title: "Loading",
      },
    ],
  },
  {
    heading: "Page",
    data: [{ path: "/component?query=page404", title: "Page 404" }],
  },
];

function Left() {
  return (
    <div className="left-content">
      <ul className="action-list">
        {listItems.map((data, index) => (
          <>
            {data.heading && (
              <p
                key={index}
                className=" text-muted px-3"
                style={{ marginTop: "20px", padding: 0 }}
              >
                {data.heading}
              </p>
            )}
            {data.data.map((item, ij) => (
              <Link
                className={`item ${
                  window.location.pathname + window.location.search ===
                  item.path
                    ? "active"
                    : ""
                }`}
                key={ij + index}
                to={item.path}
              >
                <span>{item.title}</span>
              </Link>
            ))}
          </>
        ))}
      </ul>
    </div>
  );
}

export default Left;

import React from "react";
import Rendering from "./Rendering/Rendering";
import { CodeData } from "./Rendering/RenderingData";
import { Icons } from "../../icons";
import RenderingCode from "./Rendering/RenderingCode";

function ComponentRender({ query }) {
  const [isFound, setIsFound] = React.useState(false);
  const info = CodeData[query] || { title: "No title found", data: [] };

  React.useEffect(() => {
    setIsFound(CodeData[query] ? true : false);
    window.scrollTo(0, 0);
  }, [query]);

  return (
    <>
      {isFound ? (
        <>
          <h2>{info.title}</h2>
          <div className="row">
            {info.data.map((data, index) => (
              <RenderingCode data={data} key={index} />
            ))}
          </div>
          {info.details && (
            <table className="table table- table-responsive-lg mt-4 rounded bg-transparent table-cell">
              <thead>
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Default</th>
                  <th className="p-3">Control</th>
                </tr>
              </thead>
              <tbody>
                {info.details.map((data, index) => (
                  <tr>
                    <td className="p-3">{data.name}</td>
                    <td className="p-3">
                      {data.description} <br /> {data.description_render}
                    </td>
                    <td className="p-3">{data.default}</td>
                    <td className="p-3">{data.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      ) : (
        <Rendering />
      )}
    </>
  );
}

export default ComponentRender;

import React, { useRef } from "react";
import "./Installation.css";
import { notification } from "antd";
import { SunIcon } from "component-craftsman/icon"
import Footer from "../Footer";
import { Icons, MyIcons } from "../../icons";
import { AppContext } from "../../AppProvider";

function Table({ title, rows }) {
  const codeRef = useRef(null);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyCodeToClipboard = (data) => {
    if (codeRef.current) {
      codeRef.current.value = data;
      codeRef.current.select();
      document.execCommand("copy");
      openNotification("topRight", data);
    }
  };

  const openNotification = (placement, data) => {
    notification.info({
      message: `Copied to clipboard`,
      description: (
        <div>
          <p>The following content has been copied to the clipboard:</p>
          <code>{data}</code>
        </div>
      ),
      placement,
    });
  };

  return (
    <table className="table-code">
      <tbody>
        <tr>
          <th className="th-code">{title}</th>
        </tr>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="td-code">
              <div className="td-code-block">
                {row.content}
                <button onClick={() => copyCodeToClipboard(row.content)} className="text-white">
                  {MyIcons.CopyContent}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <textarea
        ref={codeRef}
        style={{ position: "absolute", left: "-9999px" }}
      />
    </table>
  );
}

function Installation() {
  const { isDark } = React.useContext(AppContext);
  const npmInstallationRows = [
    {
      content: "npm install component-craftsman",
    },
  ];

  const yarnInstallationRows = [
    {
      content: "yarn add component-craftsman",
    },
  ];

  const cssImportRows = [
    {
      content: 'import "component-craftsman/css";',
    },
  ];

  const iconUsageRows = [
    {
      content: "import { SunIcon } from component-craftsman/icon", 
    },
  ];

  return (
    <>
      <div className="installation">
        <div className={`installation-container ${isDark ? "night" : ""}`}>
          <h1 className={`default-installation ${isDark ? "night" : ""}`}>
            Installation
          </h1>
          <p className={`install-content ${isDark ? "night" : ""}`}>
            Install Component Craftsman, the world's most popular React UI
            framework.
          </p>

          <div>
            <h2 className={`sub-title ${isDark ? "night" : ""}`}>
              Default installation
            </h2>
            <p className={`install-content ${isDark ? "night" : ""}`}>
              Run one of the following commands to add Component Craftsman to
              your project:
            </p>
            <Table title="npm installation" rows={npmInstallationRows} />
            <Table title="yarn installation" rows={yarnInstallationRows} />
          </div>

          <div>
            <h2 className={`sub-title ${isDark ? "night" : ""}`}>To use CSS</h2>
            <p className={`install-content ${isDark ? "night" : ""}`}>
              Add the following line to your project's main CSS file:
            </p>
            <Table title="CSS import" rows={cssImportRows} />
          </div>

          <div>
            <h2 className={`sub-title ${isDark ? "night" : ""}`}><SunIcon/> Icon usage</h2>
            <p className={`install-content ${isDark ? "night" : ""}`}>
              Use the following code snippets to include icons in your React
              components: 
            </p>
            <Table title="Icon usage" rows={iconUsageRows} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Installation;

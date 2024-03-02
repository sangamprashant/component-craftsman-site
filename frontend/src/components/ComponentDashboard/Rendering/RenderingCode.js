import React from "react";
import { Icons, MyIcons } from "../../../icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkCold,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { notification } from "antd";
import { AppContext } from "../../../AppProvider";

function RenderingCode({ data }) {
  const [showCode, setShowCode] = React.useState(false);
  const { isDark } = React.useContext(AppContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShowCode = () => {
    setShowCode((prev) => !prev);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data.code);
    openNotification("topRight", data.code);
  };

  const openNotification = (placement, data) => {
    notification.info({
      message: `The code snippet has been copied to clipboard.`,
      description: "",
      placement,
    });
  };

  return (
    <div className={`col-md-${data.full ? "12" : "6"} my-2`}>
      <div className="p-3 card bg-body-tertiary" style={{ background: "" }}>
        <p>{data.tag}</p>
        <div>{data.preview}</div>
        <hr />
        <div className="d-flex justify-content-end gap-3">
          {showCode && (
            <button onClick={handleCopy}>{MyIcons.CopyContent}</button>
          )}
          <button onClick={handleShowCode}>
            {showCode ? MyIcons.CodeOffIcon : MyIcons.CodeIcon}
          </button>
        </div>
        {showCode && (
          <SyntaxHighlighter
            language="jsx"
            style={isDark ? coldarkDark : coldarkCold}
          >
            {data.code}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
}

export default RenderingCode;

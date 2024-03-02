import React, { useEffect, useState } from "react";
import { Button, Modal, notification } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

function Message({ MyIcons_Array }) {
  const bgColors = ["yellow", "blue", "red", "green"];
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [randomBgColorIndex, setRandomBgColorIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    setRandomBgColorIndex(randomIndex);
  }, []);

  const handleModelOpen = (data) => {
    setModal2Open(true);
    setSelectedIcon(data);
  };

  const handleCopy = (data) => {
    navigator.clipboard.writeText(data);
    openNotification("topRight", data);
  };

  const openNotification = (placement, data) => {
    notification.info({
      message: `The code snippet has been copied to clipboard.`,
      description: <code>{data}</code>,
      placement,
    });
  };

  return (
    <>
      <div className={`task-box ${bgColors[randomBgColorIndex]}`}>
        <div className="members">
          {MyIcons_Array.map((data, index) => (
            <div key={index} onClick={() => handleModelOpen(data)}>
              {data.preview}
            </div>
          ))}
          {MyIcons_Array.length === 0 && (
            <>
              <h5>No data found..</h5>
              <sub className="mb-3">Please search different icon</sub>
            </>
          )}
        </div>
      </div>
      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        {selectedIcon && (
          <>
            <h2>{selectedIcon.name}</h2>
            <SyntaxHighlighter
              language="jsx"
              style={coldarkCold}
              className="cursor-pointer"
              onClick={() =>
                handleCopy(
                  `import { ${selectedIcon.name} } from "component-craftsman/icon"`
                )
              }
            >
              {`import { ${selectedIcon.name} } from "component-craftsman/icon"`}
            </SyntaxHighlighter>
            <div className="model-open-icon">{selectedIcon.preview}</div>
          </>
        )}
      </Modal>
    </>
  );
}

export default Message;

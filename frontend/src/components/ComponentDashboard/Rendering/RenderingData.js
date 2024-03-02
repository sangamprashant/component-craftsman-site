import {
  BasicButton,
  FunButton,
  Button,
  IconButton,
  Loading,
  Page404,
} from "component-craftsman";
import { MyIcons } from "../../../icons";

const basicButton1 = `import React from "react";
import { BasicButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <BasicButton label="Basic Button" size="small" />
      <BasicButton label="Basic Button" size="medium" />
      <BasicButton label="Basic Button" size="large" />
    </>
  );
};

export default App;`;

const basicButton2 = `import React from "react";
import { BasicButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <BasicButton primary label="Basic Button" size="small" />
      <BasicButton primary label="Basic Button" size="medium" />
      <BasicButton primary label="Basic Button" size="large" />
    </>
  );
};

export default App;
`;

const Button_data = {
  one: `import React from "react";
import { Button } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Button label="Button" size="small" />
      <Button  label="Button" size="small" primary/>
    </>
  );
};

export default App;`,
  two: `import React from "react";
import { Button } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Button label="Button" size="small" radius={2} />
      <Button label="Button" size="small" radius={2} primary/>
    </>
  );
};

export default App;`,
  three: `import React from "react";
import { Button } from "component-craftsman";
import {RecycleBinIcon} from "component-craftsman/icon"
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Button label="Is working" size="small" radius={2} icon={<RecycleBinIcon/>} />
      <Button label="Is working" size="small" primary radius={2} icon={<RecycleBinIcon/>} />
    </>
  );
};

export default App;`,
  four: `import React from "react";
import { Button } from "component-craftsman";
import {RecycleBinIcon} from "component-craftsman/icon"
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Button label="Is working" size="small" icon={<RecycleBinIcon/>} />
      <Button label="Is working" size="small" primary icon={<RecycleBinIcon/>} />
    </>
  );
};
 
export default App;`,
};

const FunButton_data = {
  one: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Button 1" btn={1} />
    </>
  );
};

export default App;`,
  two: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Button 2" btn={2} />
    </>
  );
};

export default App;`,
  three: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Button 3" btn={3} />
    </>
  );
};

export default App;`,
  four: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Button 4" btn={4} />
    </>
  );
};

export default App;`,
  five: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Button 5" btn={5} />
    </>
  );
};

export default App;`,
  six: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Button 6" btn={6} />
    </>
  );
};

export default App;`,
  seven: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Fill In" btn={7} />
    </>
  );
};

export default App;`,
  eight: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Pulse" btn={8} />
    </>
  );
};

export default App;`,
  night: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Close" btn={9} />
    </>
  );
};

export default App;`,
  ten: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Raise" btn={10} />
    </>
  );
};

export default App;`,
  elaven: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Fill Up" btn={11} />
    </>
  );
};

export default App;`,
  twelve: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Slide" btn={12} />
    </>
  );
};

export default App;`,
  thirteen: `import React from "react";
import { FunButton } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <FunButton label="Offset" btn={13} />
    </>
  );
};

export default App;`,
};

const IconButton_data = {
  one: `import React from "react";
import { IconButton } from "component-craftsman";
import { PeopleIcon } from "component-craftsman/icon";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <IconButton effect="aeneas" icon={<PeopleIcon />} bg={1} />
      <IconButton effect="aeneas" icon={<PeopleIcon />} bg={2} />
      <IconButton effect="aeneas" icon={<PeopleIcon />} bg={3} />
      <IconButton effect="aeneas" icon={<PeopleIcon />} bg={4} />
      <IconButton effect="aeneas" icon={<PeopleIcon />} bg={5} />
      <IconButton effect="aeneas" icon={<PeopleIcon />} bg={6} />
      <IconButton effect="aeneas" icon={<PeopleIcon />} bg={7} />
      <IconButton effect="aeneas" icon={<PeopleIcon />} bg={8} />
    </>
  );
};

export default App;`,
  two: `import React from "react";
import { IconButton } from "component-craftsman";
import { PeopleIcon } from "component-craftsman/icon";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <IconButton effect="jaques" icon={<PeopleIcon />} bg={1} />
      <IconButton effect="jaques" icon={<PeopleIcon />} bg={2} />
      <IconButton effect="jaques" icon={<PeopleIcon />} bg={3} />
      <IconButton effect="jaques" icon={<PeopleIcon />} bg={4} />
      <IconButton effect="jaques" icon={<PeopleIcon />} bg={5} />
      <IconButton effect="jaques" icon={<PeopleIcon />} bg={6} />
      <IconButton effect="jaques" icon={<PeopleIcon />} bg={7} />
      <IconButton effect="jaques" icon={<PeopleIcon />} bg={8} />
    </>
  );
};

export default App;`,
  three: `import React from "react";
import { IconButton } from "component-craftsman";
import { PeopleIcon } from "component-craftsman/icon";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <IconButton effect="egeon" icon={<PeopleIcon />} bg={1} />
      <IconButton effect="egeon" icon={<PeopleIcon />} bg={2} />
      <IconButton effect="egeon" icon={<PeopleIcon />} bg={3} />
      <IconButton effect="egeon" icon={<PeopleIcon />} bg={4} />
      <IconButton effect="egeon" icon={<PeopleIcon />} bg={5} />
      <IconButton effect="egeon" icon={<PeopleIcon />} bg={6} />
      <IconButton effect="egeon" icon={<PeopleIcon />} bg={7} />
      <IconButton effect="egeon" icon={<PeopleIcon />} bg={8} />
    </>
  );
};

export default App;`,
  four: `import React from "react";
import { IconButton } from "component-craftsman";
import { PeopleIcon } from "component-craftsman/icon";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <IconButton effect="claudio" icon={<PeopleIcon />} bg={1} />
      <IconButton effect="claudio" icon={<PeopleIcon />} bg={2} />
      <IconButton effect="claudio" icon={<PeopleIcon />} bg={3} />
      <IconButton effect="claudio" icon={<PeopleIcon />} bg={4} />
      <IconButton effect="claudio" icon={<PeopleIcon />} bg={5} />
      <IconButton effect="claudio" icon={<PeopleIcon />} bg={6} />
      <IconButton effect="claudio" icon={<PeopleIcon />} bg={7} />
      <IconButton effect="claudio" icon={<PeopleIcon />} bg={8} />
    </>
  );
};

export default App;`,
  five: `import React from "react";
import { IconButton } from "component-craftsman";
import { PeopleIcon } from "component-craftsman/icon";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <IconButton effect="laertes" icon={<PeopleIcon />} bg={1} />
      <IconButton effect="laertes" icon={<PeopleIcon />} bg={2} />
      <IconButton effect="laertes" icon={<PeopleIcon />} bg={3} />
      <IconButton effect="laertes" icon={<PeopleIcon />} bg={4} />
      <IconButton effect="laertes" icon={<PeopleIcon />} bg={5} />
      <IconButton effect="laertes" icon={<PeopleIcon />} bg={6} />
      <IconButton effect="laertes" icon={<PeopleIcon />} bg={7} />
      <IconButton effect="laertes" icon={<PeopleIcon />} bg={8} />
    </>
  );
};

export default App;`,
};

const Loading_data = {
  one: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={1} />
      <Loading loading={1} />
    </>
  );
};

export default App;`,
  two: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={2} />
      <Loading loading={2} />
    </>
  );
};

export default App;`,
  three: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={3} />
      <Loading loading={3} />
    </>
  );
};

export default App;`,
  four: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={4} />
      <Loading loading={4} />
    </>
  );
};

export default App;`,
  five: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={5} />
      <Loading loading={5} />
    </>
  );
};

export default App;`,
  six: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading loading={6} />
    </>
  );
};

export default App;`,
  seven: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={7} />
      <Loading loading={7} />
    </>
  );
};

export default App;`,
  eight: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={8} />
      <Loading loading={8} />
    </>
  );
};

export default App;`,
  nine: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={9} />
      <Loading loading={9} />
    </>
  );
};

export default App;`,
  ten: `import React from "react";
import { Loading } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Loading label="loading" loading={10} />
      <Loading loading={10} />
    </>
  );
};

export default App;`,
};

const Page404_data = {
  one: `import React from "react";
import { Page404 } from "component-craftsman";
import "component-craftsman/css";

const App = () => {
  return (
    <>
      <Page404 />
    </>
  );
};

export default App;`,
};

const CodeData = {
  basicbutton: {
    title: "Basic Button",
    data: [
      {
        preview: (
          <div className="d-flex gap-2 flex-wrap">
            <div>
              <BasicButton label="Basic Button" size="small" />
            </div>
            <div>
              <BasicButton label="Basic Button" size="medium" />
            </div>
            <div>
              <BasicButton label="Basic Button" size="large" />
            </div>
          </div>
        ),
        code: basicButton1,
      },
      {
        preview: (
          <div className="d-flex gap-2 flex-wrap">
            <div>
              <BasicButton primary label="Basic Button" size="small" />
            </div>
            <div>
              <BasicButton primary label="Basic Button" size="medium" />
            </div>
            <div>
              <BasicButton primary label="Basic Button" size="large" />
            </div>
          </div>
        ),
        code: basicButton2,
      },
    ],
    details: [
      {
        name: "primary",
        description: `Is this the principal call to action on the page?`,
        description_render: <code>bool</code>,
        default: <code>false</code>,
        control: '"true" "false"',
      },
      {
        name: "label",
        description: `Button contents`,
        description_render: <code>string</code>,
        default: <code>-</code>,
        control: "-",
      },
      {
        name: "backgroundColor",
        description: `What background color to use`,
        description_render: <code>string</code>,
        default: <code>-</code>,
        control: "-",
      },
      {
        name: "size",
        description: `How large should the button be?`,
        description_render: <code>"small" "medium" "large"</code>,
        default: <code>medium</code>,
        control: '"small" "medium" "large"',
      },
      {
        name: "onClick",
        description: `Optional click handler`,
        description_render: <code>func</code>,
        default: <code>-</code>,
        control: "-",
      },
    ],
  },
  buttons: {
    title: "Button",
    data: [
      {
        preview: (
          <div className="d-flex gap-2 flex-wrap">
            <Button label="Button" size="small" />
            <Button label="Button" size="small" primary />
          </div>
        ),
        code: Button_data.one,
      },
      {
        preview: (
          <div className="d-flex gap-2 flex-wrap">
            <Button label="Button" size="small" radius={2} />
            <Button label="Button" size="small" radius={2} primary />
          </div>
        ),
        code: Button_data.two,
      },
      {
        preview: (
          <div className="d-flex gap-2 flex-wrap">
            <Button
              label="Is working"
              size="small"
              radius={2}
              icon={MyIcons.RecycleBinIcon}
            />
            <Button
              label="Is working"
              size="small"
              radius={2}
              primary
              icon={MyIcons.RecycleBinIcon}
            />
          </div>
        ),
        code: Button_data.three,
      },
      {
        preview: (
          <div className="d-flex gap-2 flex-wrap">
            <Button
              label="Is working"
              size="small"
              icon={MyIcons.RecycleBinIcon}
            />
            <Button
              label="Is working"
              size="small"
              primary
              icon={MyIcons.RecycleBinIcon}
            />
          </div>
        ),
        code: Button_data.four,
      },
    ],
    details: [
      {
        name: "icon",
        description: `Button contents`,
        description_render: <code>elementType</code>,
        default: <code>-</code>,
        control: "-",
      },
      {
        name: "primary",
        description: `Is this the principal call to action on the page?`,
        description_render: <code>bool</code>,
        default: <code>false</code>,
        control: '"true" "false"',
      },
      {
        name: "label",
        description: `Button contents`,
        description_render: <code>string</code>,
        default: <code>-</code>,
        control: "-",
      },
      {
        name: "backgroundColor",
        description: `What background color to use`,
        description_render: <code>string</code>,
        default: <code>-</code>,
        control: "-",
      },
      {
        name: "size",
        description: `How large should the button be?`,
        description_render: <code>"small" "medium" "large"</code>,
        default: <code>medium</code>,
        control: '"small" "medium" "large"',
      },
      {
        name: "onClick",
        description: `Optional click handler`,
        description_render: <code>func</code>,
        default: <code>-</code>,
        control: "-",
      },
      {
        name: "size",
        description: `How large should the button be?`,
        description_render: <code>"1" "2" "3" "4" "5"</code>,
        default: <code>1</code>,
        control: '"1" "2" "3" "4" "5"',
      },
    ],
  },
  funbutton: {
    title: "Fun Button",
    data: [
      {
        preview: <FunButton label="Button 1" btn={1} />,
        code: FunButton_data.one,
      },
      {
        preview: <FunButton label="Button 2" btn={2} />,
        code: FunButton_data.two,
      },
      {
        preview: <FunButton label="Button 3" btn={3} />,
        code: FunButton_data.three,
      },
      {
        preview: <FunButton label="Button 4" btn={4} />,
        code: FunButton_data.four,
      },
      {
        preview: <FunButton label="Button 5" btn={5} />,
        code: FunButton_data.five,
      },
      {
        preview: <FunButton label="Button 6" btn={6} />,
        code: FunButton_data.six,
      },
      //
      {
        preview: <FunButton label="Fill In" btn={7} />,
        code: FunButton_data.seven,
      },
      {
        preview: <FunButton label="Pulse" btn={8} />,
        code: FunButton_data.eight,
      },
      {
        preview: <FunButton label="Close" btn={9} />,
        code: FunButton_data.night,
      },
      {
        preview: <FunButton label="Raise" btn={10} />,
        code: FunButton_data.ten,
      },
      {
        preview: <FunButton label="Fill Up" btn={11} />,
        code: FunButton_data.elaven,
      },
      {
        preview: <FunButton label="Slide" btn={12} />,
        code: FunButton_data.twelve,
      },
      {
        preview: <FunButton label="Offset" btn={13} />,
        code: FunButton_data.thirteen,
      },
    ],
    details: [
      {
        name: "label",
        description: `Button contents`,
        description_render: <code>string</code>,
        default: <code>-</code>,
        control: "-",
      },
      {
        name: "onClick",
        description: `Optional click handler`,
        description_render: <code>func</code>,
        default: <code>-</code>,
        control: "-",
      },
      {
        name: "btn",
        description: `Button type`,
        description_render: (
          <code>
            "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" ,
            "12" , "13"
          </code>
        ),
        default: <code>1</code>,
        control:
          '"1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13"',
      },
    ],
  },
  iconbutton: {
    title: "Icon Button",
    data: [
      {
        full: true,
        tag: "Aeneas",
        preview: (
          <div className="d-flex flex-wrap justify-content-around">
            <IconButton effect="aeneas" icon={MyIcons.PeopleIcon} bg={1} />
            <IconButton effect="aeneas" icon={MyIcons.PeopleIcon} bg={2} />
            <IconButton effect="aeneas" icon={MyIcons.PeopleIcon} bg={3} />
            <IconButton effect="aeneas" icon={MyIcons.PeopleIcon} bg={4} />
            <IconButton effect="aeneas" icon={MyIcons.PeopleIcon} bg={5} />
            <IconButton effect="aeneas" icon={MyIcons.PeopleIcon} bg={6} />
            <IconButton effect="aeneas" icon={MyIcons.PeopleIcon} bg={7} />
            <IconButton effect="aeneas" icon={MyIcons.PeopleIcon} bg={8} />
          </div>
        ),
        code: IconButton_data.one,
      },
      {
        full: true,
        tag: "Jaques",
        preview: (
          <div className="d-flex flex-wrap justify-content-around">
            <IconButton effect="jaques" icon={MyIcons.PeopleIcon} bg={1} />
            <IconButton effect="jaques" icon={MyIcons.PeopleIcon} bg={2} />
            <IconButton effect="jaques" icon={MyIcons.PeopleIcon} bg={3} />
            <IconButton effect="jaques" icon={MyIcons.PeopleIcon} bg={4} />
            <IconButton effect="jaques" icon={MyIcons.PeopleIcon} bg={5} />
            <IconButton effect="jaques" icon={MyIcons.PeopleIcon} bg={6} />
            <IconButton effect="jaques" icon={MyIcons.PeopleIcon} bg={7} />
            <IconButton effect="jaques" icon={MyIcons.PeopleIcon} bg={8} />
          </div>
        ),
        code: IconButton_data.two,
      },
      {
        full: true,
        tag: "Egeon",
        preview: (
          <div className="d-flex flex-wrap justify-content-around">
            <IconButton effect="egeon" icon={MyIcons.PeopleIcon} bg={1} />
            <IconButton effect="egeon" icon={MyIcons.PeopleIcon} bg={2} />
            <IconButton effect="egeon" icon={MyIcons.PeopleIcon} bg={3} />
            <IconButton effect="egeon" icon={MyIcons.PeopleIcon} bg={4} />
            <IconButton effect="egeon" icon={MyIcons.PeopleIcon} bg={5} />
            <IconButton effect="egeon" icon={MyIcons.PeopleIcon} bg={6} />
            <IconButton effect="egeon" icon={MyIcons.PeopleIcon} bg={7} />
            <IconButton effect="egeon" icon={MyIcons.PeopleIcon} bg={8} />
          </div>
        ),
        code: IconButton_data.three,
      },
      {
        full: true,
        tag: "Claudio",
        preview: (
          <div className="d-flex flex-wrap justify-content-around">
            <IconButton effect="claudio" icon={MyIcons.PeopleIcon} bg={1} />
            <IconButton effect="claudio" icon={MyIcons.PeopleIcon} bg={2} />
            <IconButton effect="claudio" icon={MyIcons.PeopleIcon} bg={3} />
            <IconButton effect="claudio" icon={MyIcons.PeopleIcon} bg={4} />
            <IconButton effect="claudio" icon={MyIcons.PeopleIcon} bg={5} />
            <IconButton effect="claudio" icon={MyIcons.PeopleIcon} bg={6} />
            <IconButton effect="claudio" icon={MyIcons.PeopleIcon} bg={7} />
            <IconButton effect="claudio" icon={MyIcons.PeopleIcon} bg={8} />
          </div>
        ),
        code: IconButton_data.four,
      },
      {
        full: true,
        tag: "Laertes",
        preview: (
          <div className="d-flex flex-wrap justify-content-around">
            <IconButton effect="laertes" icon={MyIcons.PeopleIcon} bg={1} />
            <IconButton effect="laertes" icon={MyIcons.PeopleIcon} bg={2} />
            <IconButton effect="laertes" icon={MyIcons.PeopleIcon} bg={3} />
            <IconButton effect="laertes" icon={MyIcons.PeopleIcon} bg={4} />
            <IconButton effect="laertes" icon={MyIcons.PeopleIcon} bg={5} />
            <IconButton effect="laertes" icon={MyIcons.PeopleIcon} bg={6} />
            <IconButton effect="laertes" icon={MyIcons.PeopleIcon} bg={7} />
            <IconButton effect="laertes" icon={MyIcons.PeopleIcon} bg={8} />
          </div>
        ),
        code: IconButton_data.five,
      },
    ],
    details: [
      {
        name: "icon",
        description: `Button contents`,
        description_render: <code>element</code>,
        default: <code>-</code>,
        control: "-",
      },
      
      {
        name: "bg",
        description: `Buttons background color`,
        description_render: (
          <code>"1" , "2" , "3" , "4" , "5" , "6" , "7" , "8"</code>
        ),
        default: <code>1</code>,
        control: '"1" , "2" , "3" , "4" , "5" , "6" , "7" , "8"',
      },
      {
        name: "effect",
        description: `Buttons background color`,
        description_render: (
          <code>"aeneas" "jaques" "egeon" "claudio" "laertes"</code>
        ),
        default: <code>aeneas</code>,
        control: '"aeneas" "jaques" "egeon" "claudio" "laertes"',
      },
    ],
  },
  loading: {
    title: "Loading",
    data: [
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={1} />
            <Loading loading={1} />
          </div>
        ),
        code: Loading_data.one,
      },
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={2} />
            <Loading loading={2} />
          </div>
        ),
        code: Loading_data.two,
      },
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={3} />
            <Loading loading={3} />
          </div>
        ),
        code: Loading_data.three,
      },
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={4} />
            <Loading loading={4} />
          </div>
        ),
        code: Loading_data.four,
      },
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={5} />
            <Loading loading={5} />
          </div>
        ),
        code: Loading_data.five,
      },
      {
        preview: (
          <div className="d-flex justify-content-center">
            <Loading loading={6} />
          </div>
        ),
        code: Loading_data.six,
      },
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={7} />
            <Loading loading={7} />
          </div>
        ),
        code: Loading_data.seven,
      },
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={8} />
            <Loading loading={8} />
          </div>
        ),
        code: Loading_data.eight,
      },
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={9} />
            <Loading loading={9} />
          </div>
        ),
        code: Loading_data.nine,
      },
      {
        preview: (
          <div className="d-flex justify-content-evenly">
            <Loading label="loading" loading={10} />
            <Loading loading={10} />
          </div>
        ),
        code: Loading_data.ten,
      },
    ],
    details: [
      {
        name: "label",
        description: `Label to display below the animation`,
        description_render: <code>element</code>,
        default: <code>-</code>,
        control: "-",
      },
      
      {
        name: "loading",
        description: `Index of the loading indicator to display`,
        description_render: (
          <code>"1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10"</code>
        ),
        default: <code>1</code>,
        control: '"1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10"',
      },
    ],
  },
  page404: {
    title: "Page 404",
    data: [
      {
        full: true,
        preview: <Page404 />,
        code: Page404_data.one,
      },
    ],
  },
};

export { CodeData };

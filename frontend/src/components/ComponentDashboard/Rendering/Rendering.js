import React from "react";
import {
  FunButton,
  Button,
  IconButton,
  Loading,
  Timeline,
  Features,
} from "component-craftsman";
import { Icons, MyIcons } from "../../../icons";
import { TimeLineData, featureData } from "../../data";
import { AppContext } from "../../../AppProvider";
import HomeIconButton from "./HomeIconButton";

function Rendering() {
  const { isDark } = React.useContext(AppContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={` ${isDark ? "text-white" : ""} `}>
      <h2>Components Overview</h2>
      <p>
        <code>component-craftsman</code> provides a wide range of UI components
        to enhance your web development. These components are designed to
        improve user experience and can be easily integrated into your projects.
        In addition to the built-in components, we also recommend leveraging
        some excellent
        <span className="text-primary"> Third-Party Libraries</span> for further
        functionality.
      </p>
      <br />
      <h4>Buttons</h4>
      <div className="d-flex gap-2">
        <Button label="Button" size="small" icon={MyIcons.PeopleIcon} />
        <Button label="Button" size="small" radius={2} />
        <Button primary label="Button" />
        <Button primary size="large" icon={MyIcons.PeopleIcon} />
        <Button primary label="Button" size="large" icon={MyIcons.PeopleIcon} radius={3} />
      </div>
      <hr />
      <h4>Fun Button</h4>
      <div className="d-flex flex-wrap">
        <FunButton label="Button" btn={1} />
        <FunButton label="Button" btn={2} />
        <FunButton label="Button" btn={3} />
        <FunButton label="Button" btn={4} />
        <FunButton label="Button" btn={5} />
        <FunButton label="Button" btn={6} />
        <FunButton label="Fill In" btn={7} />
        <FunButton label="Pulse" btn={8} />
        <FunButton label="Close" btn={9} />
        <FunButton label="Raise" btn={10} />
        <FunButton label="Fill Up" btn={11} />
        <FunButton label="Slide" btn={12} />
        <FunButton label="Offset" btn={13} />
      </div>
      <hr />
      <h4>Icon Button</h4>
      <>
        <HomeIconButton name="aeneas" />
        <HomeIconButton name="jaques" />
        <HomeIconButton name="egeon" />
        <HomeIconButton name="claudio" />
        <HomeIconButton name="laertes" />
      </>

      <hr />
      <h4>Loading..</h4>
      <div className={`p-2 shadow`}>
        <div className="d-flex gap-4 flex-wrap">
          <Loading label="loading" loading={1} />
          <Loading label="loading" loading={2} />
          <Loading label="loading" loading={3} />
          <Loading label="loading" loading={4} />
          <Loading label="loading" loading={5} />
          <Loading label="loading" loading={6} />
          <Loading label="loading" loading={7} />
          <Loading label="loading" loading={8} />
          <Loading label="loading" loading={9} />
          <Loading label="loading" loading={10} />
        </div>
      </div>
    </div>
  );
}

export default Rendering;

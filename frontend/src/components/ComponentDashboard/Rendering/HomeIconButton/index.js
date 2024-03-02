import React from "react";
import { IconButton } from "component-craftsman";
import { MyIcons } from "../../../../icons";

function HomeIconButton({ name }) {
  return (
    <div className="p-4 mt-2">
      <p className="text-muted text-white">{name}</p>
      <div className="d-flex justify-content-evenly flex-wrap flex-start">
        <IconButton effect={name} icon={MyIcons.GithubIcon} bg={1} />
        <IconButton effect={name} icon={MyIcons.GithubIcon} bg={2} />
        <IconButton effect={name} icon={MyIcons.GithubIcon} bg={3} />
        <IconButton effect={name} icon={MyIcons.GithubIcon} bg={4} />
        <IconButton effect={name} icon={MyIcons.GithubIcon} bg={5} />
        <IconButton effect={name} icon={MyIcons.GithubIcon} bg={6} />
        <IconButton effect={name} icon={MyIcons.GithubIcon} bg={7} />
        <IconButton effect={name} icon={MyIcons.GithubIcon} bg={8} />
      </div>
    </div>
  );
}

export default HomeIconButton;

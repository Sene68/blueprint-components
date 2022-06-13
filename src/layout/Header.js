import React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

import "./Header.scss";

function Navigation() {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup align={Alignment.CENTER} className="header">
        <NavbarHeading><AnchorButton href="/" text="Blueprint Components" minimal/></NavbarHeading>
        <NavbarDivider />
        <AnchorButton
          href="http://blueprintjs.com/docs"
          text="Docs"
          target="_blank"
          minimal
          rightIcon="share"
        />
        <AnchorButton
          href="http://github.com/palantir/blueprint"
          text="Github"
          target="_blank"
          minimal
          rightIcon="code"
        />
      </NavbarGroup>
    </Navbar>
  );
};

export default Navigation;
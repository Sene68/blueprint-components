import React, { useState } from "react";
import { Alignment, Button, Callout, Classes, H5, Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Switch } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function NavbarCore() {
    const [alignRight, setAlignRight] = useState(false);


    const CODE = 
    `
    import * as React from "react";
    import { Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
    
    function Navbar() {
        return(
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Blueprint</NavbarHeading>
                    <NavbarDivider />
                    <Button className={Classes.MINIMAL} icon="home" text="Home" />
                    <Button className={Classes.MINIMAL} icon="document" text="Files" />
                </NavbarGroup>
            </Navbar>
        );
    }

    export default Navbar;
    `;

    const handleAlignRightChange = () => {
        setAlignRight(!alignRight);
    }

    const options = (
        <>
            <H5>Props</H5>
            <Switch checked={alignRight} label="Align right" onChange={handleAlignRightChange} />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Navbar"}>
                <Example options={options}>
                    <Navbar>
                        <NavbarGroup align={alignRight ? Alignment.RIGHT : Alignment.LEFT}>
                            <NavbarHeading>Blueprint</NavbarHeading>
                            <NavbarDivider />
                            <Button className={Classes.MINIMAL} icon="home" text="Home" />
                            <Button className={Classes.MINIMAL} icon="document" text="Files" />
                        </NavbarGroup>
                    </Navbar>
                </Example>
                <br/>
                <h6 className="bp4-heading">Code </h6>
                <p>
                <CodeBlock
                    text={CODE}
                    language={"jsx"}
                    showLineNumbers={false}
                    theme={dracula}
                />
                </p>
            </Callout>
        </div>
    );
}

export default NavbarCore;
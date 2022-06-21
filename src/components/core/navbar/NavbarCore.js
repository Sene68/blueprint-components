import * as React from "react";
import { Alignment, Button, Callout, Card, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function NavbarCore() {
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

    return(
        <div className="main">
            <Callout title={"Navbar"}>
                <Card>
                    <Navbar>
                        <NavbarGroup align={Alignment.LEFT}>
                            <NavbarHeading>Blueprint</NavbarHeading>
                            <NavbarDivider />
                            <Button className={Classes.MINIMAL} icon="home" text="Home" />
                            <Button className={Classes.MINIMAL} icon="document" text="Files" />
                        </NavbarGroup>
                    </Navbar>
                </Card>
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
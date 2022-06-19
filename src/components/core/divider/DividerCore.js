import * as React from "react";
import { Button, ButtonGroup, Callout, Card, Divider } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function DividerCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Button, ButtonGroup, Divider } from "@blueprintjs/core";
    
    function Divider() {

        return(
            <ButtonGroup minimal={true}>
                <Button text="File" />
                <Button text="Edit" />
                <Divider />
                <Button text="Create" />
                <Button text="Delete" />
                <Divider />
                <Button icon="add" />
                <Button icon="remove" />
            </ButtonGroup>
        );
    }

    export default Divider;
    `;

    return(
        <div className="main">
            <Callout title={"Divider"}>
                <Card>
                    <ButtonGroup minimal={true}>
                        <Button text="File" />
                        <Button text="Edit" />
                        <Divider />
                        <Button text="Create" />
                        <Button text="Delete" />
                        <Divider />
                        <Button icon="add" />
                        <Button icon="remove" />
                    </ButtonGroup>
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

export default DividerCore;
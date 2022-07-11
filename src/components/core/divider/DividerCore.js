import React, { useState } from "react";
import { Button, ButtonGroup, Callout, Divider, H5, Switch } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function DividerCore() {
    const [vertical, setVertical] = useState(false);

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

    const handleVerticalChange = () => {
        setVertical(!vertical);
    };

    const options = (
        <>
            <H5>Example props</H5>
            <Switch checked={vertical} label="Vertical" onChange={handleVerticalChange} />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Divider"}>
                <Example options={options}>
                    <ButtonGroup minimal={true} vertical={vertical}>
                        <Button text="File" />
                        <Button text="Edit" />
                        <Divider />
                        <Button text="Create" />
                        <Button text="Delete" />
                        <Divider />
                        <Button icon="add" />
                        <Button icon="remove" />
                    </ButtonGroup>
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

export default DividerCore;
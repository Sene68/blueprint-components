import * as React from "react";
import { Callout, Card, Button, ControlGroup, HTMLSelect, InputGroup } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function ControlGroupCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Button, ControlGroup, HTMLSelect, InputGroup } from "@blueprintjs/core";
    
    function ControlGroup() {
        return(
            <ControlGroup>
                <HTMLSelect options={FILTER_OPTIONS} />
                <InputGroup placeholder="Find filters..." />
                <Button icon="arrow-right" />
            </ControlGroup>
        );
    }

    export default ControlGroup;
    `;

    const FILTER_OPTIONS = ["Filter", "Name - ascending", "Name - descending", "Price - ascending", "Price - descending"];

    return(
        <div className="main">
            <Callout title={"Control group"}>
                <Card>
                    <ControlGroup>
                        <HTMLSelect options={FILTER_OPTIONS} />
                        <InputGroup placeholder="Find filters..." />
                        <Button icon="arrow-right" />
                    </ControlGroup>
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

export default ControlGroupCore;
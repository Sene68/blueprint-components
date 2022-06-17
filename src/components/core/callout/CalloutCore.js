import * as React from "react";
import { Callout, Card, Code } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function CalloutCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Callout, Code } from "@blueprintjs/core";
    
    function Callout() {

        return(
            <Callout title={"Visually important content"}>
                The component is a simple wrapper around the CSS API that provides props for modifiers and optional
                title element. Any additional HTML props will be spread to the rendered <Code>{"<div>"}</Code>{" "}
                element.
            </Callout>
        );
    }

    export default Callout;
    `;

    return(
        <div className="main">
            <Callout title={"Callout"}>
                <Card>
                    <Callout title={"Visually important content"}>
                        The component is a simple wrapper around the CSS API that provides props for modifiers and optional
                        title element. Any additional HTML props will be spread to the rendered <Code>{"<div>"}</Code>{" "}
                        element.
                    </Callout>
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

export default CalloutCore;
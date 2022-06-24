import * as React from "react";
import { Callout, Card, ProgressBar } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function ProgressBarCore() {
    const CODE = 
    `
    import * as React from "react";
    import { ProgressBar } from "@blueprintjs/core";
    
    function ProgressBar() {
        const value = 0.7;

        return(
            <ProgressBar value={value} />
        );
    }

    export default ProgressBar;
    `;

    const value = 0.7;

    return(
        <div className="main">
            <Callout title={"Progress Bar"}>
                <Card>
                    <ProgressBar value={value} />
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

export default ProgressBarCore;
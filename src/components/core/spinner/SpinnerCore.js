import * as React from "react";
import { Callout, Card, Spinner } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function SpinnerCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Spinner } from "@blueprintjs/core";
    
    function Spinner() {
        return(
            <Spinner
                size={50}
            />
        );
    }

    export default Spinner;
    `;

    return(
        <div className="main">
            <Callout title={"Spinner"}>
                <Card>
                    <Spinner
                        size={50}
                    />
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

export default SpinnerCore;
import * as React from "react";
import { Callout, Card, Checkbox } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function CheckboxCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Checkbox } from "@blueprintjs/core";
    
    function Checkbox() {
        return(
            <Checkbox label="Gilad Gray" defaultIndeterminate={true} />
            <Checkbox label="Jason Killian" />
            <Checkbox label="Antoine Llorca" />
        );
    }

    export default Checkbox;
    `;

    return(
        <div className="main">
            <Callout title={"Checkbox"}>
                <Card>
                    <Checkbox label="Gilad Gray" defaultIndeterminate={true} />
                    <Checkbox label="Jason Killian" />
                    <Checkbox label="Antoine Llorca" />
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

export default CheckboxCore;
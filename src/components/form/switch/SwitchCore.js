import * as React from "react";
import { Callout, Card, Switch } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function SwitchCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Switch } from "@blueprintjs/core";
    
    function Switch() {
        return(
            <Switch labelElement={<strong>Enabled</strong>} />
            <Switch labelElement={<em>Public</em>} />
            <Switch labelElement={<u>Cooperative</u>} defaultChecked={true} />
            <Switch labelElement={"Containing Text"} innerLabelChecked="on" innerLabel="off" />
        );
    }

    export default Switch;
    `;


    return(
        <div className="main">
            <Callout title={"Switch"}>
                <Card>
                    <Switch labelElement={<strong>Enabled</strong>} />
                    <Switch labelElement={<em>Public</em>} />
                    <Switch labelElement={<u>Cooperative</u>} defaultChecked={true} />
                    <Switch labelElement={"Containing Text"} innerLabelChecked="on" innerLabel="off" />
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

export default SwitchCore;
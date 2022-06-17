import * as React from "react";
import { Callout, Card, ButtonGroup, AnchorButton, Button } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function ButtonGroupCore() {
    const CODE_DEFAULT = 
    `
    import * as React from "react";
    import { ButtonGroup, AnchorButton, Button } from "@blueprintjs/core";
    
    function ButtonGroup() {

        return(
            <ButtonGroup style={{ minWidth: 200 }}>
                <Button icon="database" text={"Queries"} />
                <Button icon="function" text={"Functions"} />
                <AnchorButton
                    icon="cog"
                    rightIcon="settings"
                    text={"Options"}
                />
            </ButtonGroup>
        );
    }

    export default ButtonGroup;
    `;

    return(
        <div className="main">
            <Callout title={"Button Group"}>
                <h6 className="bp4-heading">Default </h6>
                <Card>
                    <ButtonGroup style={{ minWidth: 200 }}>
                        <Button icon="database" text={"Queries"} />
                        <Button icon="function" text={"Functions"} />
                        <AnchorButton
                            icon="cog"
                            rightIcon="settings"
                            text={"Options"}
                        />
                    </ButtonGroup>
                </Card>
                <br/>
                <h6 className="bp4-heading">Code </h6>
                <p>
                <CodeBlock
                    text={CODE_DEFAULT}
                    language={"jsx"}
                    showLineNumbers={false}
                    theme={dracula}
                />
                </p>
            </Callout>
        </div>
    );
}

export default ButtonGroupCore;
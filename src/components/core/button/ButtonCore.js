import * as React from "react";
import { Callout, Card, AnchorButton, Button } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function ButtonCore() {
    const CODE = 
    `
    import * as React from "react";
    import { AnchorButton, Button } from "@blueprintjs/core";
    
    function Button() {

        return(
            <div style={{float: 'left', paddingRight: '5px'}}>
                <Button
                    icon="refresh"
                >
                    Button1
                </Button>
            </div>
            <div>
                <AnchorButton
                    href="/button"
                    icon="duplicate"
                    rightIcon="share"
                    target="_blank"
                    text={"Duplicate this page"}
                />
            </div>
        );
    }

    export default Button;
    `;

    return(
        <div className="main">
            <Callout title={"Button"}>
                <Card>
                    <div style={{float: 'left', paddingRight: '5px'}}>
                        <Button
                            icon="refresh"
                        >
                            Button1
                        </Button>
                    </div>
                    <div>
                        <AnchorButton
                            href="/button"
                            icon="duplicate"
                            rightIcon="share"
                            target="_blank"
                            text={"Duplicate this page"}
                        />
                    </div>
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

export default ButtonCore;
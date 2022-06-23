import * as React from "react";
import { Button, Callout, Card, NonIdealState, NonIdealStateIconSize } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function NonIdealStateCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Button, NonIdealState, NonIdealStateIconSize } from "@blueprintjs/core";
    import { IconNames } from "@blueprintjs/icons";
    
    function NonIdealState() {
        
        const iconName = IconNames.SEARCH;

        const description = (
            <div>
                Your search didn't match any files.
                <br />
                Try searching for something else, or create a new file.
            </div>
        );

        const action = <Button outlined={true} text="New file" icon="plus" intent="primary" />;

        return(
            <NonIdealState
                icon={iconName}
                iconSize={NonIdealStateIconSize.STANDARD}
                title={"No search results"}
                description={description}
                action={action}
                layout={"vertical"}
            />
        );
    }

    export default NonIdealState;
    `;

    const iconName = IconNames.SEARCH;

    const description = (
        <div>
            Your search didn't match any files.
            <br />
            Try searching for something else, or create a new file.
        </div>
    );

    const action = <Button outlined={true} text="New file" icon="plus" intent="primary" />;


    return(
        <div className="main">
            <Callout title={"Non-ideal state"}>
                <Card>
                    <NonIdealState
                        icon={iconName}
                        iconSize={NonIdealStateIconSize.STANDARD}
                        title={"No search results"}
                        description={description}
                        action={action}
                        layout={"vertical"}
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

export default NonIdealStateCore;
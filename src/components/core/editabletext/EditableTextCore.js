import * as React from "react";
import { Callout, Card, EditableText, H1 } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function EditableTextCore() {
    const CODE = 
    `
    import * as React from "react";
    import { EditableText, H1 } from "@blueprintjs/core";
    
    function EditableText() {
        return(
            <H1>
                <EditableText
                    placeholder="Edit title..."
                />
            </H1>
            <EditableText
                maxLines={12}
                minLines={3}
                multiline={true}
                placeholder="Edit report... (controlled, multiline)"
            />
        );
    }

    export default EditableText;
    `;

    return(
        <div className="main">
            <Callout title={"Editable Text"}>
                <Card>
                    <H1>
                        <EditableText
                            placeholder="Edit title..."
                        />
                    </H1>
                    <EditableText
                        maxLines={12}
                        minLines={3}
                        multiline={true}
                        placeholder="Edit report... (controlled, multiline)"
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

export default EditableTextCore;
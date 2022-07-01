import * as React from "react";
import { Callout, Card, FormGroup, InputGroup, Intent, Switch  } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function FormGroupCore() {
    const CODE = 
    `
    import * as React from "react";
    import { FormGroup, InputGroup, Intent, Switch } from "@blueprintjs/core";

    const formGroupProps = {
        disabled : false,
        helperText: false,
        inline: false,
        intent: Intent.NONE,
        label: true,
        requiredLabel: true,
        subLabel: false,
    };
    
    function FormGroup() {
        return(
            <FormGroup
                disabled={formGroupProps.disabled}
                helperText={formGroupProps.helperText && "Helper text with details..."}
                inline={formGroupProps.inline}
                intent={formGroupProps.intent}
                label={formGroupProps.label && "Label"}
                labelFor="text-input"
                labelInfo={formGroupProps.requiredLabel && "(required)"}
                subLabel={formGroupProps.subLabel && "Label helper text with details..."}
            >
                <InputGroup id="text-input" placeholder="Placeholder text" disabled={formGroupProps.disabled} intent={formGroupProps.intent} />
            </FormGroup>
            <FormGroup
                disabled={formGroupProps.disabled}
                helperText={formGroupProps.helperText && "Helper text with details..."}
                inline={formGroupProps.inline}
                intent={formGroupProps.intent}
                label={formGroupProps.label && "Label"}
                labelInfo={formGroupProps.requiredLabel && "(required)"}
            >
                <Switch label="Engage the hyperdrive" disabled={formGroupProps.disabled} />
                <Switch label="Initiate thrusters" disabled={formGroupProps.disabled} />
            </FormGroup>
        );
    }

    export default FormGroup;
    `;

    const formGroupProps = {
        disabled : false,
        helperText: false,
        inline: false,
        intent: Intent.NONE,
        label: true,
        requiredLabel: true,
        subLabel: false,
    };
    

    return(
        <div className="main">
            <Callout title={"Form Group"}>
                <Card>
                    <FormGroup
                        disabled={formGroupProps.disabled}
                        helperText={formGroupProps.helperText && "Helper text with details..."}
                        inline={formGroupProps.inline}
                        intent={formGroupProps.intent}
                        label={formGroupProps.label && "Label"}
                        labelFor="text-input"
                        labelInfo={formGroupProps.requiredLabel && "(required)"}
                        subLabel={formGroupProps.subLabel && "Label helper text with details..."}
                    >
                        <InputGroup id="text-input" placeholder="Placeholder text" disabled={formGroupProps.disabled} intent={formGroupProps.intent} />
                    </FormGroup>
                    <FormGroup
                        disabled={formGroupProps.disabled}
                        helperText={formGroupProps.helperText && "Helper text with details..."}
                        inline={formGroupProps.inline}
                        intent={formGroupProps.intent}
                        label={formGroupProps.label && "Label"}
                        labelInfo={formGroupProps.requiredLabel && "(required)"}
                    >
                        <Switch label="Engage the hyperdrive" disabled={formGroupProps.disabled} />
                        <Switch label="Initiate thrusters" disabled={formGroupProps.disabled} />
                    </FormGroup>
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

export default FormGroupCore;
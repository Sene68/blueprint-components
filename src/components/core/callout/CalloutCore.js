import React, { useReducer } from "react";
import { Callout, Card, Code, H5, Intent, Switch } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import IntentSelect from "../../common/IntentSelect";
import "../../main/Main.scss";

function CalloutCore() {
    const initialState = {
        showHeader: true,
        intent: Intent.NONE
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

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

    const handleHeaderChange = () => {
        dispatch({type: 'HeaderChange', value: !state.showHeader});
    }

    const handleIntentChange = (e) => {
        const intent = e.target.value;
        dispatch({type: 'IntentChange', value: intent});
    };

    const options = (
        <>
            <H5>Props</H5>
            <IntentSelect intent={state.intent} onChange={handleIntentChange} />
            <H5>Example</H5>
            <Switch checked={state.showHeader} label="Show header" onChange={handleHeaderChange} />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Callout"}>
                <Card>
                    <Example options={options}>
                        <Callout intent={state.intent} title={state.showHeader ? "Visually important content" : undefined}>
                            The component is a simple wrapper around the CSS API that provides props for modifiers and optional
                            title element. Any additional HTML props will be spread to the rendered <Code>{"<div>"}</Code>{" "}
                            element.
                        </Callout>
                    </Example>
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

function Reducer(state, action) {
    switch (action.type) {
        case 'HeaderChange': {
            return {...state, showHeader: action.value}
        }

        case 'IntentChange': {
            return {...state, intent: action.value}
        }
    }
}
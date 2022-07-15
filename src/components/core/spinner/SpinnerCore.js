import React, { useReducer } from "react";
import { Callout, H5, Intent, Label, Slider, Spinner, SpinnerSize, Switch } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import { Example } from "@blueprintjs/docs-theme";

import IntentSelect from "../../common/IntentSelect";
import "../../main/Main.scss";

function SpinnerCore() {
    const initialState = {
        hasValue: false,
        intent: Intent.NONE,
        size: SpinnerSize.STANDARD,
        value: 0.7
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

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

    const handleIntentChange = (e) => {
        const intent = e.target.value;
        dispatch({type: 'IntentChange', value: intent});
    };

    const handleBooleanChange = () => {
        dispatch({type: 'BooleanChange', value: !state.hasValue});
    };

    const handleSizeChange = (e) => {
        const size = e;
        dispatch({type: 'SizeChange', value: size});
    };

    const handleValueChange = (e) => {
        const value = e;
        dispatch({type: 'ValueChange', value: value});
    };

    const renderLabel = state.value.toFixed(1);

    const options = (
        <>
                <H5>Props</H5>
                <IntentSelect intent={state.intent} onChange={handleIntentChange} />
                <Label>Size</Label>
                <Slider
                    labelStepSize={50}
                    min={0}
                    max={SpinnerSize.LARGE * 2}
                    showTrackFill={false}
                    stepSize={5}
                    value={state.size}
                    onChange={handleSizeChange}
                />
                <Switch checked={state.hasValue} label="Known value" onChange={handleBooleanChange} />
                <Slider
                    disabled={!state.hasValue}
                    labelStepSize={1}
                    min={0}
                    max={1}
                    onChange={handleValueChange}
                    labelRenderer={renderLabel}
                    stepSize={0.1}
                    showTrackFill={false}
                    value={state.value}
                />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Spinner"}>
                <Example options={options}>
                    <Spinner
                        aria-label={state.hasValue ? `Loading ${state.value * 100}% complete` : "Loading..."}
                        intent={state.intent}
                        size={state.size}
                        value={state.hasValue ? state.value : null}
                    />
                </Example>
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

function Reducer(state, action) {
    switch (action.type) {
        case 'IntentChange': {
            return {...state, intent: action.value}
        }

        case 'BooleanChange': {
            return {...state, hasValue: action.value}
        }

        case 'SizeChange': {
            return {...state, size: action.value}
        }

        case 'ValueChange': {
            return {...state, value: action.value}
        }
    }
}
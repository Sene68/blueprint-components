import React, { useReducer } from "react";
import { Alignment, Callout, Card, Checkbox, H5, Switch } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import { Example } from "@blueprintjs/docs-theme";
import AlignmentSelect from "../../common/AlignmentSelect";
import "../../main/Main.scss";

function CheckboxCore() {
    const initialState = {
        alignIndicator: Alignment.LEFT,
        disabled: false,
        inline: false,
        large: false
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    const alignments = {
        "Left" : Alignment.LEFT,
        "Center" : Alignment.CENTER,
        "Right" : Alignment.RIGHT 
    };

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

    const handleDisabledChange = () => {
        dispatch({type: 'DisabledChange', value: !state.disabled});
    };

    const handleLargeChange = () => {
        dispatch({type: 'LargeChange', value: !state.large});
    }

    const handleInlineChange = () => {
        dispatch({type: 'InlineChange', value: !state.inline});
    }

    const handleAlignChange = (e) => {
        const innerText = e.target.innerText;
        const align = alignments[innerText];
        dispatch({type: 'AlignChange', value: align});
    }; 

    const options = (
        <>
            <H5>Props</H5>
            <Switch checked={state.disabled} label="Disabled" onChange={handleDisabledChange} />
            <Switch checked={state.inline} label="Inline" onChange={handleInlineChange} />
            <Switch checked={state.large} label="Large" onChange={handleLargeChange} />
            <AlignmentSelect align={state.alignIndicator} onChange={handleAlignChange} />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Checkbox"}>
                <Example options={options}>
                    <div>
                        <Checkbox {...state} label="Gilad Gray" defaultIndeterminate={true} />
                        <Checkbox {...state} label="Jason Killian" />
                        <Checkbox {...state} label="Antoine Llorca" />
                    </div>
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

export default CheckboxCore;

function Reducer(state, action) {
    switch (action.type) {
        case 'DisabledChange': {
            return {...state, disabled: action.value}
        }

        case 'LargeChange': {
            return {...state, large: action.value}
        }

        case 'InlineChange': {
            return {...state, inline: action.value}
        }

        case 'AlignChange': {
            return {...state, alignIndicator: action.value}
        }
    }
}
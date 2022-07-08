import React, { useReducer } from "react";
import { Alignment, Callout, H5, Switch } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import { Example } from "@blueprintjs/docs-theme";
import AlignmentSelect from "../../common/AlignmentSelect";
import "../../main/Main.scss";

function SwitchCore() {
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
            <Callout title={"Switch"}>
                <Example options={options}>
                    <div>
                        <Switch {...state} labelElement={<strong>Enabled</strong>} />
                        <Switch {...state} labelElement={<em>Public</em>} />
                        <Switch {...state} labelElement={<u>Cooperative</u>} defaultChecked={true} />
                        <Switch {...state} labelElement={"Containing Text"} innerLabelChecked="on" innerLabel="off" />
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

export default SwitchCore;

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
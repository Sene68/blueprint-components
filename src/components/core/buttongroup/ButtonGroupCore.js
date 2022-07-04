import React , { useReducer, useState } from "react";
import { Callout, ButtonGroup, AnchorButton, Button, H5, Intent, Switch, Alignment } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import IntentSelect from "../../common/IntentSelect";
import AlignmentSelect from "../../common/AlignmentSelect";
import "../../main/Main.scss";

function ButtonGroupCore() {
    const initialState = {
        alignText: Alignment.CENTER,
        fill: false,
        intent: Intent.NONE,
        large: false,
        minimal: false,
        vertical: false
    };

    const [state, dispatch] = useReducer(Reducer, initialState);
    const [iconOnly, setIconOnly] = useState(false);

    const alignments = {
        "Left" : Alignment.LEFT,
        "Center" : Alignment.CENTER,
        "Right" : Alignment.RIGHT 
    };

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

    const handleFillChange = () => {
        dispatch({type: 'FillChange', value: !state.fill});
    };

    const handleLargeChange = () => {
        dispatch({type: 'LargeChange', value: !state.large});
    }

    const handleMinimalChange = () => {
        dispatch({type: 'MinimalChange', value: !state.minimal});
    }

    const handleVerticalChange = () => {
        dispatch({type: 'VerticalChange', value: !state.vertical});
    }

    const handleIntentChange = (e) => {
        const intent = e.target.value;
        dispatch({type: 'IntentChange', value: intent});
    };

    const handleAlignChange = (e) => {
        const innerText = e.target.innerText;
        const align = alignments[innerText];
        dispatch({type: 'AlignChange', value: align});
    }; 

    const handleIconOnlyChange = () => {
        setIconOnly(!iconOnly);
    };

    const options = (
        <>
            <H5>Props</H5>
            <Switch checked={state.fill} label="Fill" onChange={handleFillChange} />
            <Switch checked={state.large} label="Large" onChange={handleLargeChange} />
            <Switch checked={state.minimal} label="Minimal" onChange={handleMinimalChange} />
            <Switch checked={state.vertical} label="Vertical" onChange={handleVerticalChange} />
            <IntentSelect intent={state.intent} onChange={handleIntentChange} />
            <AlignmentSelect align={state.alignText} onChange={handleAlignChange} />
            <H5>Example</H5>
            <Switch checked={iconOnly} label="Icons only" onChange={handleIconOnlyChange} />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Button Group"}>
                <Example options={options} >
                        <ButtonGroup style={{ minWidth: 200 }} {...state}>
                            <Button intent={state.intent} icon="database" text={iconOnly ? undefined : "Queries"} />
                            <Button intent={state.intent} icon="function" text={iconOnly ? undefined : "Functions"} />
                            <AnchorButton
                                intent={state.intent}
                                icon="cog"
                                rightIcon="settings"
                                text={iconOnly ? undefined : "Options"}
                            />
                        </ButtonGroup>
                </Example>
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

function Reducer(state, action) {
    switch (action.type) {
        case 'FillChange': {
            return {...state, fill: action.value}
        }

        case 'LargeChange': {
            return {...state, large: action.value}
        }

        case 'MinimalChange': {
            return {...state, minimal: action.value}
        }

        case 'VerticalChange': {
            return {...state, vertical: action.value}
        }

        case 'AlignChange': {
            return {...state, alignText: action.value}
        }

        case 'IntentChange': {
            return {...state, intent: action.value}
        }
    }
}
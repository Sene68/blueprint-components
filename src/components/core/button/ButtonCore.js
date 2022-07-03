import React , { useReducer, useState } from "react";
import { Callout, Card, AnchorButton, Button,  H5, Intent, Switch } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import IntentSelect from "../../common/IntentSelect";
import SizeSelect from "../../common/SizeSelect";
import "../../main/Main.scss";

function ButtonCore() {
    const initialState = {
        active: false,
        disabled: false,
        intent: Intent.NONE,
        loading: false,
        minimal: false,
        outlined: false,
        size: "regular"
    };

    const [state, dispatch] = useReducer(Reducer, initialState);
    const [iconOnly, setIconOnly] = useState(false);

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

    const handleActiveChange = () => {
        dispatch({type: 'ActiveChange', value: !state.active});       
    };

    const handleDisabledChange = () => {
        dispatch({type: 'DisabledChange', value: !state.disabled});
    };

    const handleLoadingChange = () => {
        dispatch({type: 'LoadingChange', value: !state.loading});
    };

    const handleMinimalChange = () => {
        dispatch({type: 'MinimalChange', value: !state.minimal});
    };

    const handleOutlinedChange = () => {
        dispatch({type: 'OutlinedChange', value: !state.outlined});
    };

    const handleSizeChange = (e) => {
        const size = e.target.innerText;
        dispatch({type: 'SizeChange', value: size});
    }; 

    const handleIntentChange = (e) => {
        const intent = e.target.value;
        dispatch({type: 'IntentChange', value: intent});
    };

    const handleIconOnlyChange = () => {
        setIconOnly(!iconOnly);
    };

    const options = (
        <>
            <H5>Props</H5>
            <Switch label="Active" checked={state.active} onChange={handleActiveChange} />
            <Switch label="Disabled" checked={state.disabled} onChange={handleDisabledChange} />
            <Switch label="Loading" checked={state.loading} onChange={handleLoadingChange} />
            <Switch label="Minimal" checked={state.minimal} onChange={handleMinimalChange} />
            <Switch label="Outlined" checked={state.outlined} onChange={handleOutlinedChange} />
            <SizeSelect size={state.size} onChange={handleSizeChange} />
            <IntentSelect intent={state.intent} onChange={handleIntentChange} />
            <H5>Example</H5>
            <Switch label="Icons only" checked={iconOnly} onChange={handleIconOnlyChange} />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Button"}>
                <Example options={options}>
                    <Card>
                        <div style={{float: 'left', paddingRight: '5px'}}>
                            <Button
                                icon="refresh"
                                text={iconOnly ? undefined : "Button"}
                                small={state.size === "small"}
                                large={state.size === "large"}
                                {...state}
                            />
                        </div>
                        <div>
                            <AnchorButton
                                href="/button"
                                icon="duplicate"
                                rightIcon="share"
                                target="_blank"
                                text={iconOnly ? undefined : "Duplicate this page"}
                                small={state.size === "small"}
                                large={state.size === "large"}
                                {...state}
                            />
                        </div>
                    </Card>
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

export default ButtonCore;

function Reducer(state, action) {
    switch (action.type) {
        case 'ActiveChange': {
            return {...state, active: action.value}
        }

        case 'DisabledChange': {
            return {...state, disabled: action.value}
        }

        case 'LoadingChange': {
            return {...state, loading: action.value}
        }

        case 'MinimalChange': {
            return {...state, minimal: action.value}
        }

        case 'OutlinedChange': {
            return {...state, outlined: action.value}
        }

        case 'SizeChange': {
            return {...state, size: action.value}
        }

        case 'IntentChange': {
            return {...state, intent: action.value}
        }
    }
}
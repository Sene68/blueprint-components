import React, { useState, useReducer } from "react";
import { Button, Callout, H5, Intent, Switch, Tag } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

import IntentSelect from "../../common/IntentSelect";

const INITTIAL_TAGS = [
    {
        id: 1,
        name: 'London'
    },
    {
        id: 2,
        name: 'New York'
    },
    {
        id: 3,
        name: 'San Francisco'
    },
    {
        id: 4,
        name: 'Seattle'
    }
];

function TagCore() {
    const initialState = {
        fill: false,
        icon: false,
        intent: Intent.NONE,
        interactive: false,
        large: false,
        minimal: false,
        rightIcon: false,
        round: false
    };

    const [state, dispatch] = useReducer(Reducer, initialState);
    const [tags, setTags] = useState(INITTIAL_TAGS);
    // const [removable, setRemovable] = useState(false);

    const CODE = 
    `
    import * as React from "react";
    import { Tag } from "@blueprintjs/core";
    
    function Tag() {

        const tags = [
            {
                id: 1,
                name: 'London'
            },
            {
                id: 2,
                name: 'New York'
            },
            {
                id: 3,
                name: 'San Francisco'
            },
            {
                id: 4,
                name: 'Seattle'
            }
        ];

        return(
            {tags.map(tag => (
                <Tag
                    key={tag.id}
                    style={{margin: '20px'}}
                >
                    {tag.name}
                </Tag>
            ))}
        );
    }

    export default Tag;
    `;

    const handleFillChange = () => {
        dispatch({type: 'FillChange', value: !state.fill});
    };

    const handleLargeChange = () => {
        dispatch({type: 'LargeChange', value: !state.large});
    };

    const handleMinimalChange = () => {
        dispatch({type: 'MinimalChange', value: !state.minimal});
    };

    const handleInteractiveChange = () => {
        dispatch({type: 'InteractiveChange', value: !state.interactive});
    };

    // const handleRemovableChange = () => {
    //     setRemovable(!removable);
    // };

    const handleRoundChange = () => {
        dispatch({type: 'RoundChange', value: !state.round});
    };

    const handleIconChange = () => {
        dispatch({type: 'IconChange', value: !state.icon});
    };

    const handleRightIconChange = () => {
        dispatch({type: 'RightIconChange', value: !state.rightIcon});
    };

    const handleIntentChange = (e) => {
        const intent = e.target.value;
        dispatch({type: 'IntentChange', value: intent});
    };

    const resetTags = () => {
        setTags(INITTIAL_TAGS);
    };

    // const onRemove = (e) => { 
    //     console.log(e);
    //     setTags(tags.filter(tag => tag.id !== e));
    // };

    const options = (
        <>
            <H5>Props</H5>
            <Switch label="Fill" checked={state.fill} onChange={handleFillChange} />
            <Switch label="Large" checked={state.large} onChange={handleLargeChange} />
            <Switch label="Minimal" checked={state.minimal} onChange={handleMinimalChange} />
            <Switch label="Interactive" checked={state.interactive} onChange={handleInteractiveChange} />
            {/* <Switch label="Removable" checked={removable} onChange={handleRemovableChange} /> */}
            <Switch label="Round" checked={state.round} onChange={handleRoundChange} />
            <Switch label="Left icon" checked={state.icon} onChange={handleIconChange} />
            <Switch label="Right icon" checked={state.rightIcon} onChange={handleRightIconChange} />
            <IntentSelect intent={state.intent} onChange={handleIntentChange} />
            <H5>Example</H5>
            <Button icon="refresh" text="Reset tags" onClick={resetTags} />
        </>
    );

    

    return(
        <div className="main">
            <Callout title={"Tag"}>
                <Example options={options}>
                    {tags.map(tag => 
                        
                        (    
                            <Tag
                                {...state}
                                key={tag.id}
                                // onRemove={removable && onRemove}
                                icon={state.icon === true ? "home" : undefined}
                                rightIcon={state.rightIcon === true ? "map" : undefined}
                            >
                                {tag.name}
                            </Tag>
                        )
                    )}
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

export default TagCore;

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

        case 'InteractiveChange': {
            return {...state, interactive: action.value}
        }

        case 'RoundChange': {
            return {...state, round: action.value}
        }

        case 'IconChange': {
            return {...state, icon: action.value}
        }

        case 'RightIconChange': {
            return {...state, rightIcon: action.value}
        }

        case 'IntentChange': {
            return {...state, intent: action.value}
        }
    }
}
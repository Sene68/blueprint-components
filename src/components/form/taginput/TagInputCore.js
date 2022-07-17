import React , { useReducer, useState } from "react";
import { Button, Callout, H5, Intent, Switch, TagInput, TagProps } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import IntentSelect from "../../common/IntentSelect";
import "../../main/Main.scss";

const VALUES = [
    // supports single JSX elements
    <strong key="al">Albert</strong>,
    // supports JSX "fragments" (don't forget `key` on elements in arrays!)
    ["Bar", <em key="thol">thol</em>, "omew"],
    // and supports simple strings
    "Casper",
    // falsy values are not rendered and ignored by the keyboard
    undefined,
];

function TagInputCore() {
    const initialState = {
        addOnBlur: false,
        addOnPaste: true,
        disabled: false,
        fill: false,
        intent: Intent.NONE,
        large: false,
        leftIcon: true
    };

    const [state, dispatch] = useReducer(Reducer, initialState);
    const [tagMinimal , setTagMinimal] = useState(false);
    const [values , setValues] = useState(VALUES);

    const handleLargeChange = () => {
        dispatch({type: 'LargeChange', value: !state.large});
    };

    const handleDisabledChange = () => {
        dispatch({type: 'DisabledChange', value: !state.disabled});
    }; 

    const handleLeftIconChange = () => {
        dispatch({type: 'LeftIconChange', value: !state.leftIcon});
    };

    const handleAddOnBlurChange = () => {
        dispatch({type: 'AddOnBlurChange', value: !state.addOnBlur});
    };

    const handleAddOnPasteChange = () => {
        dispatch({type: 'AddOnPasteChange', value: !state.addOnPaste});
    };

    const handleFillChange = () => {
        dispatch({type: 'FillChange', value: !state.fill});
    };

    const handleIntentChange = (e) => {
        const intent = e.target.value;
        dispatch({type: 'IntentChange', value: intent});
    };

    const handleTagMinimalChange = () => {
        setTagMinimal(!tagMinimal);
    };

    const handleChange = () => {
        setValues(values.length > 0 ? [] : VALUES);
    };

    const handleClear = () => {
        handleChange();
    }

    const getTagProps = {
        large: state.large,
        minimal: tagMinimal,
    };


    const options = (
        <>
            <H5>Props</H5>
            <Switch label="Large" checked={state.large} onChange={handleLargeChange} />
            <Switch label="Disabled" checked={state.disabled} onChange={handleDisabledChange} />
            <Switch label="Left icon" checked={state.leftIcon} onChange={handleLeftIconChange} />
            <Switch label="Add on blur" checked={state.addOnBlur} onChange={handleAddOnBlurChange} />
            <Switch label="Add on paste" checked={state.addOnPaste} onChange={handleAddOnPasteChange} />
            <Switch label="Fill container width" checked={state.fill} onChange={handleFillChange} />
            <IntentSelect intent={state.intent} onChange={handleIntentChange} />
            <H5>Tag props</H5>
            <Switch
                label="Use minimal tags"
                checked={state.tagMinimal}
                onChange={handleTagMinimalChange}
            />
        </>
    );

    const clearButton = (
        <Button
            disabled={state.disabled}
            icon={values.length > 1 ? "cross" : "refresh"}
            minimal={true}
            onClick={handleClear}
        />
    );

    return(
        <div className="main">
            <Callout title={"Tag Input"}>
                <Example options={options}>
                    <TagInput
                        {...state}
                        leftIcon={state.leftIcon ? "user" : undefined}
                        onChange={handleChange}
                        placeholder="Separate values with commas..."
                        rightElement={clearButton}
                        tagProps={getTagProps}
                        values={values}
                    />
                </Example>
            </Callout>
        </div>
    );
}

export default TagInputCore;

function Reducer(state, action) {
    switch (action.type) {
        case 'LargeChange': {
            return {...state, large: action.value}
        }

        case 'DisabledChange': {
            return {...state, disabled: action.value}
        }

        case 'LeftIconChange': {
            return {...state, leftIcon: action.value}
        }

        case 'AddOnBlurChange': {
            return {...state, addOnBlur: action.value}
        }

        case 'AddOnPasteChange': {
            return {...state, addOnPaste: action.value}
        }

        case 'FillChange': {
            return {...state, fill: action.value}
        }

        case 'IntentChange': {
            return {...state, intent: action.value}
        }
    }
}
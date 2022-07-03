import React, { useReducer, useState } from "react";
import { Callout, Card, Boundary, Breadcrumbs, Checkbox, H5, InputGroup, Label, RadioGroup, Slider } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import { Example } from "@blueprintjs/docs-theme";
import "../../main/Main.scss";

const COLLAPSE_FROM_RADIOS = [
    { label: "Start", value: Boundary.START.toString() },
    { label: "End", value: Boundary.END.toString() },
];

const ITEMS  = [
    { icon: "folder-close", text: "All files" },
    { icon: "folder-close", text: "Users" },
    { icon: "folder-close", text: "Janet" },
    { href: "#", icon: "folder-close", text: "Photos" },
    { href: "#", icon: "folder-close", text: "Wednesday" },
    { icon: "document", text: "image.jpg", current: true },
];
// Show less items for always redner example so we can see when everything fits
const ITEMS_FOR_ALWAYS_RENDER = [
    { href: "#", icon: "folder-close", text: "Root" },
    { icon: "document", text: "image.jpg", current: true },
];

function BreadcrumbsCore() {
    const initialState = {
        width: 50,
        collapseFrom: Boundary.START,
        alwaysRenderOverflow: false,
        renderCurrentAsInput: false
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    const CODE = 
    `
    import * as React from "react";
    import { Breadcrumbs } from "@blueprintjs/core";
    
    function Breadcrumbs() {
        const ITEMS = [
            { text: "All files" },
            { text: "Users" },
            { text: "Janet" },
            { href: "#", text: "Photos" },
            { href: "#", text: "Wednesday" },
            { text: "image.jpg", current: true },
        ];

        return(
            <Breadcrumbs
                items={ITEMS}
            />
        );
    }

    export default Breadcrumbs;
    `;

    const handleChangeCollapse = (e) => {
        const collapse = e.target.value;
        dispatch({type: 'ChangeCollapse', value: collapse});
    };

    const handleChangeAlwaysRenderOverflow = () => {
        dispatch({type: 'ChangeAlwaysRenderOverflow', value: !state.alwaysRenderOverflow})
    }

    const handleChangeRenderCurrentAsInput = () => {
        dispatch({type: 'ChangeRenderCurrentAsInput', value: !state.renderCurrentAsInput});
    }

    const handleChangeWidth = (e) => {
        const width = e;
        dispatch({type: 'ChangeWidth', value: width});
    };

    const renderLabel = (value) => {
        return `${value}%`;
    }; 

    const renderBreadcrumbInput = (item) => {
        return <BreadcrumbInput defaultValue={typeof item.text === "string" ? item.text : undefined} />;
    };

    const options = (
        <>
            <H5>Props</H5>
            <RadioGroup
                name="collapseFrom"
                inline={true}
                label="Collapse from"
                onChange={handleChangeCollapse}
                options={COLLAPSE_FROM_RADIOS}
                selectedValue={state.collapseFrom.toString()}
            />
            <Checkbox
                name="alwaysRenderOverflow"
                label="Always render overflow"
                onChange={handleChangeAlwaysRenderOverflow}
                checked={state.alwaysRenderOverflow}
            />
            <Checkbox
                name="renderCurrent"
                label="Render current breadcrumb as input"
                onChange={handleChangeRenderCurrentAsInput}
                checked={state.renderCurrentAsInput}
            />
            <H5>Example</H5>
            <Label>Width</Label>
            <Slider
                labelRenderer={renderLabel}
                labelStepSize={50}
                max={100}
                onChange={handleChangeWidth}
                showTrackFill={false}
                value={state.width}
            />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Breadcrumbs"}>
                <Example options={options}>
                    <Card elevation={0} style={{ width: `${state.width}%` }}>
                        <Breadcrumbs
                            collapseFrom={state.collapseFrom}
                            items={state.alwaysRenderOverflow ? ITEMS_FOR_ALWAYS_RENDER : ITEMS}
                            currentBreadcrumbRenderer={state.renderCurrentAsInput ? renderBreadcrumbInput : undefined}
                            overflowListProps={state.alwaysRenderOverflow}
                        />
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

export default BreadcrumbsCore;

function BreadcrumbInput(props) {
    const [text , setText] = useState(props.defaultValue ?? "");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return(
        <InputGroup placeholder="rename me" value={text} onChange={handleChange} />
    );
    
}

function Reducer(state, action) {
    switch (action.type) {
        case 'ChangeCollapse': {
            return {...state, collapseFrom: action.value}
        }

        case 'ChangeAlwaysRenderOverflow': {
            return {...state, alwaysRenderOverflow: action.value}
        }

        case 'ChangeRenderCurrentAsInput': {
            return {...state, renderCurrentAsInput: action.value}
        }

        case 'ChangeWidth': {
            return {...state, width: action.value}
        }
    }
}
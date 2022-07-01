import React, { useState } from "react";
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
    const [width, setWidth] = useState(50);
    const [collapseFrom , setCollapseFrom] = useState(Boundary.START);
    const [alwaysRenderOverflow, setAlwaysRenderOverflow] = useState(false);
    const [renderCurrentAsInput, setRenderCurrentAsInput] = useState(false);

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
        setCollapseFrom(e.target.value);
    };

    const handleChangeAlwaysRenderOverflow = (e) => {
        setAlwaysRenderOverflow(!alwaysRenderOverflow);
    }

    const handleChangeRenderCurrentAsInput = (e) => {
        setRenderCurrentAsInput(!renderCurrentAsInput);
    }

    const handleChangeWidth = (e) => {
        setWidth(e);
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
                selectedValue={collapseFrom.toString()}
            />
            <Checkbox
                name="alwaysRenderOverflow"
                label="Always render overflow"
                onChange={handleChangeAlwaysRenderOverflow}
                checked={alwaysRenderOverflow}
            />
            <Checkbox
                name="renderCurrent"
                label="Render current breadcrumb as input"
                onChange={handleChangeRenderCurrentAsInput}
                checked={renderCurrentAsInput}
            />
            <H5>Example</H5>
            <Label>Width</Label>
            <Slider
                labelRenderer={renderLabel}
                labelStepSize={50}
                max={100}
                onChange={handleChangeWidth}
                showTrackFill={false}
                value={width}
            />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Breadcrumbs"}>
                <Example options={options}>
                    <Card elevation={0} style={{ width: `${width}%` }}>
                        <Breadcrumbs
                            collapseFrom={collapseFrom}
                            items={alwaysRenderOverflow ? ITEMS_FOR_ALWAYS_RENDER : ITEMS}
                            currentBreadcrumbRenderer={renderCurrentAsInput ? renderBreadcrumbInput : undefined}
                            overflowListProps={{ alwaysRenderOverflow }}
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
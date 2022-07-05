import React , { useReducer } from "react";
import { Callout, ButtonGroup, Button, H5, Switch, Alignment } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { Popover2 } from "@blueprintjs/popover2";
import { CodeBlock, dracula } from "react-code-blocks";
import FileMenuSelect from "../../common/FileMenuSelect";
import AlignmentSelect from "../../common/AlignmentSelect";
import "../../main/Main.scss";

function ButtonGroupPopoverCore() {
    const initialState = {
        alignText: Alignment.CENTER,
        fill: false,
        large: false,
        minimal: false,
        vertical: false
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    const alignments = {
        "Left" : Alignment.LEFT,
        "Center" : Alignment.CENTER,
        "Right" : Alignment.RIGHT 
    };

    const buttons = [
        {"id": 1, "text": "File", "iconName": "document"},
        {"id": 2, "text": "Edit", "iconName": "edit"},
        {"id": 3, "text": "View", "iconName": "eye-open"}
    ];

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

    const handleAlignChange = (e) => {
        const innerText = e.target.innerText;
        const align = alignments[innerText];
        dispatch({type: 'AlignChange', value: align});
    }; 

    const options = (
        <>
            <H5>Props</H5>
            <Switch checked={state.fill} label="Fill" onChange={handleFillChange} />
            <Switch checked={state.large} label="Large" onChange={handleLargeChange} />
            <Switch checked={state.minimal} label="Minimal" onChange={handleMinimalChange} />
            <Switch checked={state.vertical} label="Vertical" onChange={handleVerticalChange} />
            <AlignmentSelect align={state.alignText} onChange={handleAlignChange} />
        </>
    );

    const popoverButton = (
        <>
            {buttons.map(button => (
                <Popover2 key={button.id} content={<FileMenuSelect />} placement={state.vertical ? "right-start" : "bottom-start"}>
                    <Button key={button.id} rightIcon={state.vertical ? "caret-right" : "caret-down"} icon={button.iconName} text={button.text} />
                </Popover2>
            ))}
        </>
    );

    return(
        <div className="main">
            <Callout title={"Button Group Popover"}>
                <Example options={options} >
                        <ButtonGroup style={{ minWidth: 120 }} {...state}>
                            {popoverButton}
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

export default ButtonGroupPopoverCore;

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
    }
}
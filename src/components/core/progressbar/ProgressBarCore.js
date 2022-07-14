import React, { useState } from "react";
import { Callout, H5, Intent, ProgressBar, Slider, Switch } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import IntentSelect from "../../common/IntentSelect";
import "../../main/Main.scss";
import { Example } from "@blueprintjs/docs-theme";

function ProgressBarCore() {
    const [ hasValue, setHasValue ] = useState(false);
    const [ value, setValue ] = useState(0.7);
    const [ intent, setIntent ] = useState(Intent.NONE);

    const CODE = 
    `
    import * as React from "react";
    import { ProgressBar } from "@blueprintjs/core";
    
    function ProgressBar() {
        const value = 0.7;

        return(
            <ProgressBar value={value} />
        );
    }

    export default ProgressBar;
    `;

    const handleBooleanChange = () => {
        setHasValue(!hasValue);
    };

    const handleValueChange = (e) => {
        setValue(e);
    }

    const handleIntentChange = (e) => {
        const intent = e.target.value;
        setIntent(intent);
    };

    const renderLabel = value.toFixed(1);

    const options = (
        <>
            <H5>Props</H5>
            <IntentSelect intent={intent} onChange={handleIntentChange} />
            <Switch checked={hasValue} label="Known value" onChange={handleBooleanChange} />
            <Slider
                disabled={!hasValue}
                labelStepSize={1}
                min={0}
                max={1}
                onChange={handleValueChange}
                labelRenderer={renderLabel}
                stepSize={0.1}
                showTrackFill={false}
                value={value}
            />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Progress Bar"}>
                <Example options={options}>
                    <ProgressBar intent={intent} value={hasValue ? value : null} />
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

export default ProgressBarCore;
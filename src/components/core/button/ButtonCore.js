import React , { useState } from "react";
import { Callout, Card, AnchorButton, Button,  H5, Intent, Switch } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import IntentSelect from "../../common/IntentSelect";
import SizeSelect from "../../common/SizeSelect";
import "../../main/Main.scss";

function ButtonCore() {
    const [active, setActive] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [iconOnly, setIconOnly] = useState(false);
    const [intent, setIntent] = useState(Intent.NONE);
    const [loading, setLoading] = useState(false);
    const [minimal, setMinimal] = useState(false);
    const [outlined, setOutlined] = useState(false);
    const [size, setSize] = useState("regular");
    const [wiggling , setWiggling] = useState(false);
    const [wiggleTimeoutId, setWiggleTimeoutId] = useState(0);

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
        setActive(!active);
    };

    const handleDisabledChange = () => {
        setDisabled(!disabled);
    };

    const handleLoadingChange = () => {
        setLoading(!loading);
    };

    const handleMinimalChange = () => {
        setMinimal(!minimal);
    };

    const handleOutlinedChange = () => {
        setOutlined(!outlined);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.innerText);
    }; 

    const handleIntentChange = (e) => {
        setIntent(e.target.value);
    };

    const handleIconOnlyChange = () => {
        setIconOnly(!iconOnly);
    };

    const options = (
        <>
            <H5>Props</H5>
            <Switch label="Active" checked={active} onChange={handleActiveChange} />
            <Switch label="Disabled" checked={disabled} onChange={handleDisabledChange} />
            <Switch label="Loading" checked={loading} onChange={handleLoadingChange} />
            <Switch label="Minimal" checked={minimal} onChange={handleMinimalChange} />
            <Switch label="Outlined" checked={outlined} onChange={handleOutlinedChange} />
            <SizeSelect size={size} onChange={handleSizeChange} />
            <IntentSelect intent={intent} onChange={handleIntentChange} />
            <H5>Example</H5>
            <Switch label="Icons only" checked={iconOnly} onChange={handleIconOnlyChange} />
        </>
    );

    const beginWiggling = () => {
        window.clearTimeout(wiggleTimeoutId);
        setWiggling(true);
        setWiggleTimeoutId(window.setTimeout(() => setWiggling(false), 300));
    };

    return(
        <div className="main">
            <Callout title={"Button"}>
                <Example options={options}>
                    <Card>
                        <div style={{float: 'left', paddingRight: '5px'}}>
                            <Button
                                className={wiggling ? "docs-wiggle" : ""}
                                icon="refresh"
                                onClick={beginWiggling}
                                small={size === "small"}
                                large={size === "large"}
                                active={active}
                                disabled={disabled}
                                loading={loading}
                                minimal={minimal}
                                outlined={outlined}
                                intent={intent}
                            >
                                {!iconOnly && "Click to wiggle"}
                            </Button>
                        </div>
                        <div>
                            <AnchorButton
                                href="/button"
                                icon="duplicate"
                                rightIcon="share"
                                target="_blank"
                                text={iconOnly ? undefined : "Duplicate this page"}
                                small={size === "small"}
                                large={size === "large"}
                                active={active}
                                disabled={disabled}
                                loading={loading}
                                minimal={minimal}
                                outlined={outlined}
                                intent={intent}
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
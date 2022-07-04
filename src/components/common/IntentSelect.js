import * as React from "react";
import { Intent, Label } from "@blueprintjs/core";

function IntentSelect(props) {

    const intents = [
        { label: "None", value: Intent.NONE },
        { label: "Primary", value: Intent.PRIMARY },
        { label: "Success", value: Intent.SUCCESS },
        { label: "Warning", value: Intent.WARNING },
        { label: "Danger", value: Intent.DANGER },
    ];

    const label = "Intent";

    return(
        <Label>
            {label}
            {/* <HTMLSelect value={props.intent} onChange={props.onChange} options={INTENTS} /> */}
            <div className="bp4-html-select">
                <select value={props.intent} onChange={props.onChange} >
                    {intents.map(intent => (
                        <option key={intent.label} label={intent.label} value={intent.value.toString()}>{intent.label}</option>
                    ))}
                </select>
                <span icon="double-caret-vertical" className="bp4-icon bp4-icon-double-caret-vertical"><svg data-icon="double-caret-vertical" width="16" height="16" viewBox="0 0 16 16"><desc>Open dropdown</desc><path d="M5 7h6a1.003 1.003 0 00.71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 005 7zm6 2H5a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 9z" fillRule="evenodd"></path></svg></span>
            </div>
            
        </Label>
    );
}

export default IntentSelect;

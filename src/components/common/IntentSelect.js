import * as React from "react";

import { HTMLSelect, Intent, Label } from "@blueprintjs/core";

function IntentSelect(props) {

    const INTENTS = [
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
            <HTMLSelect value={props.intent} onChange={props.onChange} options={INTENTS} />
        </Label>
    );
}

export default IntentSelect;

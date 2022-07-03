import * as React from "react";

import { Button, ButtonGroup, Label } from "@blueprintjs/core";

function SizeSelect(props) {

    const label = "Size";
    const optionLabels = ["small", "regular", "large"];

    return(
        <Label>
            {label}
            <ButtonGroup fill={true} style={{ marginTop: 5 }}>
                <Button active={props.size === "small"} text={optionLabels[0]} onClick={props.onChange} />
                <Button active={props.size === "regular"} text={optionLabels[1]} onClick={props.onChange} />
                <Button active={props.size === "large"} text={optionLabels[2]} onClick={props.onChange} />
            </ButtonGroup>
        </Label>
    );
}

export default SizeSelect;
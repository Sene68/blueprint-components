import * as React from "react";

import { Alignment, Button, ButtonGroup } from "@blueprintjs/core";

function AlignmentSelect(props) {


    const label = "Align Text";
    const allowCenter = true;

    return(
        <div>
            {label}
            <ButtonGroup fill={true} style={{ marginTop: 5 }}>
                <Button active={props.align === Alignment.LEFT} text="Left" onClick={props.onChange} />
                {allowCenter && (
                    <Button
                        active={props.align == null || props.align === Alignment.CENTER}
                        text="Center"
                        onClick={props.onChange}
                    />
                )}
                <Button active={props.align === Alignment.RIGHT} text="Right" onClick={props.onChange} />
            </ButtonGroup>
        </div>
    );
}

export default AlignmentSelect;
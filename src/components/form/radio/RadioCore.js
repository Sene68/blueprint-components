import React, { useState } from "react";
import { Callout, Card, Radio, RadioGroup } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function RadioCore() {
    const [radio, setRadio] = useState("one");

    const CODE = 
    `
    import * as React from "react";
    import { Radio, RadioGroup } from "@blueprintjs/core";
    
    function Radio() {
        const [radio, setRadio] = useState("one");
        
        const handleRadioChange = (e) => {
            setRadio(e.target.value);
        };

        return(
            <RadioGroup
                label="Determine lunch"
                name="group"
                onChange={handleRadioChange}
                selectedValue={radio}
            >
                <Radio label="Soup" value="one" />
                <Radio label="Salad" value="two" />
                <Radio label="Sandwich" value="three" />
            </RadioGroup>
        );
    }

    export default Radio;
    `;

    const handleRadioChange = (e) => {
        setRadio(e.target.value);
    };

    return(
        <div className="main">
            <Callout title={"Radio"}>
                <Card>
                    <RadioGroup
                        label="Determine lunch"
                        name="group"
                        onChange={handleRadioChange}
                        selectedValue={radio}
                    >
                        <Radio label="Soup" value="one" />
                        <Radio label="Salad" value="two" />
                        <Radio label="Sandwich" value="three" />
                    </RadioGroup>
                </Card>
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

export default RadioCore;
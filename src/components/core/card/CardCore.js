import React, { useReducer } from "react";
import { Button, Callout, Card, Classes, H5, Label, Slider, Switch } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function CardCore() {
    const initialState = {
        interactive: false,
        elevation: 0
    };

    const [state, dispatch] = useReducer(Reducer, initialState);


    const CODE = 
    `
    import * as React from "react";
    import { Card, H5, Button, Classes } from "@blueprintjs/core";
    
    function Card() {

        return(
            <Card>
                <H5>
                    <a href="#">Analytical applications</a>
                </H5>
                <p>
                    User interfaces that enable people to interact smoothly with data, ask better questions, and
                    make better decisions.
                </p>
                <Button text="Explore products" className={Classes.BUTTON} />
            </Card>
        );
    }

    export default Card;
    `;

    const handleInteractiveChange = () => {
        dispatch({type: 'InteractiveChange', value: !state.interactive});
    };

    const handleElevationChange = (e) => {
        dispatch({type: 'ElevationChange', value: e});
    };

    const options = (
        <>
            <H5>Props</H5>
            <Switch checked={state.interactive} label="Interactive" onChange={handleInteractiveChange} />
            <Label>
                Elevation
                <Slider
                    max={4}
                    showTrackFill={false}
                    value={state.elevation}
                    onChange={handleElevationChange}
                />
            </Label>
        </>
    );

    return(
        <div className="main">
            <Callout title={"Card"}>
                <Card>
                    <Example options={options}>
                        <Card {...state}>
                            <H5>
                                <a href="#">Analytical applications</a>
                            </H5>
                            <p>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and
                                make better decisions.
                            </p>
                            <Button text="Explore products" className={Classes.BUTTON} />
                        </Card>
                    </Example>
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

export default CardCore;

function Reducer(state, action) {
    switch (action.type) {
        case 'InteractiveChange': {
            return {...state, interactive: action.value}
        }

        case 'ElevationChange': {
            return {...state, elevation: action.value}
        }
    }
}
import React, { useReducer } from "react";
import { Callout, Card, H5, Slider, Switch } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import { Example } from "@blueprintjs/docs-theme";
import "../../main/Main.scss";

function SliderCore() {
    const initialState = {
        value1: 2.5,
        value2: 0,
        value3: 30,
        vertical: false
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    const CODE = 
    `
    import React, { useReducer } from "react";
    import { H5, Slider, Switch } from "@blueprintjs/core";
    import { Example } from "@blueprintjs/docs-theme";
    
    function Slider() {
        const initialState = {
            value1: 2.5,
            value2: 0,
            value3: 30,
            vertical: false
        };
    
        const [state, dispatch] = useReducer(Reducer, initialState);

        const toggleVertical = () => {
            dispatch({type: 'ToggleVertical', value: !state.vertical});
        };
    
        const getChangeValue1 = (e) => {
            dispatch({type: 'ChangeValue1', value: e});
        };
    
        const getChangeValue2 = (e) => {
            dispatch({type: 'ChangeValue2', value: e});
        };
    
        const getChangeValue3 = (e) => {
            dispatch({type: 'ChangeValue3', value: e});
        };

        const renderLabel2 = (number) => {
            return \`$\{Math.round(number * 100)}%\`;
        };
    
        const renderLabel3 = (number) => {
            return number === 0 ? \`£$\{number}\` : \`£$\{number},000\`;
        };

        const options = (
            <>
                <H5>Props</H5>
                <Switch checked={state.vertical} label="Vertical" key="vertical" onChange={toggleVertical} />
            </>
        ); 

        return(
            <Example options={options} className="docs-example-slider">
                <Slider
                    min={0}
                    max={10}
                    stepSize={0.1}
                    labelStepSize={10}
                    onChange={getChangeValue1}
                    value={state.value1}
                    vertical={state.vertical}
                />
                <Slider
                    min={0}
                    max={0.7}
                    stepSize={0.01}
                    labelStepSize={0.14}
                    onChange={getChangeValue2}
                    labelRenderer={renderLabel2}
                    value={state.value2}
                    vertical={state.vertical}
                />
                <Slider
                    min={-12}
                    max={48}
                    stepSize={6}
                    labelStepSize={10}
                    onChange={getChangeValue3}
                    labelRenderer={renderLabel3}
                    showTrackFill={false}
                    value={state.value3}
                    vertical={state.vertical}
                />
            </Example>
        );
    }

    export default Slider;

    function Reducer(state, action) {
        switch (action.type) {
            case 'ToggleVertical': {
                return {...state, vertical: action.value}
            }
    
            case 'ChangeValue1': {
                return {...state, value1: action.value}
            }
    
            case 'ChangeValue2': {
                return {...state, value2: action.value}
            }
    
            case 'ChangeValue3': {
                return {...state, value3: action.value}
            }
        }
    }
    `;

    const toggleVertical = () => {
        dispatch({type: 'ToggleVertical', value: !state.vertical});
    };

    const getChangeValue1 = (e) => {
        dispatch({type: 'ChangeValue1', value: e});
    };

    const getChangeValue2 = (e) => {
        dispatch({type: 'ChangeValue2', value: e});
    };

    const getChangeValue3 = (e) => {
        dispatch({type: 'ChangeValue3', value: e});
    };

    const renderLabel2 = (number) => {
        return `${Math.round(number * 100)}%`;
    };

    const renderLabel3 = (number) => {
        return number === 0 ? `£${number}` : `£${number},000`;
    };

    const options = (
        <>
            <H5>Props</H5>
            <Switch checked={state.vertical} label="Vertical" key="vertical" onChange={toggleVertical} />
        </>
    ); 


    return(
        <div className="main">
            <Callout title={"Slider"}>
                <Card>
                    <Example options={options} className="docs-example-slider">
                        <Slider
                            min={0}
                            max={10}
                            stepSize={0.1}
                            labelStepSize={10}
                            onChange={getChangeValue1}
                            value={state.value1}
                            vertical={state.vertical}
                        />
                        <Slider
                            min={0}
                            max={0.7}
                            stepSize={0.01}
                            labelStepSize={0.14}
                            onChange={getChangeValue2}
                            labelRenderer={renderLabel2}
                            value={state.value2}
                            vertical={state.vertical}
                        />
                        <Slider
                            min={-12}
                            max={48}
                            stepSize={6}
                            labelStepSize={10}
                            onChange={getChangeValue3}
                            labelRenderer={renderLabel3}
                            showTrackFill={false}
                            value={state.value3}
                            vertical={state.vertical}
                        />
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

export default SliderCore;

function Reducer(state, action) {
    switch (action.type) {
        case 'ToggleVertical': {
            return {...state, vertical: action.value}
        }

        case 'ChangeValue1': {
            return {...state, value1: action.value}
        }

        case 'ChangeValue2': {
            return {...state, value2: action.value}
        }

        case 'ChangeValue3': {
            return {...state, value3: action.value}
        }
    }
}
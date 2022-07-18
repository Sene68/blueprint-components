import React, { useState, useReducer } from "react";
import { Alignment, Callout, Classes, H3, H5, InputGroup, Navbar, Switch, Tab, TabId, Tabs } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function ReactPanel() {
    return(
        <div>
            <H3>Example panel: React</H3>
            <p className={Classes.RUNNING_TEXT}>
                Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology
                stack, it's easy to try it out on a small feature in an existing project.
            </p>
        </div>
    );
}

function AngularPanel() {
    return(
        <div>
            <H3>Example panel: Angular</H3>
            <p className={Classes.RUNNING_TEXT}>
                HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic
                views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting
                environment is extraordinarily expressive, readable, and quick to develop.
            </p>
        </div>
    );
}
    
function EmberPanel() {
    return(
        <div>
            <H3>Example panel: Ember</H3>
            <p className={Classes.RUNNING_TEXT}>
                Ember.js is an open-source JavaScript application framework, based on the model-view-controller (MVC)
                pattern. It allows developers to create scalable single-page web applications by incorporating common idioms
                and best practices into the framework. What is your favorite JS framework?
            </p>
            <input className={Classes.INPUT} type="text" />
        </div>
    );
}

function BackbonePanel() {
    return(
        <div>
            <H3>Backbone</H3>
        </div>
    );
}
    

function TabsCore() {
    const initialState = {
        activePanelOnly: false,
        animate: true,
        vertical: false
    };

    const [state, dispatch] = useReducer(Reducer, initialState);
    const [navbarTabId, setNavbarTabId] = useState("Home");

    const CODE = 
    `
    import * as React from "react";
    import { Classes, H3, Tab, Tabs } from "@blueprintjs/core";

    function ReactPanel() {
        return(
            <div>
                <H3>Example panel: React</H3>
                <p className={Classes.RUNNING_TEXT}>
                    Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology
                    stack, it's easy to try it out on a small feature in an existing project.
                </p>
            </div>
        );
    }
    
    function AngularPanel() {
        return(
            <div>
                <H3>Example panel: Angular</H3>
                <p className={Classes.RUNNING_TEXT}>
                    HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic
                    views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting
                    environment is extraordinarily expressive, readable, and quick to develop.
                </p>
            </div>
        );
    }
        
    function EmberPanel() {
        return(
            <div>
                <H3>Example panel: Ember</H3>
                <p className={Classes.RUNNING_TEXT}>
                    Ember.js is an open-source JavaScript application framework, based on the model-view-controller (MVC)
                    pattern. It allows developers to create scalable single-page web applications by incorporating common idioms
                    and best practices into the framework. What is your favorite JS framework?
                </p>
                <input className={Classes.INPUT} type="text" />
            </div>
        );
    }

    function BackbonePanel() {
        return(
            <div>
                <H3>Backbone</H3>
            </div>
        );
    }
    
    function Tabs() {
        return(
            <Tabs
                animate={true}
                id="TabsExample"
                key="horizontal"
            >
                <Tab id="rx" title="React" panel={<ReactPanel />} />
                <Tab id="ng" title="Angular" panel={<AngularPanel />} />
                <Tab id="mb" title="Ember" panel={<EmberPanel />} panelClassName="ember-panel" />
                <Tab id="bb" disabled={true} title="Backbone" panel={<BackbonePanel />} />
                <Tabs.Expander />
            </Tabs>
        );
    }

    export default Tabs;
    `;

    const toggleAnimate = () => {
        dispatch({type: 'AnimateChange', value: !state.animate});
    };

    const toggleVertical = () => {
        dispatch({type: 'VerticalChange', value: !state.vertical});
    };

    const toggleActiveOnly = () => {
        dispatch({type: 'ActivePanelOnlyChange', value: !state.activePanelOnly});
    };  

    const handleNavbarTabChange = (e) => {
        const tabId = e;
        setNavbarTabId(tabId);
    };

    const options = (
        <>
            <H5>Props</H5>
            <Switch checked={state.animate} label="Animate indicator" onChange={toggleAnimate} />
            <Switch checked={state.vertical} label="Use vertical tabs" onChange={toggleVertical} />
            <Switch
                checked={state.activePanelOnly}
                label="Render active tab panel only"
                onChange={toggleActiveOnly}
            />
        </>
    );


    return(
        <div className="main">
            <Callout title={"Tabs"}>
                <Example options={options}>
                    <Navbar>
                        <Navbar.Group>
                            <Navbar.Heading>
                                Current page: <strong>{navbarTabId}</strong>
                            </Navbar.Heading>
                        </Navbar.Group>
                        <Navbar.Group align={Alignment.RIGHT}>
                            {/* controlled mode & no panels (see h1 below): */}
                            <Tabs
                                animate={state.animate}
                                id="navbar"
                                large={true}
                                onChange={handleNavbarTabChange}
                                selectedTabId={navbarTabId}
                            >
                                <Tab id="Home" title="Home" />
                                <Tab id="Files" title="Files" />
                                <Tab id="Builds" title="Builds" />
                            </Tabs>
                        </Navbar.Group>
                    </Navbar>
                    <div style={{margin: '20px'}}></div>
                    <Tabs
                        animate={state.animate}
                        id="TabsExample"
                        key={state.vertical ? "vertical" : "horizontal"}
                        renderActiveTabPanelOnly={state.activePanelOnly}
                        vertical={state.vertical}
                    >
                        <Tab id="rx" title="React" panel={<ReactPanel />} />
                        <Tab id="ng" title="Angular" panel={<AngularPanel />} />
                        <Tab id="mb" title="Ember" panel={<EmberPanel />} panelClassName="ember-panel" />
                        <Tab id="bb" disabled={true} title="Backbone" panel={<BackbonePanel />} />
                        <Tabs.Expander />
                        <InputGroup className={Classes.FILL} type="text" placeholder="Search..." />
                    </Tabs>
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

export default TabsCore;

function Reducer(state, action) {
    switch (action.type) {
        case 'AnimateChange': {
            return {...state, animate: action.value}
        }

        case 'VerticalChange': {
            return {...state, vertical: action.value}
        }

        case 'ActivePanelOnlyChange': {
            return {...state, activePanelOnly: action.value}
        }
    }
}
import * as React from "react";
import { Callout, Card, Classes, H3, Tab, Tabs } from "@blueprintjs/core";
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

    return(
        <div className="main">
            <Callout title={"Tabs"}>
                <Card>
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

export default TabsCore;
import * as React from "react";
import { Callout, Code } from "@blueprintjs/core";
import "./Main.scss";

function Main() {
    return(
        <div className="main">
            <Callout title={"Getting Started"}>
                The component is a simple wrapper around the CSS API that provides props for modifiers and optional
                title element. Any additional HTML props will be spread to the rendered <Code>{"<div>"}</Code>{" "}
                element.
            </Callout>
        </div>
    );
}

export default Main;
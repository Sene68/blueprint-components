import * as React from "react";
import { Callout } from "@blueprintjs/core";
import "./Main.scss";

function Main() {
    return(
        <div className="main">
            <Callout title={"Blueprint Components"}>
                <h6 className="bp4-heading">Blueprint Components 입니다. </h6>
            </Callout>
        </div>
    );
}

export default Main;
import * as React from "react";
import { Button, ButtonGroup, Divider } from "@blueprintjs/core";
import "./Main.scss";

function Main() {
    return(
        <div className="main">
            <ButtonGroup minimal={true} vertical={false}>
                <Button text="File" />
                <Button text="Edit" />
                <Divider />
                <Button text="Create" />
                <Button text="Delete" />
                <Divider />
                <Button icon="add" />
                <Button icon="remove" />
            </ButtonGroup>
        </div>
    );
}

export default Main;
import * as React from "react";
import { Classes, Icon, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import "./Left.scss"


function Left() {
    return(
        <div className="side">
            <Menu className={Classes.ELEVATION_1}>
                <MenuItem text="Custom SVG icon" />
                <MenuDivider />
                <MenuItem icon="new-text-box" text="New text box" />
                <MenuItem icon="new-object" text="New object" />
                <MenuItem icon="new-link" text="New link" />
                <MenuDivider />
                <MenuItem icon="cog"  text="Settings..." intent="primary" />
            </Menu>
        </div>
    );
}

export default Left;
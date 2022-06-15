import * as React from "react";
import { Classes, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import "./Left.scss"


function Left() {
    return(
        <div className="side">
            <Menu className={Classes.ELEVATION_1}>
                <MenuItem href="/getting-started" text="Getting Started" />
                <MenuDivider title="CORE"/>
                <MenuItem href="/breadcrumbs" text="Breadcrumbs" />
                <MenuItem href="/button" text="Button" />
                <MenuItem text="Button group" />
                <MenuDivider title="DATETIME"/>
                <MenuItem text="Date picker" />
            </Menu>
        </div>
    );
}

export default Left;
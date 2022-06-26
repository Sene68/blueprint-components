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
                <MenuItem href="/buttongroup" text="Button Group" />
                <MenuItem href="/callout" text="Callout" />
                <MenuItem href="/card" text="Card" />
                <MenuItem href="/collapse" text="Collapse" />
                <MenuItem href="/divider" text="Divider" />
                <MenuItem href="/editabletext" text="Editable Text" />
                <MenuItem href="/menu" text="Menu" />
                <MenuItem href="/navbar" text="Navbar" />
                <MenuItem href="/nonidealstate" text="Non-ideal state" />
                <MenuItem href="/progressbar" text="Progress Bar" />
                <MenuItem href="/spinner" text="Spinner" />
                <MenuItem href="/tabs" text="Tabs" />
                <MenuDivider title="DATETIME"/>
                <MenuItem text="Date picker" />
            </Menu>
        </div>
    );
}

export default Left;
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
                <MenuItem href="/buttongroup" text="Button group default" />
                <MenuItem href="/buttonpopover" text="Button group popover" />
                <MenuItem href="/callout" text="Callout" />
                <MenuItem href="/card" text="Card" />
                <MenuItem href="/collapse" text="Collapse" />
                <MenuItem href="/divider" text="Divider" />
                <MenuItem href="/editabletext" text="Editable text" />
                <MenuItem href="/menu" text="Menu" />
                <MenuItem href="/navbar" text="Navbar" />
                <MenuItem href="/nonidealstate" text="Non-ideal state" />
                <MenuItem href="/progressbar" text="Progress bar" />
                <MenuItem href="/spinner" text="Spinner" />
                <MenuItem href="/tabs" text="Tabs" />
                <MenuItem href="/tag" text="Tag" />
                <MenuItem href="/text" text="Text" />
                <MenuItem href="/tree" text="Tree" />
                <MenuItem href="/formgroup" text="Form group" />
                <MenuItem href="/controlgroup" text="Control group" />
                <MenuItem href="/checkbox" text="Checkbox" />
                <MenuItem href="/radio" text="Radio" />
                <MenuItem href="/slider" text="Slider" />
                <MenuDivider title="DATETIME"/>
                <MenuItem text="Date picker" />
            </Menu>
        </div>
    );
}

export default Left;
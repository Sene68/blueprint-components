import * as React from "react";

import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

function FileMenuSelect(){
    return(
        <>
            <Menu>
                <MenuItem text="New" icon="document" />
                <MenuItem text="Open" icon="folder-shared" />
                <MenuItem text="Close" icon="add-to-folder" />
                <MenuDivider/>
                <MenuItem text="Save" icon="floppy-disk" />
                <MenuItem text="Save as..." icon="floppy-disk" />
                <MenuDivider/>
                <MenuItem text="Exit" icon="cross" />
            </Menu>
        </>
    );
}
    
export default FileMenuSelect;
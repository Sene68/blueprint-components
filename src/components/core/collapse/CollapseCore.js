import React, { useState } from "react";
import { Button, Callout, Card, Collapse, Pre } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function CollapseCore() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(isOpen => !isOpen);
    }

    const CODE = 
    `
    import React, { useState } from "react";
    import { Button, Collapse, Pre } from "@blueprintjs/core";
    
    function Collapse() {
        const [isOpen, setIsOpen] = useState(false);

        const handleClick = () => {
            setIsOpen(isOpen => !isOpen);
        }

        return(
            <Button onClick={handleClick}>{isOpen ? "Hide" : "Show"} build logs</Button>
            <Collapse isOpen={isOpen}>
                <Pre>
                    [11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms
                    <br />
                    [11:53:30] Starting 'typescript-typings-blueprint'...
                    <br />
                    [11:53:30] Finished 'typescript-typings-blueprint' after 198 ms
                    <br />
                    [11:53:30] write ./blueprint.css
                    <br />
                    [11:53:30] Finished 'sass-compile-blueprint' after 2.84 s
                </Pre>
            </Collapse>
        );
    }

    export default Collapse;
    `;

    return(
        <div className="main">
            <Callout title={"Collapse"}>
                <Card>
                    <Button onClick={handleClick}>{isOpen ? "Hide" : "Show"} build logs</Button>
                    <Collapse isOpen={isOpen}>
                        <Pre>
                            [11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms
                            <br />
                            [11:53:30] Starting 'typescript-typings-blueprint'...
                            <br />
                            [11:53:30] Finished 'typescript-typings-blueprint' after 198 ms
                            <br />
                            [11:53:30] write ./blueprint.css
                            <br />
                            [11:53:30] Finished 'sass-compile-blueprint' after 2.84 s
                        </Pre>
                    </Collapse>
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

export default CollapseCore;
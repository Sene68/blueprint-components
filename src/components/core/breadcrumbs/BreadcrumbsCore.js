import * as React from "react";
import { Callout, Card, Breadcrumbs } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function BreadcrumbsCore() {
    const ITEMS = [
        { text: "All files" },
        { text: "Users" },
        { text: "Janet" },
        { href: "#", text: "Photos" },
        { href: "#", text: "Wednesday" },
        { text: "image.jpg", current: true },
    ];

    const CODE = 
    `
    import * as React from "react";
    import { Breadcrumbs } from "@blueprintjs/core";
    
    function Breadcrumbs() {
        const ITEMS = [
            { text: "All files" },
            { text: "Users" },
            { text: "Janet" },
            { href: "#", text: "Photos" },
            { href: "#", text: "Wednesday" },
            { text: "image.jpg", current: true },
        ];

        return(
            <Breadcrumbs
                items={ITEMS}
            />
        );
    }

    export default Breadcrumbs;
    `;

    return(
        <div className="main">
            <Callout title={"Breadcrumbs"}>
                <Card>
                    <Breadcrumbs
                        items={ITEMS}
                    />
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

export default BreadcrumbsCore;
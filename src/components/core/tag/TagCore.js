import * as React from "react";
import { Callout, Card, Tag } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function TagCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Tag } from "@blueprintjs/core";
    
    function Tag() {

        const tags = [
            {
                id: 1,
                name: 'London'
            },
            {
                id: 2,
                name: 'New York'
            },
            {
                id: 3,
                name: 'San Francisco'
            },
            {
                id: 4,
                name: 'Seattle'
            }
        ];

        return(
            {tags.map(tag => (
                <Tag
                    key={tag.id}
                    style={{margin: '20px'}}
                >
                    {tag.name}
                </Tag>
            ))}
        );
    }

    export default Tag;
    `;

    const tags = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'New York'
        },
        {
            id: 3,
            name: 'San Francisco'
        },
        {
            id: 4,
            name: 'Seattle'
        }
    ];

    return(
        <div className="main">
            <Callout title={"Tag"}>
                <Card>
                    {tags.map(tag => (
                        <Tag
                            key={tag.id}
                            style={{margin: '20px'}}
                        >
                            {tag.name}
                        </Tag>
                    ))}
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

export default TagCore;
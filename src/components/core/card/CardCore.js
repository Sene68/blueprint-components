import * as React from "react";
import { Callout, Card, H5, Button, Classes } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function CardCore() {
    const CODE = 
    `
    import * as React from "react";
    import { Card, H5, Button, Classes } from "@blueprintjs/core";
    
    function Card() {

        return(
            <Card>
                <H5>
                    <a href="#">Analytical applications</a>
                </H5>
                <p>
                    User interfaces that enable people to interact smoothly with data, ask better questions, and
                    make better decisions.
                </p>
                <Button text="Explore products" className={Classes.BUTTON} />
            </Card>
        );
    }

    export default Card;
    `;

    return(
        <div className="main">
            <Callout title={"Card"}>
                <Card>
                    <Card>
                        <H5>
                            <a href="#">Analytical applications</a>
                        </H5>
                        <p>
                            User interfaces that enable people to interact smoothly with data, ask better questions, and
                            make better decisions.
                        </p>
                        <Button text="Explore products" className={Classes.BUTTON} />
                    </Card>
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

export default CardCore;
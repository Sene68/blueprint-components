import React, { useState } from "react";
import { Callout, Card, Text, TextArea } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";

function TextCore() {
    const [textContent, setTextContent] = useState('You can change the text in the input below. Hover to see full text. If the text is long enough, then the content will overflow. This is done by setting ellipsize to true.');
    
    const onInputChange = (e) => {
        setTextContent(e.target.value);
    }

    const CODE = 
    `
    import React, { useState } from "react";
    import { Text, TextArea } from "@blueprintjs/core";
    
    function Text() {
        const [textContent, setTextContent] = useState('You can change the text in the input below. Hover to see full text. If the text is long enough, then the content will overflow. This is done by setting ellipsize to true.');
    
        const onInputChange = (e) => {
            setTextContent(e.target.value);
        }

        return(
            <Text ellipsize={true}>
                {textContent}
                &nbsp;
            </Text>
            <TextArea fill={true} onChange={onInputChange} value={textContent} />
        );
    }

    export default Text;
    `;



    return(
        <div className="main">
            <Callout title={"Text"}>
                <Card>
                    <Text ellipsize={true}>
                        {textContent}
                        &nbsp;
                    </Text>
                    <TextArea fill={true} onChange={onInputChange} value={textContent} />
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

export default TextCore;
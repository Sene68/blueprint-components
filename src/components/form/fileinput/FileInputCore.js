import React, { useState } from "react";
import { Callout, FileInput, FormGroup, H5, InputGroup } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";
import { Example } from "@blueprintjs/docs-theme";

function FileInputCore() {
    const [text, setText] = useState("Choose file...");
    const [buttonText, setButtonText] = useState("Browse");

    const CODE = 
    `
    import React, { useState } from "react";
    import { FileInput, FormGroup, H5, InputGroup } from "@blueprintjs/core";
    import { Example } from "@blueprintjs/docs-theme";
    
    function FileInput() {
        const [text, setText] = useState("Choose file...");
        const [buttonText, setButtonText] = useState("Browse");
        
        const handleTextChange = (e) => {
            console.log()
            setText(e.target.value);
        };
    
        const handleButtonTextChange = (e) => {
            setButtonText(e.target.value);
        }
    
        const onInputChange = (e) => {
            const filename = e.target.files[0].name;
            setText(filename);
        }
    
        const options = (
            <>
                <H5>Props</H5>
                <FormGroup label="Text">
                    <InputGroup placeholder="Choose file..." onChange={handleTextChange} value={text} />
                </FormGroup>
                <FormGroup label="Button text">
                    <InputGroup placeholder="Browse" onChange={handleButtonTextChange} value={buttonText} />
                </FormGroup>
            </>
        );

        return(
            <Example options={options}>
                <FileInput text={text} buttonText={buttonText} onInputChange={onInputChange}/>
            </Example>
        );
    }

    export default FileInput;
    `;

    const handleTextChange = (e) => {
        console.log()
        setText(e.target.value);
    };

    const handleButtonTextChange = (e) => {
        setButtonText(e.target.value);
    }

    const onInputChange = (e) => {
        const filename = e.target.files[0].name;
        setText(filename);
    }

    const options = (
        <>
            <H5>Props</H5>
            <FormGroup label="Text">
                <InputGroup placeholder="Choose file..." onChange={handleTextChange} value={text} />
            </FormGroup>
            <FormGroup label="Button text">
                <InputGroup placeholder="Browse" onChange={handleButtonTextChange} value={buttonText} />
            </FormGroup>
        </>
    );

    return(
        <div className="main">
            <Callout title={"File Input"}>
                <Example options={options}>
                    <FileInput text={text} buttonText={buttonText} onInputChange={onInputChange}/>
                </Example>
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

export default FileInputCore;
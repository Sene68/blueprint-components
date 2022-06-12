import * as React from "react";
import { Callout } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import "./Main.scss";

function Main() {
    return(
        <div className="main">
            <Callout title={"Getting Started"}>
                <h6 className="bp4-heading">1. React 프로젝트 생성 </h6>
                <p>
                <CodeBlock
                    text={"npx create-react-app blueprint-components"}
                    language={"javascript"}
                    showLineNumbers={false}
                    theme={dracula}
                />
                </p>
                <h6 className="bp4-heading">2. Blueprint JS 설치 (Yarn 으로 진행)</h6>
                <p>
                    <CodeBlock
                        text={"yarn add @blueprintjs/core"}
                        language={"javascript"}
                        showLineNumbers={false}
                        theme={dracula}
                    />
                </p>
                <h6 className="bp4-heading">3. Blueprint CSS 적용</h6>
                <p>
                    index.js에서 Blueprint CSS import 
                </p>
                <p>
                    <CodeBlock
                        text={"import '@blueprintjs/core/lib/css/blueprint.css';"}
                        language={"javascript"}
                        showLineNumbers={false}
                        theme={dracula}
                    />
                </p>
            </Callout>
        </div>
    );
}

export default Main;
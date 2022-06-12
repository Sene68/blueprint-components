import * as React from "react";
import { Callout, Code } from "@blueprintjs/core";
import "./Main.scss";

function Main() {
    return(
        <div className="main">
            <Callout title={"Getting Started"}>
                <h6 class="bp4-heading">1. React 프로젝트 생성 </h6>
                <p>
                    <Code>{"npx create-react-app blueprint-components"}</Code>
                </p>
                <h6 class="bp4-heading">2. Blueprint JS 설치 (Yarn 으로 진행)</h6>
                <p>
                    <Code>{"yarn add @blueprintjs/core"}</Code>
                </p>
                <h6 class="bp4-heading">3. Blueprint CSS 적용</h6>
                <p>
                    index.js에서 Blueprint CSS import 
                </p>
                <p>
                    <Code>{"import '@blueprintjs/core/lib/css/blueprint.css';"}</Code>
                </p>
            </Callout>
        </div>
    );
}

export default Main;
import { cloneDeep } from "lodash-es";
import React, { useCallback, useReducer } from "react";
import { Callout, Card, Classes, Icon, Intent, Tree } from "@blueprintjs/core";
import { CodeBlock, dracula } from "react-code-blocks";
import { ContextMenu2, Classes as Popover2Classes, Tooltip2 } from "@blueprintjs/popover2";
import "../../main/Main.scss";

function forEachNode(nodes, callback) {
    if (nodes === undefined) {
        return;
    }

    for (const node of nodes) {
        callback(node);
        forEachNode(node.childNodes, callback);
    }
}

function forNodeAtPath(nodes, path, callback) {
    callback(Tree.nodeFromPath(path, nodes));
}

function treeExampleReducer(state, action) {
    switch (action.type) {
        case "DESELECT_ALL":
            const newState1 = cloneDeep(state);
            forEachNode(newState1, node => (node.isSelected = false));
            return newState1;
        case "SET_IS_EXPANDED":
            const newState2 = cloneDeep(state);
            forNodeAtPath(newState2, action.payload.path, node => (node.isExpanded = action.payload.isExpanded));
            return newState2;
        case "SET_IS_SELECTED":
            const newState3 = cloneDeep(state);
            forNodeAtPath(newState3, action.payload.path, node => (node.isSelected = action.payload.isSelected));
            return newState3;
        default:
            return state;
    }
}

function TreeCore() {
    const [nodes, dispatch] = useReducer(treeExampleReducer, initialState);

    const CODE = 
    `
    import { cloneDeep } from "lodash-es";
    import React, { useCallback, useReducer } from "react";
    import { Classes, Icon, Intent, Tree } from "@blueprintjs/core";
    import { ContextMenu2, Classes as Popover2Classes, Tooltip2 } from "@blueprintjs/popover2";
    
    function forEachNode(nodes, callback) {
        if (nodes === undefined) {
            return;
        }
    
        for (const node of nodes) {
            callback(node);
            forEachNode(node.childNodes, callback);
        }
    }
    
    function forNodeAtPath(nodes, path, callback) {
        callback(Tree.nodeFromPath(path, nodes));
    }
    
    function treeExampleReducer(state, action) {
        switch (action.type) {
            case "DESELECT_ALL":
                const newState1 = cloneDeep(state);
                forEachNode(newState1, node => (node.isSelected = false));
                return newState1;
            case "SET_IS_EXPANDED":
                const newState2 = cloneDeep(state);
                forNodeAtPath(newState2, action.payload.path, node => (node.isExpanded = action.payload.isExpanded));
                return newState2;
            case "SET_IS_SELECTED":
                const newState3 = cloneDeep(state);
                forNodeAtPath(newState3, action.payload.path, node => (node.isSelected = action.payload.isSelected));
                return newState3;
            default:
                return state;
        }
    }

    function Tree() {

        const contentSizing = { popoverProps: { popoverClassName: Popover2Classes.POPOVER2_CONTENT_SIZING } };

        const initialState = [
            {
                id: 0,
                hasCaret: true,
                icon: "folder-close",
                label: (
                    <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
                        Folder 0
                    </ContextMenu2>
                ),
            },
            {
                id: 1,
                icon: "folder-close",
                isExpanded: true,
                label: (
                    <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
                        <Tooltip2 content="I'm a folder <3" placement="right">
                            Folder 1
                        </Tooltip2>
                    </ContextMenu2>
                ),
                childNodes: [
                    {
                        id: 2,
                        icon: "document",
                        label: "Item 0",
                        secondaryLabel: (
                            <Tooltip2 content="An eye!">
                                <Icon icon="eye-open" />
                            </Tooltip2>
                        ),
                    },
                    {
                        id: 3,
                        icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
                        label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
                    },
                    {
                        id: 4,
                        hasCaret: true,
                        icon: "folder-close",
                        label: (
                            <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
                                <Tooltip2 content="foo" placement="right">
                                    Folder 2
                                </Tooltip2>
                            </ContextMenu2>
                        ),
                        childNodes: [
                            { id: 5, label: "No-Icon Item" },
                            { id: 6, icon: "tag", label: "Item 1" },
                            {
                                id: 7,
                                hasCaret: true,
                                icon: "folder-close",
                                label: (
                                    <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
                                        Folder 3
                                    </ContextMenu2>
                                ),
                                childNodes: [
                                    { id: 8, icon: "document", label: "Item 0" },
                                    { id: 9, icon: "tag", label: "Item 1" },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                hasCaret: true,
                icon: "folder-close",
                label: "Super secret files",
                disabled: true,
            },
        ];

        const handleNodeCollapse = useCallback((_node, nodePath) => {
            dispatch({
                payload: { path: nodePath, isExpanded: false },
                type: "SET_IS_EXPANDED",
            });
        }, []);
    
        const handleNodeExpand = useCallback((_node, nodePath) => {
            dispatch({
                payload: { path: nodePath, isExpanded: true },
                type: "SET_IS_EXPANDED",
            });
        }, []);
        
        return(
            <Tree
                contents={nodes}
                onNodeCollapse={handleNodeCollapse}
                onNodeExpand={handleNodeExpand}
                className={Classes.ELEVATION_0}
            />
        );
    }

    export default Tree;
    `;

    

    const handleNodeCollapse = useCallback((_node, nodePath) => {
        dispatch({
            payload: { path: nodePath, isExpanded: false },
            type: "SET_IS_EXPANDED",
        });
    }, []);

    const handleNodeExpand = useCallback((_node, nodePath) => {
        dispatch({
            payload: { path: nodePath, isExpanded: true },
            type: "SET_IS_EXPANDED",
        });
    }, []);

    return(
        <div className="main">
            <Callout title={"Tree"}>
                <Card>
                    <Tree
                        contents={nodes}
                        onNodeCollapse={handleNodeCollapse}
                        onNodeExpand={handleNodeExpand}
                        className={Classes.ELEVATION_0}
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

export default TreeCore;

const contentSizing = { popoverProps: { popoverClassName: Popover2Classes.POPOVER2_CONTENT_SIZING } };

const initialState = [
    {
        id: 0,
        hasCaret: true,
        icon: "folder-close",
        label: (
            <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
                Folder 0
            </ContextMenu2>
        ),
    },
    {
        id: 1,
        icon: "folder-close",
        isExpanded: true,
        label: (
            <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
                <Tooltip2 content="I'm a folder <3" placement="right">
                    Folder 1
                </Tooltip2>
            </ContextMenu2>
        ),
        childNodes: [
            {
                id: 2,
                icon: "document",
                label: "Item 0",
                secondaryLabel: (
                    <Tooltip2 content="An eye!">
                        <Icon icon="eye-open" />
                    </Tooltip2>
                ),
            },
            {
                id: 3,
                icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
                label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
            },
            {
                id: 4,
                hasCaret: true,
                icon: "folder-close",
                label: (
                    <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
                        <Tooltip2 content="foo" placement="right">
                            Folder 2
                        </Tooltip2>
                    </ContextMenu2>
                ),
                childNodes: [
                    { id: 5, label: "No-Icon Item" },
                    { id: 6, icon: "tag", label: "Item 1" },
                    {
                        id: 7,
                        hasCaret: true,
                        icon: "folder-close",
                        label: (
                            <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
                                Folder 3
                            </ContextMenu2>
                        ),
                        childNodes: [
                            { id: 8, icon: "document", label: "Item 0" },
                            { id: 9, icon: "tag", label: "Item 1" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        hasCaret: true,
        icon: "folder-close",
        label: "Super secret files",
        disabled: true,
    },
];
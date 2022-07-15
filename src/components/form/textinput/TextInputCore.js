import React , { useState } from "react";
import {  Button, Callout, H5, Icon, IconSize, InputGroup, Intent, Menu, MenuItem, Spinner, Switch, Tag, } from "@blueprintjs/core";
import { Popover2, Tooltip2 } from "@blueprintjs/popover2";
import { CodeBlock, dracula } from "react-code-blocks";
import "../../main/Main.scss";
import { Example } from "@blueprintjs/docs-theme";

function TextInputCore() {
    const [ disabled, setDisabled ] = useState(false);
    const [ filterValue, setFilterValue ] = useState("");
    const [ large, setLarge ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ small, setSmall ] = useState(false);
    const [ tagValue, setTagValue ] = useState("");

    const handleLockClick = () => {
        setShowPassword(!showPassword);
    };

    const handleDisabledChange = () => {
        setDisabled(!disabled);
    };

    const handleLargeChange = () => {
        setLarge(!large);
        setSmall(large === false ? false : true);
    };

    const handleSmallChange = () => {
        setSmall(!small);
        setLarge(small === false ? false : true);
    };

    const handleFilterChange = (e) => {
        const filterValue = e.target.value;
        window.setTimeout(() => setFilterValue(filterValue), 10);
    };

    const handleTagChange = (e) => {
        const tagValue = e.target.value;
        setTagValue(tagValue);
    };


    const maybeSpinner = filterValue ? <Spinner size={IconSize.STANDARD} /> : undefined;

    const lockButton = (
        <Tooltip2 content={`${showPassword ? "Hide" : "Show"} Password`} disabled={disabled}>
            <Button
                disabled={disabled}
                icon={showPassword ? "unlock" : "lock"}
                intent={Intent.WARNING}
                minimal={true}
                onClick={handleLockClick}
            />
        </Tooltip2>
    );

    const permissionsMenu = (
        <Popover2
            content={
                <Menu>
                    <MenuItem text="can edit" />
                    <MenuItem text="can view" />
                </Menu>
            }
            disabled={disabled}
            placement="bottom-end"
        >
            <Button disabled={disabled} minimal={true} rightIcon="caret-down">
                can edit
            </Button>
        </Popover2>
    );

    const resultsTag = <Tag minimal={true}>{Math.floor(10000 / Math.max(1, Math.pow(tagValue.length, 2)))}</Tag>;

    const options = (
        <>
            <H5>Props</H5>
            <Switch label="Disabled" onChange={handleDisabledChange} checked={disabled} />
            <Switch label="Large" onChange={handleLargeChange} checked={large} />
            <Switch label="Small" onChange={handleSmallChange} checked={small} />
        </>
    );

    return(
        <div className="main">
            <Callout title={"Button Group Default"}>
                <Example options={options}>
                    <Tooltip2 content="My input value state is updated asynchronously with a 10ms delay">
                        <InputGroup
                            asyncControl={true}
                            disabled={disabled}
                            large={large}
                            leftIcon="filter"
                            onChange={handleFilterChange}
                            placeholder="Filter histogram..."
                            rightElement={maybeSpinner}
                            small={small}
                            value={filterValue}
                        />
                    </Tooltip2>
                    <InputGroup
                        disabled={disabled}
                        large={large}
                        placeholder="Enter your password..."
                        rightElement={lockButton}
                        small={small}
                        type={showPassword ? "text" : "password"}
                    />
                    <InputGroup
                        disabled={disabled}
                        large={large}
                        leftElement={<Icon icon="tag" />}
                        onChange={handleTagChange}
                        placeholder="Find tags"
                        rightElement={resultsTag}
                        small={small}
                        value={tagValue}
                    />
                    <InputGroup
                        disabled={disabled}
                        large={large}
                        placeholder="Add people or groups..."
                        rightElement={permissionsMenu}
                        small={small}
                    />
                </Example>
            </Callout>
        </div>
    );
}

export default TextInputCore;
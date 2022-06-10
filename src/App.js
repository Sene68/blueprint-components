import { Button, ButtonGroup, Divider } from "@blueprintjs/core";

function App() {
  return (
    <ButtonGroup minimal={true} vertical={false}>
        <Button text="File" />
        <Button text="Edit" />
        <Divider />
        <Button text="Create" />
        <Button text="Delete" />
        <Divider />
        <Button icon="add" />
        <Button icon="remove" />
    </ButtonGroup>
  );
}

export default App;

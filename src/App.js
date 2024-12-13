import React from "react";
import { CircleIconButton, Title } from "playbook-ui";

export default function App() {
  return (
    <div className="App">
      <CircleIconButton icon="plus" variant="primary" />
      <Title text="Welcome to Playbook" />
    </div>
  );
}

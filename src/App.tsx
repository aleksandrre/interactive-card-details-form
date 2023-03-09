import React, { Fragment } from "react";
import "./reset.css";
import "./app.styled.ts";
import GlobalStyle from "./globalstyles";
import Divup from "./components/divup/DivUp";
import DivDown from "./components/divdown/DivDown";
import { useState } from "react";
import { Divdiv } from "./app.styled";

function App() {
  const [object, setObject] = useState<ObjectType>();

  return (
    <Divdiv>
      <Fragment>
        <GlobalStyle />
        <Divup object={object} />
        <DivDown setObject={setObject} />
      </Fragment>
    </Divdiv>
  );
}

export default App;

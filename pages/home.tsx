import { Button, TextField } from "@material-ui/core";
import React, { CSSProperties } from "react";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Stack space={1}>
      <h1>Testing bro</h1>
      <p>ok</p>
      <h1>Testing bro</h1>
    </Stack>
  );
};

interface StackProps {
  space: number;
  align?: CSSProperties["placeItems"];
}
const Stack = styled.div<StackProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: ${({ space }) => `${space}px`};
  place-items: ${({ align }) => align || "start"};
`;

const Box = styled.div`
  background: red;
`;

const Wrapper = styled.div`
  padding: 1em;
  background: blue;
  margin: 2em;
`;

const Aside = styled(Wrapper)`
  padding: 2em;
  background: green;
`;

const TextLink = styled.a`
  color: red;

  ${Aside} & {
    color: yellow;
  }
`;

export default Home;

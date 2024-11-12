import React from "react";
import Header from "../component/header/header";
import styled from "styled-components";

const Text = styled.div`
  font-family: "SCDream4";
`;

export default function Main() {
  return (
    <div>
      <Header />
      <Text>우선 아무 내용이나 넣습니다.</Text>
    </div>
  );
}

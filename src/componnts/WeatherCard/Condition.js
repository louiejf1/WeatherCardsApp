import React from "react";
import styled from "styled-components";

const Temp = styled.h1`
  font-size: 1.5rem;
`;

const TempCondition = styled.h3`
  font-size: 1rem;
`;

const Condition = () => {
  return (
    <>
      <Temp>20 °C</Temp>
      <TempCondition>Clouds</TempCondition>
    </>
  );
};

export default Condition;

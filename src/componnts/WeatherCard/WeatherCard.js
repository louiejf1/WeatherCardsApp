import React from "react";
import styled from "styled-components";
import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";

const Card = styled.div`
  margin: 0 auto;
  background: linear-gradient(to top, red, rgb(109, 169, 204));
  width: 200px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  color: rgb(235, 235, 235);
`;

export const WeatherCard = () => {
  return (
    <>
      <Card>
        <Location />
        <Icon />
        <Condition />
      </Card>
    </>
  );
};

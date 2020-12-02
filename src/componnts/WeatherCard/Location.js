import React from "react";
import styled from "styled-components";

const LocationDiv = styled.div`
  text-align: center;
`;

const City = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 1.8rem;
`;

const Country = styled.h2`
  font-family: "Yellowtail", cursive;
`;

const Location = () => {
  return (
    <LocationDiv>
      <City>Houston</City>
      <Country>US</Country>
    </LocationDiv>
  );
};

export default Location;

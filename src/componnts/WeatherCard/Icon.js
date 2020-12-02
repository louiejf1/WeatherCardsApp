import React from "react";
import image from "../../img/cloudy.png";
import styled from "styled-components";

const Image = styled.img`
  max-height: 50px;
  max-width: 50px;
  margin: 0 auto;
`;

const Icon = () => {
  return (
    <>
      <Image src={image} alt="Icon" />
    </>
  );
};

export default Icon;

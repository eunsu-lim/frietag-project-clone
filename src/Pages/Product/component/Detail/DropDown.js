import React from "react";
import styled from "styled-components";

function DropDown() {
  return (
    <SizeContainer>
      <SizeLabel>Size</SizeLabel>
      <div>
        <SizeSelector name="" id="">
          {dropDownOptions.map(el => (
            <option value="">{el.value}</option>
          ))}
        </SizeSelector>
      </div>
    </SizeContainer>
  );
}

export default DropDown;

const SizeContainer = styled.div`
  margin-bottom: 20px;
`;

const SizeLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const SizeSelector = styled.select`
  border: none;
  border-bottom: 2px solid #000;
  border-radius: 0;
  padding: 0;
  height: auto;
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
  font-size: 18px;
`;

const dropDownOptions = [
  {
    value: "S",
  },
  {
    value: "M",
  },
  {
    value: "L",
  },
  {
    value: "XL",
  },
];

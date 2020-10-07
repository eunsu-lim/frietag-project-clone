import React from "react";
import styled from "styled-components";

function SelectColor() {
  return (
    <Color>
      <form>
        <ColorLabel htmlFor="">Colors</ColorLabel>
        <div>
          <BorderContainer>
            <ColorInput value="Red" name="Color" type="radio" />
            <Border>
              <ImgColor
                src="https://freitag.rokka.io/neo-grid-2/7c6e096f36e5871b8940195f33aff2a8992c9a03/e783-male-shirt-black-lindasuter-rgb-highres.jpg"
                alt=""
              />
            </Border>
            <ColorInput value="Orange" name="Color" type="radio" />
            <Border>
              <ImgColor
                src="https://freitag.rokka.io/neo-grid-2/67b06c86a145bc8713c340851a0a5ef5127a0a5f/e-783-65-male-shirt-urban-chic.jpg"
                alt=""
              />
            </Border>
            <ColorInput value="Yellow" name="Color" type="radio" />
            <Border>
              <ImgColor
                src="https://freitag.rokka.io/neo-grid-2/077b9ceefd7ff8de70b9d16c7588889ec661789d/e783-58-male-shirt-glacier-grey.jpg"
                alt=""
              />
            </Border>
            <ColorInput value="Green" name="Color" type="radio" />
            <Border>
              <ImgColor
                src="https://freitag.rokka.io/neo-grid-2/d333c6e68ede73c0f975ef2f83f937bff43dc3e0/e783-male-shirt-stripedblacknature.jpg"
                alt=""
              />
            </Border>
            <ColorInput value="Blue" name="Color" type="radio" />
            <Border>
              <ImgColor
                src="https://freitag.rokka.io/neo-grid-2/7c6e096f36e5871b8940195f33aff2a8992c9a03/e783-male-shirt-black-lindasuter-rgb-highres.jpg"
                alt=""
              />
            </Border>
            <ColorInput value="Navy" name="Color" type="radio" />
            <Border>
              <ImgColor
                src="https://freitag.rokka.io/neo-grid-2/d6cf69ef97e7532f89c19b285a1ac31eabcdf353/e-783-63-male-shirt-shale.jpg"
                alt=""
              />
            </Border>
          </BorderContainer>
        </div>
      </form>
    </Color>
  );
}

export default SelectColor;

const Color = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ColorLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const BorderContainer = styled.div`
  display: flex;
`;

const ColorInput = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
  margin: 0 5px 0 -1px;
`;

const Border = styled.div`
  width: 45px;
  height: 45px;
  margin: 10px 7px 0 0;
  /* box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #b2b2b2; */
  overflow: hidden;
`;

const ImgColor = styled.img`
  transform: scale(10);
  cursor: pointer;
`;

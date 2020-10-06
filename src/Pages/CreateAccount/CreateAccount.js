import React from "react";
import styled, { css } from "styled-components";
import { Person } from "@styled-icons/bootstrap/Person";
import { ExclamationCircleFill } from "@styled-icons/bootstrap/ExclamationCircleFill";

function CreateAccount() {
  return (
    <>
      <Main>
        <CreateAccountContainer>
          <Header>
            <General>
              <p>General *</p>
            </General>
          </Header>
          <Section>
            <h1 primary>WELCOME TO THE F-AMILY</h1>
            <div>
              <Label for="userName">Username</Label>
              <input id="userName" />
              <Alert>
                <ExclamationCircleFill color="red" width="20px" />
                <span>Username field is required.</span>
              </Alert>
            </div>
            <div>
              <Label for="email">E-mail address</Label>
              <input id="email" />
              <Alert>
                <ExclamationCircleFill color="red" width="20px" />
                <span>E-mail address field is required.</span>
              </Alert>
            </div>
            <div>
              <Label for="confirmEmail">Confirm e-mail address</Label>
              <input id="confirmEmail" />
              <Alert>
                <ExclamationCircleFill color="red" width="20px" />
                <span>Confirm e-mail address field is required.</span>
              </Alert>
            </div>
            <p>
              You will be able to set your password after you've confirmed your
              email address.
            </p>
          </Section>
        </CreateAccountContainer>
        <FormSumit>
          <button type="button">
            <Person width="20px" />
            &nbsp; CREATE F-PROFILE
          </button>
        </FormSumit>
      </Main>
    </>
  );
}

export default CreateAccount;

const flexBox = (justify, align, content) => css`
  display: flex;
  justify-content: ${justify || "default"};
  align-items: ${align || "default"};
  align-content: ${content || "default"};
`;

const Main = styled.main`
  padding-top: 100px;
`;

const CreateAccountContainer = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  border: 1px solid #dedede;
`;

const Header = styled.header`
  width: 100%;
  height: 45px;
  background-color: #dedede;
`;

const General = styled.div`
  width: 105px;
  height: 100%;
  font-size: 19px;
  font-weight: 600;
  text-align: center;
  ${flexBox("center", "center")};
  background-color: #adc088;
`;

const Section = styled.section`
  padding: 30px 20px;

  h1 {
    margin: 1rem 0;
    font-size: 60px;
  }
  p {
    font-size: 13px;
    font-style: italic;
    color: #b2b2b2;
  }
  div {
    margin-bottom: 20px;

    input {
      margin-right: 20px;
    }
  }
  input {
    width: 328px;
    padding: 0 0 10px 0;
    border: none;
    border-bottom: solid 2px #000;
    background: none;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

const Alert = styled.span`
  span {
    padding-left: 5px;
  }
`;

const FormSumit = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 20px;
  button {
    ${flexBox("center", "center")};
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }
`;

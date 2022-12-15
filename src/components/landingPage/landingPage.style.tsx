import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  padding: 0;
  margin: 0;
`;

export const LeftSideWrapper = styled.div`
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  height: 100px;
  position: absolute;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #24221f;
  height: 400px;
  width: 400px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const TitleContainerWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0;
`;

export const LoginSvgWrapper = styled.img`
  color: #afb6c2;
  height: 24px;
`;

export const InputContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid #afb6c2;
`;

export const H2Wrapper = styled.h2`
  margin-top: 0;
  color: #afb6c2;
  font-size: 20px;
`;

export const PWrapper = styled.p`
  color: #afb6c2;
  font-size: 15px;
  margin: 0;
`;

export const LoginInputWrapper = styled.input`
  border: 0px;
  width: 100%;
  height: 40px;
  background: transparent;
  color: #afb6c2;
  &:focus {
    outline: none;
  }
`;

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
`;

export const ButtonForgotWrapper = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;

export const ButtonEntrarWrapper = styled.button`
  border-radius: 5px;
  border-width: 0;
  width: 100%;
  height: 50px;
  background: #188d1e;
  cursor: pointer;
  &:hover {
    background: #127417;
  }
  &:active {
    background: #188d1e;
  }
`;

export const FormControlWrapper = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  padding-left: 1.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  &:hover input ~ .checkmark {
    border: 2px solid #188d1e;
  }
  &input:checked ~ .checkmark {
    border: 2px solid #188d1e;
    background-color: #188d1e;
  }
  &input:checked ~ .checkmark:after {
    display: block;
  }
  &.checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckMarkWrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border: 2px solid #afb6c2;
  border-radius: 5px;
  background: transparent;
  appearance: none;
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

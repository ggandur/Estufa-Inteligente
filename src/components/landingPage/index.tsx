import {
  LandingPageWrapper,
  LeftSideWrapper,
  LogoWrapper,
  ColumnWrapper,
  BoxWrapper,
  FormWrapper,
  TitleContainerWrapper,
  LoginSvgWrapper,
  InputContainerWrapper,
  H2Wrapper,
  PWrapper,
  LoginInputWrapper,
  ForgotPasswordWrapper,
  ButtonForgotWrapper,
  ButtonEntrarWrapper,
  FormControlWrapper,
  CheckMarkWrapper,
} from "./landingPage.style";
import { getData } from "../functions/getData";
import DataType from "../../interfaces/dataType";

type LandingPageProps = {
  setData: (data: DataType) => void;
};

function LandingPage(props: LandingPageProps) {
  return (
    <LandingPageWrapper>
      <LeftSideWrapper>
        <LogoWrapper>
          <img src="src/assets/leafIcon.png" height={100}></img>
        </LogoWrapper>
        <ColumnWrapper>
          <BoxWrapper>
            <FormWrapper>
              <TitleContainerWrapper>
                <LoginSvgWrapper
                  src="src/assets/login.svg"
                  height={24}
                ></LoginSvgWrapper>
                <H2Wrapper>Faça seu login</H2Wrapper>
              </TitleContainerWrapper>
              <PWrapper>Entre com suas informações de cadastro</PWrapper>
              <PWrapper>E-mail</PWrapper>
              <InputContainerWrapper>
                <img
                  src="src/assets/email.svg"
                  id="email_svg"
                  height={16}
                ></img>
                <LoginInputWrapper placeholder="Digite seu e-mail aqui"></LoginInputWrapper>
              </InputContainerWrapper>
              <PWrapper>Senha</PWrapper>
              <InputContainerWrapper>
                <img src="src/assets/password.svg" id="password_svg"></img>
                <LoginInputWrapper placeholder="Digite sua senha aqui"></LoginInputWrapper>
              </InputContainerWrapper>
              <ForgotPasswordWrapper>
                <FormControlWrapper>
                  <input type="checkbox" />
                  <PWrapper>Lembre-me</PWrapper>
                  <CheckMarkWrapper />
                </FormControlWrapper>
                <ButtonForgotWrapper>
                  <PWrapper>Esqueci minha senha</PWrapper>
                </ButtonForgotWrapper>
              </ForgotPasswordWrapper>
              <ButtonEntrarWrapper onClick={() => getData(props.setData)}>
                <H2Wrapper>Entrar</H2Wrapper>
              </ButtonEntrarWrapper>
            </FormWrapper>
          </BoxWrapper>
        </ColumnWrapper>
      </LeftSideWrapper>
    </LandingPageWrapper>
  );
}

export default LandingPage;

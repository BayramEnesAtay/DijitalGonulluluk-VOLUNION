import React from "react";
import {
  LoginContainer,
  LoginHeading,
  FormGroup,
  InputField,
  SubmitButton,
  FormWrapper,
  AltLogin,
  AltButtons,
  AltButton,
  SignUpText
} from "../styles/ValuenterryLogIn.js";
import { Link } from "react-router-dom";

function LoginForm({ title, signupLink }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${title}: ${email} / ${password}`);
  };

  return (
    <LoginContainer>
      <LoginHeading>{title}</LoginHeading>

      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <FormGroup>
            <label>E-Mail</label>
            <InputField
              type="email"
              placeholder="E-posta adresinizi giriniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Şifre</label>
            <InputField
              type="password"
              placeholder="Şifrenizi giriniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>

          <SubmitButton type="submit">Giriş Yap</SubmitButton>
        </FormWrapper>
      </form>

      <FormWrapper>
        <AltLogin>veya</AltLogin>

        <AltButtons>
          <AltButton>Google ile Giriş</AltButton>
        </AltButtons>

        {/* signupLink varsa göster */}
        {signupLink && (
          <SignUpText>
            Hesabınız yok mu?
            <Link to={signupLink}>Hesap Oluştur</Link>
          </SignUpText>
        )}
      </FormWrapper>
    </LoginContainer>
  );
}

export default LoginForm;

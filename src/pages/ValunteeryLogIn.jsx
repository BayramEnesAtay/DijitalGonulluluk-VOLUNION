import React from "react";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  LoginHeading,
  FormGroup,
  InputField,
  SubmitButton,
  AltLogin,
  AltButtons,
  AltButton,
  SignUpText,
  FormWrapper
} from "../styles/ValuenterryLogIn.js";

function VolunteerLogin() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <LoginHeading>Gönüllü Girişi</LoginHeading>

      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <FormGroup>
            <label>Kullanıcı Adı</label>
            <InputField
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Kullanıcı adınızı giriniz"
            />
          </FormGroup>

          <FormGroup>
            <label>Şifre</label>
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifrenizi giriniz"
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

        <SignUpText>
          Hesabınız yok mu?
          <Link to="/volunteer-signup">Hesap Oluştur</Link>
        </SignUpText>
      </FormWrapper>
    </LoginContainer>
  );
}

export default VolunteerLogin;

import React from "react";
import {
  LoginContainer,
  LoginHeading,
  FormGroup,
  InputField,
  SubmitButton,
  AltLogin,
  AltButtons,
  AltButton
} from "../styles/ValuenterryLogIn.js";

function VolunteerLogin() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Kullanıcı: ${username}\nŞifre: ${password}`);
  };

  const handleGoogleLogin = () => {
    alert("Google ile giriş seçildi.");
  };

  return (
    <LoginContainer>
      <LoginHeading>Gönüllü Girişi</LoginHeading>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="username">Kullanıcı Adı</label>
          <InputField
            id="username"
            type="text"
            placeholder="Kullanıcı adınızı giriniz"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Şifre</label>
          <InputField
            id="password"
            type="password"
            placeholder="Şifrenizi giriniz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Giriş Yap</SubmitButton>
      </form>

      <AltLogin>
        veya
        <AltButtons>
          <AltButton type="button" onClick={handleGoogleLogin}>
            Google ile Giriş
          </AltButton>
        </AltButtons>
      </AltLogin>
    </LoginContainer>
  );
}

export default VolunteerLogin;

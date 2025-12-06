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
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${title}: ${username} / ${password}`);
  };

  return (
    <LoginContainer>
      <LoginHeading>{title}</LoginHeading>

      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <FormGroup>
            <label>Kullanıcı Adı</label>
            <InputField
              type="text"
              placeholder="Kullanıcı adınızı giriniz"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

        {/* 🔥 signupLink varsa göster, yoksa hiç render etme */}
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

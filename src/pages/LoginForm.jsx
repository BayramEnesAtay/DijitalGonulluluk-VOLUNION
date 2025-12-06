import React from "react";
import {
  LoginContainer,
  LoginHeading,
  FormGroup,
  InputField,
  SubmitButton,
  FormWrapper,
  SignUpText
} from "../styles/ValuenterryLogIn.js";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function LoginForm({ title, signupLink }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate(); // 🔥 Yönlendirme için eklendi

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // 🔥 Kullanıcı tipine göre yönlendirme
      if (title === "Gönüllü Girişi") {
        navigate("/volunteer-dashboard");
      } else if (title === "Firma Girişi") {
        navigate("/company-dashboard"); // bunu sonra yaparız
      } else if (title === "Yönetici Girişi") {
        navigate("/admin-dashboard"); // istersen ekleriz
      }

    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("Bu e-posta ile kayıtlı kullanıcı bulunamadı.");
      } else if (err.code === "auth/wrong-password") {
        setError("Şifre yanlış.");
      } else {
        setError("Giriş başarısız: " + err.message);
      }
    }
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

          {error && (
            <p style={{ color: "red", marginTop: "5px", fontSize: "0.9rem" }}>
              {error}
            </p>
          )}

          <SubmitButton type="submit">Giriş Yap</SubmitButton>
        </FormWrapper>
      </form>

      {signupLink && (
        <FormWrapper style={{ marginTop: "10px" }}>
          <SignUpText>
            Hesabınız yok mu?
            <Link to={signupLink}>Hesap Oluştur</Link>
          </SignUpText>
        </FormWrapper>
      )}
    </LoginContainer>
  );
}

export default LoginForm;

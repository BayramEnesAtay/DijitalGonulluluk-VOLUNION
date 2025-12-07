import React, { useState } from "react";
import {
  LoginContainer,
  LoginHeading,
  FormGroup,
  InputField,
  SubmitButton,
  FormWrapper,
  SignUpText,
  FullPageWrapper,
  NavBar,
  BrandText,
  NavButton,
  RememberMeWrapper,
  RememberLabel
} from "../styles/ValuenterryLogIn.js";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../firebase";

function LoginForm({ title, signupLink }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(auth, persistenceType);

      await signInWithEmailAndPassword(auth, email, password);

      if (title === "Gönüllü Girişi") {
        navigate("/volunteer-dashboard");
      } else if (title === "Firma Girişi") {
        navigate("/company-dashboard");
      } else if (title === "Yönetici Girişi") {
        navigate("/admin-dashboard");
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
    <FullPageWrapper>
      
      <NavBar>
        <BrandText>VOLUNION</BrandText>
        <NavButton to="/">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Anasayfa
        </NavButton>
      </NavBar>

      <LoginContainer>
        <LoginHeading>{title}</LoginHeading>

        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <FormGroup>
              <label>E-Mail</label>
              <InputField
                id="email" // 🔥 Eklendi: Tarayıcının alanı tanıması için
                type="email"
                name="email"
                autoComplete="username" // Şifreyle eşleşmesi için 'username' olarak kalmalı
                placeholder="E-posta adresinizi giriniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Şifre</label>
              <InputField
                id="password" // 🔥 Eklendi: Tarayıcının şifre alanı olduğunu anlaması için
                type="password"
                name="password"
                autoComplete="current-password" // Şifrenin otomatik dolmasını sağlar
                placeholder="Şifrenizi giriniz"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>

            <RememberMeWrapper>
              <input 
                type="checkbox" 
                id="rememberMe" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ cursor: "pointer", width: "16px", height: "16px" }}
              />
              <RememberLabel htmlFor="rememberMe">Beni Hatırla</RememberLabel>
            </RememberMeWrapper>

            {error && (
              <p style={{ color: "#ff6b6b", marginTop: "5px", fontSize: "0.9rem", textAlign: 'left' }}>
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
    </FullPageWrapper>
  );
}

export default LoginForm;
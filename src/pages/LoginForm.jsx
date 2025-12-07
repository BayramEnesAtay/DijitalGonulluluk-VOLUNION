import React from "react";
import {
  LoginContainer,
  LoginHeading,
  FormGroup,
  InputField,
  SubmitButton,
  FormWrapper, // Form içindeki düzen için kullanılan mevcut wrapper
  SignUpText,
  // 🔥 YENİ EKLENENLER:
  FullPageWrapper,
  NavBar,
  BrandText,
  NavButton
} from "../styles/ValuenterryLogIn.js";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function LoginForm({ title, signupLink }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
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
    /* 🔥 Sayfa Arka Planı ve Düzeni */
    <FullPageWrapper>
      
      {/* 🔥 SOL ÜST KÖŞE: LOGO VE ANASAYFA BUTONU */}
      <NavBar>
        <BrandText>VONUION</BrandText>
        
        <NavButton to="/">
          {/* Geri Dönüş İkonu (SVG) */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Anasayfa
        </NavButton>
      </NavBar>

      {/* Mevcut Login Kartı */}
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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignUpContainer,
  SignUpHeading,
  FormWrapper,
  FormGroup,
  InputField,
  ActionButton,
  ErrorText,
  SignInText
} from "../styles/ValuenterrySignUp.js";

function VolunteerSignup() {
  const [step, setStep] = useState(1);

  // 1. aşama verileri
  const [form1, setForm1] = useState({
    fullname: "",
    tc: "",
    phone: "",
    email: ""
  });

  const [errors1, setErrors1] = useState({});

  // 2. aşama verileri → sadece şifre
  const [form2, setForm2] = useState({
    password: ""
  });

  const [errors2, setErrors2] = useState({});

  /* 🔥 1. aşama validasyon */
/* 🔥 1. aşama validasyon */
const handleNext = () => {
  let newErrors = {};

  if (!form1.fullname) newErrors.fullname = "Bu alan boş bırakılamaz";
  if (!form1.tc) newErrors.tc = "Bu alan boş bırakılamaz";
  if (!form1.phone) newErrors.phone = "Bu alan boş bırakılamaz";

  // ❌ Email artık burada kontrol edilmiyor
  // if (!form1.email) newErrors.email = "Boş bırakılmaz";

  setErrors1(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setStep(2);
  }
};


  /* 🔥 2. aşama validasyon */
  const handleSubmit = () => {
    let newErrors = {};

    if (!form2.password) newErrors.password = "Bu alan boş bırakılamaz";

    setErrors2(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Kayıt başarılı!");
      // Firebase register burada yapılacak
    }
  };

  return (
    <SignUpContainer>
      <SignUpHeading>Gönüllü Kayıt</SignUpHeading>

      {/* ------------------ 1. AŞAMA ------------------ */}
      {step === 1 && (
        <FormWrapper>
          <FormGroup>
            <label>Ad Soyad</label>
            <InputField
              type="text"
              placeholder="Adınızı ve soyadınızı giriniz"
              value={form1.fullname}
              onChange={(e) => setForm1({ ...form1, fullname: e.target.value })}
            />
            {errors1.fullname && <ErrorText>{errors1.fullname}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <label>TC Kimlik No</label>
            <InputField
              type="text"
              placeholder="TC Kimlik Numaranız"
              value={form1.tc}
              onChange={(e) => setForm1({ ...form1, tc: e.target.value })}
            />
            {errors1.tc && <ErrorText>{errors1.tc}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <label>Telefon Numarası</label>
            <InputField
              type="text"
              placeholder="Telefon numaranızı giriniz"
              value={form1.phone}
              onChange={(e) => setForm1({ ...form1, phone: e.target.value })}
            />
            {errors1.phone && <ErrorText>{errors1.phone}</ErrorText>}
          </FormGroup>

          <ActionButton onClick={handleNext}>Devam Et</ActionButton>
        </FormWrapper>
      )}

      {/* ------------------ 2. AŞAMA ------------------ */}
      {step === 2 && (
        <FormWrapper>
          <FormGroup>
            <label>E-Mail</label>
            <InputField
              type="email"
              placeholder="E-posta adresiniz"
              value={form1.email}
              onChange={(e) => setForm1({ ...form1, email: e.target.value })}
            />
            {errors1.email && <ErrorText>{errors1.email}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <label>Şifre</label>
            <InputField
              type="password"
              placeholder="Şifrenizi oluşturun"
              value={form2.password}
              onChange={(e) =>
                setForm2({ ...form2, password: e.target.value })
              }
            />
            {errors2.password && <ErrorText>{errors2.password}</ErrorText>}
          </FormGroup>

          <ActionButton onClick={handleSubmit}>Hesap Oluştur</ActionButton>
        </FormWrapper>
      )}

      {/* Giriş linki */}
      <SignInText>
        Hesabınız var mı?
        <Link to="/volunteer-login">Giriş Yap</Link>
      </SignInText>

    </SignUpContainer>
  );
}

export default VolunteerSignup;

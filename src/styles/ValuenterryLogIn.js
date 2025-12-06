// src/styles/ValuenterryLogIn.js
import styled from "styled-components";

/* 🔥 Form içeriğini ortalayan wrapper */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: center;        /* Tüm içeriği ortala */
`;

/* 🔥 Login kutusu (ortada duran kart) */
export const LoginContainer = styled.div`
  width: 100%;
  max-width: 430px;

  padding: 2.2rem 2rem;

  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);

  border-radius: 20px;
  margin: 0 auto;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;   /* Kart ortada */

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
`;

/* Başlık */
export const LoginHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  text-align: center;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
`;

/* Input bölümü */
export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;      /* Label ve input sola yatik */

  label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.85);
  }
`;

/* Input alanı */
export const InputField = styled.input`
  width: 100%;
  max-width: 360px;        /* Başlığın dışına taşmasın */
  padding: 0.85rem;
  border-radius: 10px;

  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.18);
  color: white;
  outline: none;

  &:focus {
    border-color: #4ecbff;
    box-shadow: 0 0 10px rgba(78, 203, 255, 0.6);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

/* Giriş Yap butonu */
export const SubmitButton = styled.button`
  width: 100%;
  max-width: 360px;        /* Inputlarla aynı genişlik */
  margin-top: 1rem;
  padding: 0.85rem;

  border: none;
  border-radius: 10px;

  background: linear-gradient(135deg, #3aa8ff, #1f7be5);
  color: white;

  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;

  transition: 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    background: linear-gradient(135deg, #6ddcff, #3aa8ff);
    box-shadow:
      0 0 12px rgba(109, 220, 255, 0.8),
      0 0 25px rgba(58, 168, 255, 0.6);
  }
`;

/* "veya" yazısı */
export const AltLogin = styled.div`
  margin-top: 1.8rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.9;
`;

/* Google butonu – ortalı */
export const AltButtons = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: center;    /* Ortala */
`;

/* Google ile Giriş butonu */
export const AltButton = styled.button`
  padding: 0.6rem 1.8rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 0.9rem;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.25);
  }
`;

/* Hesap oluşturma metni – ortalı */
export const SignUpText = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;        /* Ortada */
  font-size: 0.9rem;
  opacity: 0.85;

  a {
    color: #4ecbff;
    margin-left: 5px;
    text-decoration: underline;
  }
`;

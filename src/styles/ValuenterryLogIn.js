// src/styles/ValuenterryLogIn.js
import styled from "styled-components";

/* Form içeriğini ortalayan wrapper */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

/* Login kutusu (ortada duran kart) */
export const LoginContainer = styled.div`
  width: 100%;
  max-width: 430px;

  padding: 2.2rem 2rem;

  /* 🔥 Kart Rengi: Biraz daha açıldı, daha cam gibi (Glassmorphism) */
  background: rgba(40, 55, 100, 0.35); 
  border: 1px solid rgba(100, 120, 180, 0.3); /* Çerçeve daha belirgin ve açık */
  backdrop-filter: blur(15px);

  border-radius: 20px;
  margin: 0 auto;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
`;

/* Başlık */
export const LoginHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  text-align: center;
  /* Glow efekti biraz daha maviye çekildi */
  text-shadow: 0 0 15px rgba(60, 80, 160, 0.5);
`;

/* Input bölümü */
export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
  }
`;

/* Input alanı */
export const InputField = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 0.85rem;
  border-radius: 10px;

  /* 🔥 Inputlar: Daha açık, temiz bir lacivert zemin */
  border: 1px solid rgba(120, 140, 200, 0.4);
  background: rgba(40, 55, 100, 0.25);
  color: white;
  outline: none;

  &:focus {
    /* Focus olunca canlı bir lacivert */
    border-color: #4b6cb7;
    box-shadow: 0 0 12px rgba(75, 108, 183, 0.6);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

/* Giriş Yap butonu */
export const SubmitButton = styled.button`
  width: 100%;
  max-width: 360px;
  margin-top: 1rem;
  padding: 0.85rem;

  border: none;
  border-radius: 10px;

  /* 🔥 Buton: Siyahımsı lacivertten, daha 'Royal' ve canlı bir degradeye geçildi */
  background: linear-gradient(135deg, #3a559a, #1A244A);
  color: white;

  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;

  transition: 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    /* Hoverda daha parlak */
    background: linear-gradient(135deg, #4b6cb7, #263875);
    box-shadow:
      0 0 12px rgba(75, 108, 183, 0.7),
      0 0 25px rgba(26, 36, 74, 0.5);
  }
`;

/* "veya" yazısı */
export const AltLogin = styled.div`
  margin-top: 1.8rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.9;
  color: white;
`;

/* Google butonu – ortalı */
export const AltButtons = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

/* Google ile Giriş butonu */
export const AltButton = styled.button`
  padding: 0.6rem 1.8rem;
  border-radius: 10px;

  /* Daha yumuşak kenarlıklar */
  border: 1px solid rgba(120, 140, 200, 0.4);
  background: rgba(40, 55, 100, 0.2);
  color: white;
  font-size: 0.9rem;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(60, 80, 140, 0.35);
    box-shadow: 0 10px 20px rgba(40, 55, 100, 0.3);
  }
`;

/* Hesap oluşturma metni – ortalı */
export const SignUpText = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.9;

  a {
    /* Link rengi: Koyu lacivert yerine daha okunabilir, parlak mavi */
    color: #6a89cc;
    margin-left: 5px;
    text-decoration: underline;
    
    &:hover {
        color: #82ccdd;
    }
  }
`;
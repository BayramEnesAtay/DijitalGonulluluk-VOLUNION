import styled from "styled-components";

/* 🔥 YENİ: Ekranın tamamını kaplayan arka plan */
export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* 🔥 İstenen #1E2A53 rengi ve onun çok yakın koyu tonu */
  background: linear-gradient(135deg, #1E2A53 0%, #151e3b 100%);
`;

/* Ortadaki kart */
export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 2.2rem 2.2rem;
  
  /* 🔥 Koyu Cam Efekti -> #1E2A53 (RGB: 30, 42, 83) tabanlı */
  background: rgba(30, 42, 83, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);

  border-radius: 20px;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* Gölge de ana renge uyumlu */
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
`;

/* Başlık */
export const SignUpHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(255,255,255,0.2);
`;

/* Form alanı wrapper */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.7); 
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.85rem;
  border-radius: 10px;

  /* 🔥 Input Arka Planı -> #1E2A53 (RGB: 30, 42, 83) */
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(30, 42, 83, 0.6);
  color: white;
  outline: none;

  &:focus {
    /* Focus rengi #1E2A53 ve parlaması */
    border-color: #4b5e96; /* #1E2A53'ün görünür olması için hafif açık tonu */
    box-shadow: 0 0 10px rgba(30, 42, 83, 0.8);
    background: rgba(30, 42, 83, 0.9);
  }

  &::placeholder {
    color: rgba(255,255,255,0.4);
  }
`;

/* Düğmeler */
export const ActionButton = styled.button`
  width: 100%;
  margin-top: 1.3rem;
  padding: 0.9rem;

  border: none;
  border-radius: 10px;

  /* 🔥 Buton rengi: Tamamen #1E2A53 tonları */
  background: linear-gradient(135deg, #2d3e75, #1E2A53);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;

  transition: 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    /* Hoverda hafif açılma */
    background: linear-gradient(135deg, #3e5291, #1E2A53);
    box-shadow:
      0 0 12px rgba(62, 82, 145, 0.8),
      0 0 25px rgba(30, 42, 83, 0.6);
  }
`;

/* 🔥 Inline hata mesajları */
export const ErrorText = styled.span`
  font-size: 0.8rem;
  color: #ff6b6b; 
  margin-top: 4px;
  display: block;
`;

export const SignInText = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.85;

  a {
    /* Link rengi: #1E2A53'ün okunabilir (açık) versiyonu */
    color: #6d83c2; 
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    margin-left: 5px;
    
    &:hover {
        color: #8fa1d6;
    }
  }
`;
import styled from "styled-components";
import { Link } from "react-router-dom";

/* 🔥 Ekranın tamamını kaplayan arka plan 
   - Navbar için flex-direction: column ve justify-content: flex-start yapıldı.
   - Scroll bar kaldırıldı (overflow: hidden).
*/
export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;       /* 🔥 Tam ekran yüksekliği (min-height yerine height) */
  overflow: hidden;    /* 🔥 Scroll bar tamamen gizlendi */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  /* #1E2A53 rengi ve onun çok yakın koyu tonu */
  background: linear-gradient(135deg, #1E2A53 0%, #151e3b 100%);
  
  padding: 0 20px 40px 20px;
  box-sizing: border-box;
`;

/* 🔥 Sol Üst NavBar */
export const NavBar = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  z-index: 10;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: space-between;
  }
`;

export const BrandText = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(to right, #fff, #A3AED0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
`;

export const NavButton = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);

  &:hover {
    background: rgba(255,255,255,0.15);
    color: white;
    border-color: rgba(255,255,255,0.3);
    transform: translateY(-2px);
  }
`;

/* Ortadaki kart */
export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 2.2rem 2.2rem;
  
  /* Koyu Cam Efekti -> #1E2A53 (RGB: 30, 42, 83) tabanlı */
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
  z-index: 5;
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

  /* Input Arka Planı -> #1E2A53 (RGB: 30, 42, 83) */
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

  /* Buton rengi: Tamamen #1E2A53 tonları */
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

/* Inline hata mesajları */
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
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// --- ANİMASYONLAR ---
const float = keyframes`
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- RENKLER ---
const colors = {
  primary: "#4318FF",
  secondary: "#00D9F5",
  glassBg: "rgba(30, 42, 83, 0.85)", 
  glassBorder: "rgba(255, 255, 255, 0.1)",
};

/* PageContainer */
export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  background-color: #0b1437; 
  z-index: 1;
  padding: 0 20px 40px 20px;
  box-sizing: border-box;

  /* Arka plan efektleri */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.3;
    z-index: -1;
    animation: ${float} 12s infinite ease-in-out alternate;
  }

  &::before {
    background: ${colors.primary};
    top: -150px;
    left: -150px;
  }

  &::after {
    background: ${colors.secondary};
    bottom: -150px;
    right: -150px;
    animation-delay: -6s;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    overflow-y: auto; 
    padding-bottom: 60px;
  }
`;

/* NavBar */
export const NavBar = styled.div`
  position: relative; 
  width: 100%;
  max-width: 100%;    
  padding: 20px 40px; /* 🔥 Padding biraz kısıldı (30px -> 20px) */
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  gap: 30px;          
  z-index: 10;
  flex-shrink: 0;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 20px;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

export const BrandText = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #fff, #A3AED0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const NavButton = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255,255,255,0.2);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

/* 🔥 SignUpContainer (Daha Kompakt) */
export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 500px;
  
  /* 🔥 PADDING AZALTILDI: Kart boyutu küçüldü */
  padding: 1.8rem 2.2rem; 
  box-sizing: border-box;
  
  background: rgba(30, 42, 83, 0.7); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  z-index: 5;
  animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;

  @media (max-width: 480px) {
    width: 90%;
    padding: 1.5rem;
    margin-top: 10px;
  }
`;

/* Başlık */
export const SignUpHeading = styled.h2`
  font-size: 1.8rem; /* 🔥 Font boyutu biraz küçültüldü */
  font-weight: 700;
  margin-bottom: 1.2rem; /* 🔥 Alt boşluk kısıldı */
  text-align: center;
  
  background: linear-gradient(135deg, #FFFFFF 0%, #E0E5F2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

/* Form alanı */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 0.8rem; /* 🔥 Inputlar arası boşluk kısıldı */

  label {
    display: block;
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }
`;

/* Input alanı */
export const InputField = styled.input`
  width: 100%;
  padding: 12px 16px; /* 🔥 Yükseklik biraz kısıldı */
  font-size: 0.95rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(30, 42, 83, 0.4); 
  color: white;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.secondary};
    background: rgba(30, 42, 83, 0.6);
    box-shadow: 0 0 0 4px rgba(0, 217, 245, 0.15);
  }
`;

/* Select alanı */
export const SelectField = styled.select`
  width: 100%;
  padding: 12px 16px; /* 🔥 Yükseklik biraz kısıldı */
  font-size: 0.95rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(30, 42, 83, 0.4);
  color: white;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.secondary};
    background: rgba(30, 42, 83, 0.6);
    box-shadow: 0 0 0 4px rgba(0, 217, 245, 0.15);
  }

  option {
    background: #0b1437;
    color: white;
    padding: 10px;
  }
`;

/* Hata mesajı */
export const ErrorText = styled.div`
  color: #ff6b6b;
  font-size: 0.75rem;
  margin-top: 4px;
  font-weight: 500;
`;

/* Buton */
export const ActionButton = styled.button`
  width: 100%;
  margin-top: 1.2rem; /* 🔥 Üst boşluk kısıldı */
  padding: 12px;      /* 🔥 Yükseklik kısıldı */
  border: none;
  border-radius: 12px;
  
  background: linear-gradient(135deg, #4318FF 0%, #2B3674 100%);
  color: white;
  
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(67, 24, 255, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(67, 24, 255, 0.6);
    background: linear-gradient(135deg, #5833FF 0%, #3B4B96 100%);
  }
`;

export const LoginRedirect = styled.div`
  margin-top: 1.2rem; /* 🔥 Boşluk kısıldı */
  width: 100%;
  text-align: center;

  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);

  a {
    color: ${colors.secondary};
    margin-left: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s;
    
    &:hover { 
      color: white;
      text-decoration: underline; 
    }
  }
`;
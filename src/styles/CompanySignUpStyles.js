import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  /* Landing page ve Login ile aynı background */
  background: radial-gradient(circle at top left, #1B254B, #111C44);
  
  padding: 0 20px 40px 20px;
  box-sizing: border-box;
`;

/* 🔥 DÜZELTME: NavBar
   - max-width kaldırıldı (Ekranın tamamını kaplasın diye).
   - justify-content: flex-start yapıldı (Sola yaslansın diye).
   - padding artırıldı (Köşeye yapışmasın diye).
*/
export const NavBar = styled.div`
  position: relative; 
  width: 100%;
  max-width: 100%;    /* 🔥 Kısıtlama kalktı, tam genişlik */
  padding: 30px 40px; /* 🔥 Sol köşeden boşluk */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 🔥 Sola hizala */
  gap: 30px;          /* 🔥 Logo ile buton arası boşluk */
  z-index: 10;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 20px;
    justify-content: space-between; /* Mobilde yine iki uca yaslayabiliriz */
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

/* Kart */
export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 2.2rem 2.5rem;
  box-sizing: border-box;
  
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  
  border-radius: 20px;
  color: white;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
  z-index: 5;
`;

/* Başlık */
export const SignUpHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 0 6px rgba(255,255,255,0.4);
`;

/* Form alanı */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.9);
  }
`;

/* Input alanı */
export const InputField = styled.input`
  width: 100%;
  padding: 0.75rem 0.8rem;
  font-size: 0.95rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.18);
  color: white;
  outline: none;
  transition: 0.25s;
  box-sizing: border-box;

  &:focus {
    border-color: #4ecbff;
    box-shadow: 0 0 8px rgba(78,203,255,0.6);
  }
`;

/* Select alanı */
export const SelectField = styled.select`
  width: 100%;
  padding: 0.75rem 0.8rem;
  font-size: 0.95rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.18);
  color: white;
  outline: none;
  transition: 0.25s;
  box-sizing: border-box;

  option {
    background: white !important;
    color: black !important;
    padding: 10px;
  }
`;

/* Hata mesajı */
export const ErrorText = styled.div`
  color: #ff8080;
  font-size: 0.75rem;
  margin-top: 4px;
`;

/* Buton */
export const ActionButton = styled.button`
  width: 100%;
  margin-top: 1.2rem;
  padding: 0.85rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #3a559a, #1A244A);
  color: white;
 
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    background: linear-gradient(135deg, #4b6cb7, #263875);
    box-shadow:
      0 0 12px rgba(75, 108, 183, 0.7),
      0 0 25px rgba(26, 36, 74, 0.5);
  }
`;

export const LoginRedirect = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;

  font-size: 0.85rem;
  opacity: 0.85;

  a {
    color: #4ecbff;
    margin-left: 5px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
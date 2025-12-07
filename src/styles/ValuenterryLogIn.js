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
  glassBg: "rgba(255, 255, 255, 0.05)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
};

/* Full Page Wrapper */
export const FullPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  /* Arka plan */
  background-color: #0b1437; 
  z-index: 1;

  /* Hareketli Arka Plan Işıkları */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.3;
    z-index: -1;
    animation: ${float} 10s infinite ease-in-out alternate;
  }

  &::before {
    background: ${colors.primary};
    top: -100px;
    left: -100px;
  }

  &::after {
    background: ${colors.secondary};
    bottom: -100px;
    right: -100px;
    animation-delay: -5s;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
    padding: 20px 0 40px 0;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

/* NavBar */
export const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 10;
  box-sizing: border-box;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    position: relative;
    padding: 20px;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

/* Logo */
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

/* Anasayfa Butonu */
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

/* Login kutusu */
export const LoginContainer = styled.div`
  width: 100%;
  max-width: 430px;
  padding: 3rem 2.5rem; /* Biraz daha geniş iç boşluk */
  
  /* Gelişmiş Cam Efekti */
  background: rgba(255, 255, 255, 0.05); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  z-index: 5;
  animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;

  @media (max-width: 480px) {
    width: 90%;
    padding: 2rem;
    margin-top: 20px;
  }
`;

/* Form içeriğini ortalayan wrapper */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

/* Başlık */
export const LoginHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  
  background: linear-gradient(135deg, #FFFFFF 0%, #E0E5F2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

/* Input bölümü */
export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }
`;

/* Input alanı */
export const InputField = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05); /* Daha şeffaf */
  color: white;
  outline: none;
  font-size: 0.95rem;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.secondary};
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 4px rgba(0, 217, 245, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

/* Beni Hatırla Stilleri */
export const RememberMeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 20px;
  gap: 10px;

  input {
    accent-color: ${colors.primary};
    width: 16px; 
    height: 16px;
    cursor: pointer;
  }
`;

export const RememberLabel = styled.label`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  user-select: none;
`;

/* Giriş Yap butonu */
export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  padding: 14px;
  border: none;
  border-radius: 12px;
  
  /* Modern Gradient */
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
  
  &:active {
    transform: translateY(0);
  }
`;

/* Hesap oluşturma metni */
export const SignUpText = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
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


export const AltLogin = styled.div``;
export const AltButtons = styled.div``;
export const AltButton = styled.button``;
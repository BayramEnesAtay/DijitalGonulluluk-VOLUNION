import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// --- TEMA RENKLERİ ---
const colors = {
  primary: "#4318FF",
  secondary: "#00D9F5", 
  textMain: "#FFFFFF",
  glassBg: "rgba(255, 255, 255, 0.03)",
  glassBorder: "rgba(255, 255, 255, 0.08)",
  hoverBg: "rgba(67, 24, 255, 0.2)",
};

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

// ---------- Global Wrapper ----------
export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;        /* Tam ekran yüksekliği */
  overflow: hidden;     /* 🔥 Scrollbar TAMAMEN KAPALI */
  padding: 40px 20px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* İçeriği dikeyde ortala */
  
  /* 🔥 Footer payı: Footer küçüldüğü için burayı da biraz azalttım */
  padding-bottom: 110px; 
  
  font-family: 'DM Sans', 'Inter', sans-serif;
  color: ${colors.textMain};
  
  background-color: #0b1437; 
  position: relative; 
  z-index: 1;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.4;
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
    height: 100vh;
    overflow: hidden;
    padding-bottom: 120px; /* Mobilde footer payını da kıstım */
    
    justify-content: flex-start;
    padding-top: 12vh;
    
    &::before, &::after {
      width: 300px;
      height: 300px;
    }
  }
`;

// ---------- Logo Alanı ----------
export const LogoContainer = styled.div`
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.8s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  img {
    width: 60px;
    height: auto;
  }

  /* 🔥 Mobilde logonun yukarıda kalıp kaybolmaması için margin */
  @media (max-width: 768px) {
    margin-top: 40px; /* Biraz daha yukarı aldım (60->40) */
  }
`;

export const LogoText = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin: 0;
  background: linear-gradient(90deg, #fff, #A3AED0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// ---------- Başlıklar ----------
export const Heading = styled.h2`
  font-size: 3.5rem; 
  font-weight: 700;  
  letter-spacing: -1px;
  margin-bottom: 15px; 
  line-height: 1.1;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;
  
  background: linear-gradient(135deg, #FFFFFF 0%, #E0E5F2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 20px; 
    padding: 0 10px;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 500px;
  margin-bottom: 50px; 
  line-height: 1.6;
  color: #A3AED0; 
  animation: ${fadeInUp} 0.8s ease-out 0.3s backwards;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

// ---------- Grid ve Kartlar ----------
export const OptionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px; 
  animation: ${fadeInUp} 0.8s ease-out 0.5s backwards;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const OptionCard = styled(Link)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  padding: 50px 40px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 300px;
  min-height: 300px;
  text-decoration: none;
  color: white;
  
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: 0.4s;
  }
  
  svg {
    width: 90px;
    height: 90px;
    margin-bottom: 30px;
    stroke-width: 1.2;
    color: #fff;
    opacity: 0.9;
    transition: all 0.4s ease;
    filter: drop-shadow(0 0 15px rgba(67, 24, 255, 0.5));
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 50px rgba(67, 24, 255, 0.3);
    
    &::before { opacity: 1; }

    svg {
      transform: scale(1.1) rotate(-5deg);
      color: ${colors.secondary};
      filter: drop-shadow(0 0 25px ${colors.secondary});
    }
  }

  @media (max-width: 768px) {
    width: 85%;
    max-width: 280px; 
    padding: 20px;
    min-height: 160px; 

    svg {
      width: 45px;
      height: 45px;
      margin-bottom: 10px;
    }
  }
`;

export const OptionLabel = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-top: 10px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// ---------- Footer (SABİT & DARALTILMIŞ) ----------
export const FooterWrapper = styled.div`
  width: 100%;
  /* 🔥 Yükseklik azaltıldı: Padding küçültüldü */
  padding: 15px 40px; 
  box-sizing: border-box;
  
  background: rgba(11, 20, 55, 0.8);
  backdrop-filter: blur(15px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #A3AED0;
  z-index: 10;
  
  /* 🔥 Footer daima en altta sabit */
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    /* 🔥 Mobilde footer elemanları arası boşluk iyice kısıldı */
    gap: 4px; 
    text-align: center;
    /* 🔥 Mobilde padding daha da küçültüldü (Daha ince footer) */
    padding: 10px 15px; 
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: #A3AED0;
    text-decoration: none;
    transition: 0.3s;
    font-weight: 500;
    cursor: pointer;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: ${colors.secondary};
      transition: width 0.3s;
    }

    &:hover {
      color: #fff;
      &::after { width: 100%; }
    }
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px; 
    font-size: 0.75rem; /* Link yazıları biraz küçüldü */
  }
`;

export const FooterMission = styled.div`
  opacity: 0.8;
  max-width: 400px;
  text-align: right;
  font-size: 0.85rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    /* Mobilde açıklama yazısını daha kompakt yaptık */
    font-size: 0.65rem; 
    line-height: 1.2;
  }
`;

/* --- POP-UP (MODAL) --- */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); 
  backdrop-filter: blur(10px); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
  padding: 20px;
  box-sizing: border-box;
  animation: ${fadeInUp} 0.3s ease;
`;

export const ModalContent = styled.div`
  background: linear-gradient(145deg, #111C44, #1B254B); 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  padding: 40px;
  border-radius: 24px;
  width: 90%;
  max-width: 600px;
  position: relative;
  text-align: left;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  color: #fff;
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: ${colors.secondary}; 
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 15px;
  }

  p {
    line-height: 1.7;
    color: #E0E5F2;
    font-size: 1.05rem;
    white-space: pre-line; 
  }

  @media (max-width: 768px) {
    padding: 25px;
    h2 { font-size: 1.5rem; }
    p { font-size: 0.95rem; }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255,255,255,0.1);
  border: none;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.danger};
    color: #fff;
    transform: rotate(90deg);
  }
`;
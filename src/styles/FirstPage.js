import { Link } from "react-router-dom";
import styled from "styled-components";

// --- TEMA RENKLERİ ---
const colors = {
  primary: "#4318FF",
  textMain: "#FFFFFF",
  glassBg: "rgba(255, 255, 255, 0.05)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
  hoverBg: "#4318FF",
};

// ---------- Global Wrapper ----------
export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;    /* Scrollbar yok */
  padding: 40px 20px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* 🔥 İçeriği biraz yukarı itmek için alt tarafa ekstra boşluk verdim */
  padding-bottom: 100px; 
  
  font-family: 'DM Sans', 'Inter', sans-serif;
  color: ${colors.textMain};
  
  background: radial-gradient(circle at top left, #1B254B, #111C44); 

  text-align: center;
  position: relative; 
`;

// ---------- Footer (Sabit) ----------
export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #A3AED0;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
    padding: 20px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #A3AED0;
    text-decoration: none;
    transition: 0.3s;
    font-weight: 500;

    &:hover {
      color: #fff;
    }
  }
`;

export const FooterMission = styled.div`
  opacity: 0.7;
  max-width: 400px;
  text-align: right;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// ---------- Başlıklar ----------
export const Heading = styled.h1`
  font-size: 3.8rem; /* Biraz daha büyüttüm */
  font-weight: 800;  /* Daha kalın */
  letter-spacing: 2px;
  margin-bottom: 10px; /* Alt boşluğu azalttım */
  line-height: 1.1;
  text-transform: uppercase;
  
  /* 🔥 Logo Efecti Buraya Taşındı */
  background: linear-gradient(to right, #fff, #A3AED0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 600px;
  margin-bottom: 40px; /* Butonlara olan mesafeyi ayarladım */
  line-height: 1.6;
  color: #A3AED0; 
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

// ---------- Grid ve Kartlar ----------
export const OptionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 900px;
`;

export const OptionCard = styled(Link)`
  background: ${colors.glassBg};
  border: 1px solid ${colors.glassBorder};
  border-radius: 24px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  min-height: 280px;
  text-decoration: none;
  color: white;
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
  
  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 24px;
    stroke-width: 1.5;
    color: white;
    opacity: 0.8;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.2));
  }

  &:hover {
    background: ${colors.hoverBg}; 
    border-color: ${colors.hoverBg};
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(67, 24, 255, 0.4); 
    
    svg {
      opacity: 1;
      transform: scale(1.1);
      filter: drop-shadow(0 0 20px rgba(255,255,255,0.6));
    }
  }

  @media (max-width: 768px) {
    width: 100%; 
    max-width: 320px;
    padding: 30px;
    min-height: 220px;
  }
`;

export const OptionLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 10px;
`;
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
/* --- POP-UP (MODAL) STİLLERİ --- */
/* (Bu kodları src/styles/FirstPage.js dosyasının EN ALTINA yapıştır) */

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Arka planı karart */
  backdrop-filter: blur(8px);     /* Arka planı bulanıklaştır */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* En üstte durması için */
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalContent = styled.div`
  background: rgba(20, 30, 60, 0.95); /* Koyu Lacivert Zemin */
  border: 1px solid rgba(255, 255, 255, 0.1); /* İnce beyaz çerçeve */
  padding: 40px;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  position: relative;
  text-align: left;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  color: #fff;
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: #4318FF; /* Tema Rengi */
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 10px;
  }

  p {
    line-height: 1.6;
    color: #A3AED0;
    font-size: 1rem;
    white-space: pre-line; /* Alt satıra geçişleri algıla */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #A3AED0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;
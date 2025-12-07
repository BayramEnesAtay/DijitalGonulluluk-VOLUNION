import { Link } from "react-router-dom";
import styled from "styled-components";

// --- TEMA RENKLERİ (Dashboard ile uyumlu) ---
const colors = {
  primary: "#4318FF",   // Dashboard'daki ana renk
  textMain: "#FFFFFF",
  glassBg: "rgba(255, 255, 255, 0.05)", // Çok hafif şeffaf zemin
  glassBorder: "rgba(255, 255, 255, 0.1)",
  hoverBg: "#4318FF",   // Hover olunca marka rengi
};

// ---------- Global Wrapper ----------
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh; /* Ekranı tam kaplasın */
  padding: 40px 20px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  font-family: 'DM Sans', 'Inter', sans-serif; /* Profesyonel Font */
  color: ${colors.textMain};
  
  /* Eğer arka planda resim yoksa, şık bir gradient ekleyelim */
  /* Varsa bu satırı silebilirsin */
  background: radial-gradient(circle at top left, #1B254B, #111C44); 

  text-align: center;
`;

// ---------- Başlıklar ----------
const Heading = styled.h1`
  font-size: 3.5rem; /* Biraz daha büyük ve iddialı */
  font-weight: 700;
  letter-spacing: -1px; /* Harfleri biraz sıkılaştır, modern durur */
  margin-bottom: 16px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  opacity: 0.7;
  max-width: 600px;
  margin-bottom: 50px;
  line-height: 1.6;
  color: #A3AED0; /* Dashboard'daki gri ton */
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

// ---------- Grid ----------
const OptionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap; /* Sığmazsa aşağı at */
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 900px;
`;

// ---------- Kart Tasarımı (High-End Glassmorphism) ----------
const OptionCard = styled(Link)`
  /* Temel Kart Yapısı */
  background: ${colors.glassBg};
  border: 1px solid ${colors.glassBorder};
  border-radius: 24px;
  padding: 40px 30px;
  
  /* Düzen */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Boyutlandırma */
  width: 280px;
  min-height: 280px;
  text-decoration: none;
  color: white;
  
  /* Efektler */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Yaylanma efekti */
  
  /* SVG İkon Ayarları */
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

  /* --- HOVER DURUMU (Profesyonel Dokunuş) --- */
  &:hover {
    background: ${colors.hoverBg}; /* Marka rengine dönüş */
    border-color: ${colors.hoverBg};
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(67, 24, 255, 0.4); /* Glow efekti */
    
    svg {
      opacity: 1;
      transform: scale(1.1);
      filter: drop-shadow(0 0 20px rgba(255,255,255,0.6));
    }
  }

  /* Mobil Uyumu */
  @media (max-width: 768px) {
    width: 100%; /* Mobilde tam genişlik */
    max-width: 320px;
    padding: 30px;
    min-height: 220px;
  }
`;

// ---------- Etiket ----------
const OptionLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 10px;
`;

export {
  PageWrapper,
  Heading,
  SubHeading,
  OptionsGrid,
  OptionCard,
  OptionLabel,
};
import styled from "styled-components";

// --- ORTAK TEMA (Firma Tarafıyla Aynı) ---
const theme = {
  bg: "#F4F7FE",
  sidebarBg: "#111C44",
  cardBg: "#FFFFFF",
  primary: "#4318FF",
  primaryHover: "#2B00D6",
  textMain: "#2B3674",
  textLight: "#A3AED0",
  border: "#E0E5F2",
  overlay: "rgba(0, 0, 0, 0.4)"
};

/* 1. ANA KAPSAYICI */
export const DashboardContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${theme.bg};
  font-family: 'DM Sans', 'Inter', sans-serif;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* 2. SIDEBAR (Mobil Uyumlu) */
export const Sidebar = styled.div`
  width: 270px;
  background: ${theme.sidebarBg};
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 10px;
  flex-shrink: 0;
  z-index: 50;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
  }
`;

export const SidebarItem = styled.div`
  padding: 14px 20px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: ${theme.textLight};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding-left: 25px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5px;
    font-size: 12px;
    
    &:hover {
      background: transparent;
      color: ${theme.primary};
      padding-left: 5px;
    }
  }
`;

/* 🔥 YENİ EKLENEN: Çıkış Butonu Stili */
export const LogoutItem = styled(SidebarItem)`
  margin-top: auto; /* En alta iter */
  color: #FF5B5B;   /* Hafif kırmızı ton */
  border: 1px solid rgba(255, 91, 91, 0.1);

  &:hover {
    background: rgba(255, 91, 91, 0.15);
    color: #FF8080;
    padding-left: 20px; /* Diğerleri kadar kaymasın */
    border-color: rgba(255, 91, 91, 0.3);
  }

  @media (max-width: 768px) {
    margin-top: 0; /* Mobilde alta itme iptal (yan yana dizilim) */
    border: none;
    
    &:hover {
      padding-left: 5px;
    }
  }
`;

/* 3. İÇERİK ALANI */
export const Content = styled.div`
  flex: 1;
  background: ${theme.bg};
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* İçeriği ortala */

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #C4CEDB;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    padding-bottom: 90px;
  }
`;

/* 4. PROFİL & LİSTE KARTI (Card Bileşeniyle Aynı Mantık) */
export const ProfileCard = styled.div`
  background: ${theme.cardBg};
  border-radius: 20px;
  padding: 35px;
  width: 100%;
  margin-bottom: 25px;
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 5px 30px rgba(0,0,0,0.03);

  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${theme.textMain};
    margin: 0;
    border-bottom: 1px solid ${theme.border};
    padding-bottom: 15px;
  }

  p {
    color: ${theme.textLight};
    font-size: 15px;
    line-height: 1.6;
  }

  strong {
    color: ${theme.textMain};
    font-size: 16px;
  }
`;

/* 5. ARAMA VE FİLTRELEME */
export const SearchBar = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid ${theme.border};
  background: white;
  margin-bottom: 20px;
  font-size: 15px;
  color: ${theme.textMain};
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${theme.primary};
    box-shadow: 0 0 0 4px rgba(67, 24, 255, 0.08);
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  width: 100%;
  flex-wrap: wrap;
`;

export const SelectBox = styled.select`
  padding: 14px 20px;
  background: white;
  border-radius: 14px;
  border: 1px solid ${theme.border};
  cursor: pointer;
  color: ${theme.textMain};
  font-size: 14px;
  min-width: 180px;
  outline: none;
  
  &:focus {
    border-color: ${theme.primary};
  }
`;

/* 6. İLAN GRID SİSTEMİ */
export const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  width: 100%;
`;

export const JobCard = styled.div`
  background: white;
  border: 1px solid ${theme.border};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.25s ease;
  position: relative;
  
  h3 {
    margin: 0;
    font-size: 18px;
    color: ${theme.textMain};
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: ${theme.textLight};
  }

  &:hover {
    border-color: ${theme.primary};
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.06);
  }
`;

/* 7. BUTONLAR */
export const JobButton = styled.button`
  margin-top: auto; /* Kartın en altına it */
  padding: 12px 20px;
  background: ${(p) => (p.disabled ? "#E0E5F2" : theme.primary)};
  color: ${(p) => (p.disabled ? "#A3AED0" : "white")};
  border-radius: 12px;
  border: none;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background: ${(p) => (p.disabled ? "#E0E5F2" : theme.primaryHover)};
    transform: ${(p) => (p.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(p) => (p.disabled ? "none" : "0 5px 15px rgba(67, 24, 255, 0.2)")};
  }
`;

/* 8. MODAL (POP-UP) */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 28, 68, 0.4); /* Hafif koyu perde */
  backdrop-filter: blur(4px); /* Buzlu cam efekti */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 20px;
`;

export const ModalBox = styled.div`
  background: white;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  h3 {
    margin: 0 0 10px 0;
    color: ${theme.textMain};
    font-size: 20px;
    font-weight: 700;
  }

  /* Modal içindeki inputlar */
  input, textarea {
    padding: 14px 18px;
    border-radius: 12px;
    border: 1px solid ${theme.border};
    background: #F9F9FC;
    color: ${theme.textMain};
    font-family: inherit;
    font-size: 14px;
    width: 100%;
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: ${theme.primary};
      background: white;
    }
  }

  /* Modal Butonları */
  button {
    padding: 14px;
    border-radius: 12px;
    border: none;
    background: ${theme.primary};
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: ${theme.primaryHover};
    }

    /* Kapat butonu */
    &:last-child {
      background: transparent;
      color: ${theme.textLight};
      border: 1px solid ${theme.border};
      
      &:hover {
        background: #F4F7FE;
        color: ${theme.textMain};
      }
    }
  }
`;
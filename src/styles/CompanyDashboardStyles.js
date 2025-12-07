import styled, { keyframes } from "styled-components";

// --- PROFESYONEL VE ZARİF TASARIM ---
const theme = {
  bg: "#F4F7FE",
  sidebarBg: "#111C44",
  cardBg: "#FFFFFF",
  primary: "#4318FF",
  primaryHover: "#2B00D6",
  textMain: "#2B3674",
  textLight: "#A3AED0",
  border: "#E0E5F2",
  danger: "#EE5D50",
  success: "#05CD99",
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

/* 2. SIDEBAR */
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

/* Çıkış Butonu Stili */
export const LogoutItem = styled(SidebarItem)`
  margin-top: auto; 
  color: ${theme.danger}; 
  border: 1px solid rgba(238, 93, 80, 0.1);

  &:hover {
    background: rgba(238, 93, 80, 0.15);
    color: #FF8080;
    padding-left: 20px;
    border-color: rgba(238, 93, 80, 0.3);
  }

  @media (max-width: 768px) {
    margin-top: 0;
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
  align-items: center;

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

/* 4. CARD */
export const Card = styled.div`
  background: ${theme.cardBg};
  border-radius: 20px;
  padding: 35px;
  width: 100%;
  max-width: 100%; 
  margin-bottom: 25px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid rgba(255,255,255,0.6);

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${theme.textMain};
    margin-bottom: 10px;
    border-bottom: 1px solid ${theme.border};
    padding-bottom: 15px;
  }

  h4 { margin: 0; font-size: 18px; color: ${theme.textMain}; }
  p { color: ${theme.textLight}; font-size: 15px; }

  /* Form Elemanları */
  input, select, textarea {
    width: 100%;
    padding: 14px 18px; 
    border: 1px solid ${theme.border};
    border-radius: 12px; 
    background: #F9F9FC;
    color: ${theme.textMain};
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: ${theme.primary};
      background: #fff;
      box-shadow: 0 0 0 4px rgba(67, 24, 255, 0.08);
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
    font-family: inherit;
  }

  /* Buton */
  button {
    background: ${theme.primary};
    color: white;
    border: none;
    padding: 12px 24px; 
    font-size: 14px; 
    font-weight: 500;
    border-radius: 10px; 
    cursor: pointer;
    transition: all 0.3s;
    width: auto; 
    min-width: 140px; 
    align-self: flex-start; 
    margin-top: 10px;

    &:hover {
      background: ${theme.primaryHover};
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(67, 24, 255, 0.2);
    }
    &:active { transform: translateY(0); }
  }

  @media (max-width: 768px) {
    padding: 20px;
    button { width: 100%; }
  }
`;

export const ProfileCard = styled(Card)``;

/* 5. JOB LIST */
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
    font-size: 17px;
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

export const JobButton = styled.button`
  margin-top: auto; 
  padding: 12px 20px;
  background: ${(p) => (p.disabled ? "#E0E5F2" : theme.primary)} !important;
  color: ${(p) => (p.disabled ? "#A3AED0" : "white")} !important;
  border-radius: 12px !important;
  border: none !important;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")} !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  transition: all 0.2s !important;
  width: 100% !important;

  &:hover {
    background: ${(p) => (p.disabled ? "#E0E5F2" : theme.primaryHover)} !important;
    transform: ${(p) => (p.disabled ? "none" : "translateY(-2px)")} !important;
    box-shadow: ${(p) => (p.disabled ? "none" : "0 5px 15px rgba(67, 24, 255, 0.2)")} !important;
  }
`;

/* 🔥 YARDIMCI ELEMENTLER (PROFESYONEL SEARCHBAR) */
export const SearchBar = styled.input`
  width: 100%;
  padding: 16px 20px; /* Geniş ve ferah */
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
    box-shadow: 0 0 0 4px rgba(67, 24, 255, 0.08); /* Glow efekti */
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
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
  &:focus { border-color: ${theme.primary}; }
`;

/* MODAL */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 28, 68, 0.4); 
  backdrop-filter: blur(4px);
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

  button {
    padding: 14px;
    border-radius: 12px;
    border: none;
    background: ${theme.primary};
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    width: 100%;

    &:hover { background: ${theme.primaryHover}; }

    /* Kapat butonu */
    &:last-child {
      background: transparent;
      color: ${theme.textLight};
      border: 1px solid ${theme.border};
      margin-top: 5px;
      &:hover {
        background: #F4F7FE;
        color: ${theme.textMain};
      }
    }
  }
`;

/* =========================================
   CHAT CSS
   ========================================= */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const slideIn = keyframes`
  from { transform: translateY(8px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`;

export const ChatWindowContainer = styled.div`
  position: fixed;
  bottom: 20px; right: 20px;
  width: 380px; height: 500px;
  background: #ffffff;
  border-radius: 20px;
  display: flex; flex-direction: column;
  box-shadow: 0 10px 35px rgba(0,0,0,0.25);
  overflow: hidden;
  animation: ${fadeIn} 0.25s ease;
  z-index: 999999;
  border: 1px solid ${theme.border};
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, #4a6cf7, #6a63ff);
  color: white; padding: 15px;
  text-align: center; font-weight: bold; font-size: 18px;
  position: relative; display: flex;
  justify-content: space-between; align-items: center;
`;

export const CloseChatButton = styled.button`
  background: transparent !important; border: none; color: white;
  font-size: 20px; cursor: pointer; padding: 0;
  width: auto !important; min-width: auto !important; margin: 0 !important;
  &:hover { color: #ffcccc; transform: scale(1.1); }
`;

export const ChatMessages = styled.div`
  flex: 1; padding: 15px; overflow-y: auto;
  display: flex; flex-direction: column; gap: 10px;
  background: #f9f9f9;
`;

export const MessageBubble = styled.div`
  padding: 10px 14px; border-radius: 14px; max-width: 80%;
  font-size: 14px; word-wrap: break-word;
  animation: ${slideIn} 0.2s ease;
  ${props => props.isMe ? `
    background: #4a6cf7; color: white; align-self: flex-end;
    border-bottom-right-radius: 2px;
  ` : `
    background: #e5e5ea; color: #333; align-self: flex-start;
    border-bottom-left-radius: 2px;
  `}
`;

export const ChatInputArea = styled.div`
  padding: 15px; display: flex; gap: 10px;
  background: white; border-top: 1px solid #eee;
`;

export const ChatInput = styled.input`
  flex: 1; padding: 10px; border-radius: 20px !important;
  border: 1px solid #ccc; font-size: 14px; outline: none;
  &:focus { border-color: #4a6cf7; }
`;

export const ChatSendButton = styled.button`
  background: #4a6cf7 !important; color: white; border: none;
  border-radius: 50% !important; width: 40px !important; height: 40px !important;
  min-width: 40px !important; padding: 0 !important;
  display: flex; justify-content: center; align-items: center;
  cursor: pointer; margin-top: 0 !important;
  &:hover { background: #3b5bdb !important; transform: scale(1.05); }
`;

export const IconChatButton = styled.button`
  background: transparent !important; border: none !important;
  padding: 5px !important; min-width: auto !important; width: auto !important;
  color: #4a6cf7 !important; cursor: pointer; margin: 0 !important;
  display: inline-flex !important; align-items: center; justify-content: center;
  &:hover { color: #2B00D6 !important; transform: scale(1.2); box-shadow: none !important; background: transparent !important; }
`;
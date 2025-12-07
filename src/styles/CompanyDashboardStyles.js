import styled from "styled-components";

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
  success: "#05CD99"
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

/* 🔥 YENİ EKLENEN: Çıkış Butonu Stili */
export const LogoutItem = styled(SidebarItem)`
  margin-top: auto; /* Sidebar'ın en altına iter */
  color: ${theme.danger}; /* Tema rengindeki kırmızı */
  border: 1px solid rgba(238, 93, 80, 0.1);

  &:hover {
    background: rgba(238, 93, 80, 0.15);
    color: #FF8080;
    padding-left: 20px;
    border-color: rgba(238, 93, 80, 0.3);
  }

  @media (max-width: 768px) {
    margin-top: 0; /* Mobilde alta itme iptal */
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
  padding: 20px; /* Kenar boşlukları az */
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

/* 4. CARD - FORM VE BUTON AYARLARI BURADA */
export const Card = styled.div`
  background: ${theme.cardBg};
  border-radius: 20px;
  padding: 35px;
  width: 100%;
  max-width: 100%; /* Tam genişlik */
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

  h4 {
    margin: 0;
    font-size: 18px;
    color: ${theme.textMain};
  }

  p {
    color: ${theme.textLight};
    font-size: 15px;
  }

  /* Form Elemanları (Inputlar geniş kalsın) */
  input, select, textarea {
    width: 100%;
    padding: 14px 18px; /* Biraz daha kibar padding */
    border: 1px solid ${theme.border};
    border-radius: 12px; /* Çok yuvarlak değil, ideal */
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

  /* --- PROFESYONEL BUTON AYARI --- */
  button {
    background: ${theme.primary};
    color: white;
    border: none;
    
    /* ZARİF BOYUTLANDIRMA */
    padding: 12px 24px; /* Yüksekliği azalttık, yanları makul tuttuk */
    font-size: 14px; /* Dev gibi yazı yerine okunaklı boyut */
    font-weight: 500;
    border-radius: 10px; /* Inputlardan bir tık daha az yuvarlak, ciddi dursun */
    
    cursor: pointer;
    transition: all 0.3s;
    
    /* GENİŞLİK AYARI: Masaüstünde 'auto' (içerik kadar) */
    width: auto; 
    min-width: 140px; /* Çok da küçük olmasın */
    
    /* Hizalama: Sola yaslı (Form akışına uygun) */
    align-self: flex-start; 
    
    margin-top: 10px;

    &:hover {
      background: ${theme.primaryHover};
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(67, 24, 255, 0.2);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    
    /* Mobilde buton parmakla basmak için tam boy olsun */
    button {
      width: 100%;
    }
  }
`;

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

/* YARDIMCI ELEMENTLER */
export const SearchBar = styled.input`
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const SelectBox = styled.select`
  min-width: 180px;
`;

export const PaginationWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    background: white;
    color: ${theme.textMain};
    border: 1px solid ${theme.border};
    padding: 8px 14px;
    border-radius: 8px;
    width: auto; /* Pagination butonları küçük kalsın */
    min-width: auto;
    
    &:hover {
      background: ${theme.bg};
      color: ${theme.primary};
    }
  }
`;
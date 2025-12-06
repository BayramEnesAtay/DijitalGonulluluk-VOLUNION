import styled from "styled-components";

/* Ana kapsayıcı */
export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #12e6c7, #1e60e8);
  overflow: hidden;
`;

/* Sidebar */
export const Sidebar = styled.div`
  width: 250px;
  min-width: 220px;
  background: rgba(31,42,64,0.95);
  color: white;
  padding: 25px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  box-shadow: 3px 0 12px rgba(0,0,0,0.2);
  z-index: 2;
`;

/* Sidebar item */
export const SidebarItem = styled.div`
  padding: 15px 18px;
  background: #27344ecc;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background: #3b4d6cdd;
    transform: translateX(6px);
  }

  &.active {
    background: #4b6fa8;
    transform: translateX(6px);
  }
`;

/* İçerik alanı – scroll + pagination uyumlu */
export const Content = styled.div`
  flex: 1;
  margin-left: 300px;
  width: calc(100% - 300px);

  padding: 40px 60px;
  padding-bottom: 140px;

  height: 100vh;
  overflow-y: auto;   /* SCROLL BURADA ÇALIŞIR */

  display: flex;
  flex-direction: column;

  scrollbar-width: thin;
  scrollbar-color: #4d4d4d transparent;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #4d4d4d;
    border-radius: 4px;
  }
`;


/* Liste sayfası wrapper */
export const ListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

/* Genel kart */
export const Card = styled.div`
  background: #ffffffee;
  border-radius: 14px;
  padding: 25px;
  box-shadow: 0 5px 14px rgba(0,0,0,0.15);
  max-width: 780px;
  margin-bottom: 25px;
`;

/* Arama */
export const SearchBar = styled.input`
  width: 80%;
  max-width: 700px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fff;
  margin-bottom: 18px;

  &:focus {
    outline: none;
    border-color: #1f2a40;
    box-shadow: 0 0 0 3px rgba(31,42,64,0.25);
  }
`;

/* Filtreler */
export const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const SelectBox = styled.select`
  padding: 12px 16px;
  background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  min-width: 180px;
  cursor: pointer;

  &:hover {
    border-color: #1f2a40;
  }
  &:focus {
    outline: none;
    border-color: #1f2a40;
    box-shadow: 0 0 0 3px rgba(31,42,64,0.25);
  }
`;

/* İlan Grid — ORTA BOY */
export const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
  margin-top: 10px;
  flex-grow: 1;
`;

/* Kartlar — Orta boy + puan ekli */
export const JobCard = styled.div`
  background: #ffffffee;
  padding: 18px 22px;
  border-radius: 12px;

  min-height: 130px;
  max-height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;

  box-shadow: 0 3px 10px rgba(0,0,0,0.12);
  transition: 0.25s ease;

  h3 {
    font-size: 18px;
    margin: 0;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    margin: 0;
    opacity: 0.8;
  }

  .score {
    margin-top: auto;
    font-size: 14px;
    font-weight: 600;
    color: #1f2a40;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(0,0,0,0.18);
  }
`;

/* Pagination — TAM GÖRÜNÜR */
export const PaginationWrapper = styled.div`
  margin-top: auto;
  padding: 20px 0 20px;

  display: flex;
  justify-content: center;
  gap: 15px;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  button {
    padding: 8px 14px;
    border-radius: 8px;
    border: none;
    background: #1f2a40;
    color: white;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
      background: #2f3f60;
    }
  }
`;

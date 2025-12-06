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
  background: rgba(31, 42, 64, 0.95);
  color: white;
  padding: 25px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  box-shadow: 3px 0 12px rgba(0, 0, 0, 0.2);
  z-index: 5;
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

/* İçerik */
export const Content = styled.div`
  flex: 1;
  margin-left: 260px;
  width: calc(100% - 260px);
  padding: 30px 35px;
  padding-bottom: 140px;
  height: 100vh;
  overflow-y: auto;

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

/* Card → FORM ARTIK ASLA TAŞMAZ */
export const Card = styled.div`
  background: #ffffffee;
  border-radius: 14px;
  padding: 25px;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.15);

  width: 100%;
  max-width: 620px;     
  margin: 0 auto 25px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  input,
  textarea,
  select {
    width: 100%;
    max-width: 100%;
    padding: 14px 16px;
    border-radius: 10px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    font-size: 15px;
    background: #fff;
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 14px;
    border-radius: 10px;
    border: none;
    background: #1f2a40;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: 0.25s;

    &:hover {
      background: #2f3f60;
    }
  }
`;

/* Arama */
export const SearchBar = styled.input`
  width: 100%;
  max-width: 700px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fff;
  margin-bottom: 18px;
`;

/* Filtreler */
export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

export const SelectBox = styled.select`
  padding: 12px 16px;
  background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  min-width: 180px;
`;

/* Job List grid → Artık TAŞMA YOK */
export const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
  width: 100%;
`;

/* Job Card */
export const JobCard = styled.div`
  background: #ffffffee;
  padding: 18px 22px;
  border-radius: 12px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  transition: 0.25s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
  }

  .score {
    margin-top: auto;
    font-weight: bold;
    color: #1f2a40;
  }
`;

/* Pagination */
export const PaginationWrapper = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;

  display: flex;
  justify-content: center;
  gap: 15px;

  button {
    padding: 8px 14px;
    border-radius: 8px;
    border: none;
    background: #1f2a40;
    color: white;
  }
`;

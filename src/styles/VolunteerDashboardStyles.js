import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #10e6c5, #1e70f2);
`;

/* ---------------- SIDEBAR ---------------- */
export const Sidebar = styled.div`
  width: 240px;
  background: #1f2a40cc;
  backdrop-filter: blur(6px);
  color: white;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SidebarItem = styled.div`
  padding: 12px 16px;
  background: #27344ecc;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 16px;

  &:hover {
    background: #3b4d6cee;
    transform: translateX(4px);
  }
`;

/* ---------------- CONTENT ---------------- */
export const Content = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

/* ---------------- PROFILE CARD (Eksik Olan Buydu) ---------------- */
export const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.94);
  padding: 24px;
  border-radius: 14px;
  max-width: 520px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  margin-bottom: 25px;

  h2 { margin-bottom: 10px; }
  p { opacity: 0.85; }
`;

/* ---------------- SEARCH ---------------- */
export const SearchBar = styled.input`
  width: 60%;
  max-width: 600px;
  min-width: 260px;
  padding: 14px 18px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.9);
  font-size: 15px;
  margin-bottom: 15px;
`;

/* ---------------- FILTERS ---------------- */
export const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const SelectBox = styled.select`
  padding: 12px 18px;
  border-radius: 10px;
  border: none;
  outline: none;
  min-width: 150px;
  background: rgba(255,255,255,0.9);
  font-size: 15px;
`;

/* ---------------- JOB CARDS ---------------- */
export const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
`;

export const JobCard = styled.div`
  background: rgba(255,255,255,0.92);
  padding: 18px;
  border-radius: 14px;
  min-height: 150px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: 0.25s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 18px rgba(0,0,0,0.18);
  }

  h3 { margin-bottom: 6px; }
`;

/* ---------------- PAGINATION ---------------- */
export const PaginationWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  button {
    padding: 8px 14px;
    border-radius: 8px;
    border: none;
    background: #1f2a40;
    color: white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #364462;
    }
  }
`;

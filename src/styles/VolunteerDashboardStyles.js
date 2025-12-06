import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #10e6c5, #1e70f2);
`;

export const Sidebar = styled.div`
  width: 240px;
  background: #1f2a40cc;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: white;
`;

export const SidebarItem = styled.div`
  padding: 14px 16px;
  background: #27344ecc;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: #3b4d6cdd;
    transform: translateX(6px);
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 32px;
  overflow-y: auto;
`;

export const ProfileCard = styled.div`
  background: #ffffffee;
  padding: 22px;
  border-radius: 12px;
  max-width: 520px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const SearchBar = styled.input`
  width: 60%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: white;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 18px;
`;

export const SelectBox = styled.select`
  padding: 14px 16px;
  background: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
`;

export const JobCard = styled.div`
  background: #ffffffdd;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const JobButton = styled.button`
  margin-top: auto;
  padding: 10px;
  background: ${(p) => (p.disabled ? "#999" : "#1f2a40")};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${(p) => (p.disabled ? "#999" : "#324163")};
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.55);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  background: white;
  padding: 30px;
  width: 420px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  input, textarea {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  button {
    padding: 12px;
    background: #1f2a40;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;

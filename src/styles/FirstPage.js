
import { Link } from "react-router-dom";
import styled from "styled-components";

// ---------- Styled Components ----------

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const OptionsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const OptionCard = styled(Link)`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }
`;

const OptionLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 0.8rem;
`;
export {
  PageWrapper,
  Heading,
  SubHeading,
  OptionsGrid,
  OptionCard,
  OptionLabel,
};
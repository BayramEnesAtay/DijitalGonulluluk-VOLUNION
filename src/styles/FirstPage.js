import { Link } from "react-router-dom";
import styled from "styled-components";

// ---------- Global Wrapper ----------
const PageWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: white;

  /* Arka plana hafif blur etkisi */
  backdrop-filter: blur(8px);
  padding-top: 40px;
`;

// ---------- Başlıklar ----------
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 0px 0px 10px rgba(255,255,255,0.3);
  margin-bottom: 1rem;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 3rem;
`;

// ---------- Grid ----------
const OptionsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// ---------- Kart Tasarımı ----------
const OptionCard = styled(Link)`
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  transition: 0.3s ease-in-out;

&:hover {
  transform: translateY(-12px) scale(1.07);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.55);

  /* 🔥 Arka planı sayfa gradientine çevir */
  background: linear-gradient(135deg, #42e3d9, #2b91ff);

  /* 🔥 Yazı rengini beyaz yap */
  color: white;
}


  /* --- SVG 3D ICON --- */
  svg {
    width: 72px;
    height: 72px;
    margin-bottom: 1.2rem;
    stroke-width: 1.7;

    /* 3D ışık-gölge efekti */
    filter:
      drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4))
      drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.5))
      drop-shadow(0px 0px 20px rgba(0, 150, 255, 0.45));

    transition: 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.18) translateY(-4px);
    filter:
      drop-shadow(0px 0px 25px rgba(255, 255, 255, 0.9))
      drop-shadow(0px 0px 40px rgba(0, 195, 255, 0.7));
  }
`;

// ---------- Etiket ----------
const OptionLabel = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 0.8rem;
  text-shadow: 0px 0px 6px rgba(255,255,255,0.4);
`;

export {
  PageWrapper,
  Heading,
  SubHeading,
  OptionsGrid,
  OptionCard,
  OptionLabel,
};

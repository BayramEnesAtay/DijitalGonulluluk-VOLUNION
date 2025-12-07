import styled from "styled-components";
import { Link } from "react-router-dom";

/* Form içeriğini ortalayan wrapper (Kart içi düzen için) */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

/* Login kutusu (ortada duran kart) */
export const LoginContainer = styled.div`
  width: 100%;
  max-width: 430px;

  padding: 2.2rem 2rem;

  background: rgba(40, 55, 100, 0.35); 
  border: 1px solid rgba(100, 120, 180, 0.3);
  backdrop-filter: blur(15px);

  border-radius: 20px;
  /* Margin auto yerine FullPageWrapper ile ortalıyoruz, ama mobilde garanti olsun diye kalsın */
  margin: 0 auto;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
  z-index: 5; /* Navbarın altında kalmasın ama arka planın üstünde olsun */
`;

/* Başlık */
export const LoginHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  text-align: center;
  text-shadow: 0 0 15px rgba(60, 80, 160, 0.5);
`;

/* Input bölümü */
export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
  }
`;

/* Input alanı */
export const InputField = styled.input`
  width: 100%;
  max-width: 360px;
  padding: 0.85rem;
  border-radius: 10px;

  border: 1px solid rgba(120, 140, 200, 0.4);
  background: rgba(40, 55, 100, 0.25);
  color: white;
  outline: none;

  &:focus {
    border-color: #4b6cb7;
    box-shadow: 0 0 12px rgba(75, 108, 183, 0.6);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

/* Giriş Yap butonu */
export const SubmitButton = styled.button`
  width: 100%;
  max-width: 360px;
  margin-top: 1rem;
  padding: 0.85rem;

  border: none;
  border-radius: 10px;

  background: linear-gradient(135deg, #3a559a, #1A244A);
  color: white;

  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;

  transition: 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    background: linear-gradient(135deg, #4b6cb7, #263875);
    box-shadow:
      0 0 12px rgba(75, 108, 183, 0.7),
      0 0 25px rgba(26, 36, 74, 0.5);
  }
`;

/* "veya" yazısı */
export const AltLogin = styled.div`
  margin-top: 1.8rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.9;
  color: white;
`;

/* Google butonu – ortalı */
export const AltButtons = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

/* Google ile Giriş butonu */
export const AltButton = styled.button`
  padding: 0.6rem 1.8rem;
  border-radius: 10px;

  border: 1px solid rgba(120, 140, 200, 0.4);
  background: rgba(40, 55, 100, 0.2);
  color: white;
  font-size: 0.9rem;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(60, 80, 140, 0.35);
    box-shadow: 0 10px 20px rgba(40, 55, 100, 0.3);
  }
`;

/* Hesap oluşturma metni – ortalı */
export const SignUpText = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.9;

  a {
    color: #6a89cc;
    margin-left: 5px;
    text-decoration: underline;
    
    &:hover {
        color: #82ccdd;
    }
  }
`;

/* 🔥🔥🔥 YENİ EKLENEN HEADER VE WRAPPER STİLLERİ 🔥🔥🔥 */

/* Sayfanın tamamını kaplayan kapsayıcı (Arka plan burada) */
export const FullPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative; /* Navbar için referans */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Landing page ile uyumlu arka plan */
  background: radial-gradient(circle at top left, #1B254B, #111C44);
  overflow: hidden;
`;

/* Sol üst köşedeki Navbar */
export const NavBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 30px; /* Logo ve buton arası boşluk */
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 20px;
    justify-content: space-between;
  }
`;

/* Marka İsmi (Logo) */
export const BrandText = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(to right, #fff, #A3AED0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
`;

/* Anasayfa Butonu */
export const NavButton = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);

  &:hover {
    background: rgba(255,255,255,0.15);
    color: white;
    border-color: rgba(255,255,255,0.3);
    transform: translateY(-2px);
  }
`;
import styled from "styled-components";

/* Kart */
export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 520px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
`;

/* Başlık */
export const SignUpHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 0 6px rgba(255,255,255,0.4);
`;

/* Form alanı */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;

  label {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.85);
  }
`;

/* Daha küçük input alanı */
export const InputField = styled.input`
  width: 100%;
  padding: 0.65rem 0.8rem;      /* küçültüldü */
  font-size: 0.9rem;            /* küçültüldü */
  border-radius: 8px;           /* daha kompakt */
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.18);
  color: white;
  outline: none;
  transition: 0.25s;

  &:focus {
    border-color: #4ecbff;
    box-shadow: 0 0 8px rgba(78,203,255,0.6);
  }
`;

/* Select alanı */
export const SelectField = styled.select`
  width: 100%;
  padding: 0.65rem 0.8rem;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.18);
  color: white;
  outline: none;
  transition: 0.25s;

  /* Açılır menü (alt seçenekler) */
  option {
    background: white !important;
    color: black !important;
    padding: 10px;
  }
`;

/* Hata mesajı */
export const ErrorText = styled.div`
  color: #ff8080;
  font-size: 0.75rem;
  margin-top: 3px;
`;

/* Buton */
export const ActionButton = styled.button`
  width: 100%;
  margin-top: 1.2rem;
  padding: 0.8rem;          /* biraz küçültüldü */
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #3a559a, #1A244A);
  color: white;
 
  font-size: 1rem;          /* daha uyumlu */
  font-weight: 600;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    transform: translateY(-5px) scale(1.04);
    background: linear-gradient(135deg, #4b6cb7, #263875);
    box-shadow:
      0 0 12px rgba(75, 108, 183, 0.7),
      0 0 25px rgba(26, 36, 74, 0.5);
  }
`;
export const LoginRedirect = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;   /* 🔥 ORTALAMA */

  font-size: 0.9rem;
  opacity: 0.85;

  a {
    color: #4ecbff;
    margin-left: 5px;
    text-decoration: underline;
    cursor: pointer;
  }
`;


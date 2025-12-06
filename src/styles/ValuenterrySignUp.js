import styled from "styled-components";

/* Ortadaki kart */
export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 2.2rem 2.2rem;
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
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  text-align: center;
  text-shadow: 0 0 8px rgba(255,255,255,0.4);
`;

/* Form alanı */
export const FormWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.85);
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.85rem;
  border-radius: 10px;

  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.18);
  color: white;
  outline: none;

  &:focus {
    border-color: #4ecbff;
    box-shadow: 0 0 10px rgba(78, 203, 255, 0.6);
  }

  &::placeholder {
    color: rgba(255,255,255,0.7);
  }
`;

/* Düğmeler */
export const ActionButton = styled.button`
  width: 100%;
  margin-top: 1.3rem;
  padding: 0.9rem;

  border: none;
  border-radius: 10px;

  background: linear-gradient(135deg, #3aa8ff, #1f7be5);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;

  transition: 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    background: linear-gradient(135deg, #6ddcff, #3aa8ff);
    box-shadow:
      0 0 12px rgba(109, 220, 255, 0.8),
      0 0 25px rgba(58, 168, 255, 0.6);
  }
`;

/* 🔥 Inline hata mesajları */
export const ErrorText = styled.span`
  font-size: 0.8rem;
  color: #ff6b6b;
  margin-top: 4px;
  display: block;
`;
export const SignInText = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.85;

  a {
    color: #4ecbff;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    margin-left: 5px;
  }
`;


import styled from "styled-components";

export const LoginContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  color: white;
  backdrop-filter: blur(8px);
`;

export const LoginHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background-color: rgba(37, 99, 235, 0.9);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(37, 99, 235, 1);
  }
`;

export const AltLogin = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
`;

export const AltButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const AltButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

import styled from "styled-components";

export const CustomForm = styled.div`
  margin: 0 auto 2rem auto;
  padding: 1rem;

  max-width: 25rem;

  text-align: center;

  background-color: var(--color-white);

  -webkit-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  -moz-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
`;

export const CustomInput = styled.input`
  width: 100%;
  padding: 0.5rem;

  font-size: 0.9rem;

  border: 1px solid #dde3e8;
  border-radius: 5px;

  &::placeholder {
    color: var(--color-gray);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;

  padding: 0.8rem;
  border-radius: 5px;

  font-size: 0.9rem;
  border: none;

  background-color: var(--color-main);
  color: var(--color-white);

  cursor: pointer;

  &:disabled {
    background-color: var(--color-text-light);
  }
`;

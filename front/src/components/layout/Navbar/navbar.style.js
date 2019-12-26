import styled from "styled-components";

export const CustomNavbar = styled.nav`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-white);
  padding: 0.8rem 2rem;

  width: 100%;

  -webkit-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  -moz-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
`;

export const LogoutButton = styled.button`
  margin-left: 1rem;
  padding: 0 1rem;

  background-color: #f2687f;
  color: white;

  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

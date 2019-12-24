import styled from "styled-components";

export const Card = styled.div`
  position: relative;

  padding: 1rem;
  background-color: pink;

  width: 16rem;
  margin-bottom: 2rem;

  background-color: var(--color-white);
  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  -moz-box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
  box-shadow: 0px 0px 80px -15px rgba(136, 186, 255, 0.34);
`;

export const DeleteButton = styled.div`
  position: absolute;

  width: 0.8rem;
  height: 0.8rem;

  border-radius: 50%;

  background-color: var(--color-red);

  cursor: pointer;
`;

export const ItemLinkButton = styled.a`
  display: block;
  width: 100% !important;

  padding: 0.5rem;
  background-color: var(--color-main);
  color: var(--color-white);

  border: none;
  border-radius: 5px;

  text-transform: uppercase;
  text-align: center;
`;

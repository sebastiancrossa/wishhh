import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionContainer = styled.div`
  max-width: 76rem;
  margin: 0 auto;
`;

export const ExternalLink = styled(Link)`
  font-size: 0.9rem;
  color: var(--color-main);
  text-decoration: underline;

  display: block;
  text-align: center;
`;

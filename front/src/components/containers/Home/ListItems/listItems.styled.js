import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";

export const Grid = styled(TransitionGroup)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 1rem;
`;
